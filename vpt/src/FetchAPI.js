async function ISBNApi(isbn) {
  var json = {
    title: "",
    authors: [],
    image_url: "",
  }

  fetch("https://openlibrary.org/isbn/" + isbn + ".json")
    .then((res) => res.json())
    .then(async (res) => {
      json.title = res.title
      await getAuthor(res, async (arr) => {
        json.authors = await arr
        json.title = res["title"]
      })
      await getThumbnailURL(isbn, async (arr) => {
        json.image_url = await arr
      })
    })
}

async function getThumbnailURL(isbn) {
  // let isbnID = "ISBN:" + isbn
  // let thumbnail_url = ""
  // fetch("https://covers.openlibrary.org/b/isbn/" + isbn + "-S.jpg")
  //   .then((res) => res.json())
  //   .then((res) => {
  //     console.log(isbnID, res[isbnID]["thumbnail_url"])
  //     console.log(res[isbnID])
  //     if ("thumbnail_url" in res[isbnID]) {
  //       thumbnail_url = res[isbnID]["thumbnail_url"]
  //       console.log(res[isbnID]["thumbnail_url"])
  //       callback(thumbnail_url)
  //     } else {
  //       thumbnail_url = "/testImg.jpg"
  //       callback(thumbnail_url)
  //     }
  //   })
  return "https://covers.openlibrary.org/b/isbn/" + isbn + "-L.jpg"
}

function getValidImage(isbnArrays, callback) {
  if (!!isbnArrays)
    callback(
      "https://covers.openlibrary.org/b/isbn/" + isbnArrays[0] + "-L.jpg"
    )
  else callback("./assets/testImg.jpg")
}

function getAuthor(data, callback) {
  var url = data["authors"]

  var authorsname = []
  Object.entries(url).forEach(([key, value]) => {
    fetch("https://openlibrary.org" + value.key + ".json")
      .then((res) => res.json())
      .then((json) => {
        authorsname.push(json["personal_name"])
      })
      .then(() => callback(authorsname))
  })
}

function EditionApi(id) {
  var json = {
    title: "",
    authors: [],
    image_url: "",
  }
  fetch("https://openlibrary.org/books/" + id + ".json")
    .then((res) => res.json())
    .then(async (data) => {
      await getAuthor(data, async (arr) => {
        json.authors = await arr
        json.title = data["title"]
        console.log(json)
      })
    })
}

function countCommonSubsequence(text1, text2) {
  let dp = new Array(text1.length + 1)
    .fill()
    .map(() => new Array(text2.length + 1).fill(0))

  for (let i = text1.length - 1; i >= 0; i--) {
    for (let j = text2.length - 1; j >= 0; j--) {
      if (text1[i] === text2[j]) {
        dp[i][j] = 1 + dp[i + 1][j + 1]
      } else {
        dp[i][j] = Math.max(dp[i][j + 1], dp[i + 1][j])
      }
    }
  }
  return dp[0][0]
}

function toAddOrNot(searchWord, query) {
  return true
  var text1 = searchWord.toLowerCase()
  var text2 = query.toLowerCase()
  var matchCount = countCommonSubsequence(text1, text2)
  var minTitleLength = Math.min(text1.length, text2.length)
  if (minTitleLength <= 7) {
    if (matchCount >= Math.floor((minTitleLength * 90) / 100)) {
      return true
    }
    return false
  } else if (minTitleLength <= 10) {
    if (matchCount >= Math.floor((minTitleLength * 85) / 100)) {
      return true
    }
    return false
  } else if (minTitleLength <= 20) {
    if (matchCount >= Math.floor((minTitleLength * 75) / 100)) {
      return true
    }
    return false
  } else {
    if (matchCount >= Math.floor((minTitleLength * 70) / 100)) {
      return true
    }
    return false
  }
}

function getSearchResultByBook(book, page = 1) {
  fetch(
    `https://openlibrary.org/search.json?q=${book.replace(
      /\s+/g,
      "+"
    )}&page=${page}`
  )
    .then((res) => res.json())
    .then((json) => {
      var return_json = {}
      return_json["num_pages"] = Math.ceil(json.numFound / 100)
      return_json["result"] = []
      for (var doc of json.docs) {
        if (toAddOrNot(book, doc.title)) {
          return_json["result"].push({
            title: doc.title,
            first_edition: doc.first_publish_error,
            authors: doc.author_name,
            imgURL: getValidImage(doc.isbn),
          })
        }
      }
      return return_json
    })
}

function getSearchResultByAuthor(author, page = 1) {
  fetch(
    `https://openlibrary.org/search.json?author=${author.replace(
      /\s+/g,
      "+"
    )}&page=${page}`
  )
    .then((res) => res.json())
    .then((json) => {
      var return_json = {}
      return_json["num_pages"] = Math.ceil(json.numFound / 100)
      return_json["result"] = []
      for (var doc of json.docs) {
        if (toAddOrNot(author, doc.authors.join(" "))) {
          return_json["result"].push({
            title: doc.title,
            first_edition: doc.first_publish_error,
            authors: doc.author_name,
            imageURL: getValidImage(doc.isbn),
          })
        }
      }
      return return_json
    })
}

function getSearchResultByBookAndAuthor(book, author, page = 1, callback) {
  fetch(
    `https://openlibrary.org/search.json?q=${book.replace(
      /\s+/g,
      "+"
    )}&author=${author.replace(/\s+/, "+")}&page=${page}`
  )
    .then((res) => res.json())
    .then((json) => {
      var return_json = {}
      return_json["num_pages"] = Math.ceil(json.numFound / 100)
      return_json["result"] = []
      for (var doc of json.docs) {
        if (
          toAddOrNot(
            book + " " + author,
            doc.title + " " + doc.author_name.join(" ")
          )
        ) {
          getValidImage(doc["isbn"], async (imgURL) => {
            return_json["result"].push({
              title: doc.title,
              first_edition: doc.first_publish_year,
              authors: doc.author_name,
              imageURL: imgURL,
            })
          })
        }
      }
      // console.log(return_json)
      callback(return_json)
    })
}

export {
  ISBNApi,
  getThumbnailURL,
  getValidImage,
  EditionApi,
  getAuthor,
  countCommonSubsequence,
  toAddOrNot,
  getSearchResultByAuthor,
  getSearchResultByBook,
  getSearchResultByBookAndAuthor,
}
