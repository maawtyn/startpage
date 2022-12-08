/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/**
 * Search function
 */

const searchInput = document.querySelector("#searchbar > input")
const searchButton = document.querySelector("#searchbar > button")

const lookup = {"/":"/","deepl":"https://deepl.com/","reddit":"https://reddit.com/","maps":"https://maps.google.com/"}
const engine = "google"
const engineUrls = {
  deepl: "https://www.deepl.com/translator#-/-/",
  duckduckgo: "https://duckduckgo.com/?q=",
  ecosia: "https://www.ecosia.org/search?q=",
  google: "https://www.google.com/search?q=",
  startpage: "https://www.startpage.com/search?q=",
  youtube: "https://www.youtube.com/results?q=",
}

const isWebUrl = value => {
  try {
    const url = new URL(value)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}

const getTargetUrl = value => {
  if (isWebUrl(value)) return value
  if (lookup[value]) return lookup[value]
  return engineUrls[engine] + value
}

const search = () => {
  const value = searchInput.value
  const targetUrl = getTargetUrl(value)
  window.open(targetUrl, "_self")
}

searchInput.onkeyup = event => event.key === "Enter" && search()
searchButton.onclick = search

/**
 * inject bookmarks into html
 */

const bookmarks = [{"id":"NUzkMcK4NpPOO7h0","label":"school","bookmarks":[{"id":"03PAPOiBdyyrWsxU","label":"edison","url":"https://edison.sso.vsb.cz/wps/myportal/student/rozvrh/rozvrh/!ut/p/z1/jZBBC4JQEIR_SwePuSuvRLuphRmRRJm2l9AwFUzFZz7q1yfVJShrbrvzDbsMEARARdhmSdhkZRHm3bwn9bCZT1E3FQO10U5HZ-s4zGFrhtYY_AeAX2QgUGevUJ_ZCipL27MUNDxXNV1rx9DGV74HoH_u9wDU_54P9AtZACV5GT3bMIqIaQlQHZ_iOq7lS92t06ap-ERCCYUQMuel3PJIPt4k_BRJS95A8E5Cdfa8AIcUXcXgDuR04-E!/dz/d5/L2dBISEvZ0FBIS9nQSEh/"},{"id":"GhcZe7Ih1YlBcr2L","label":"mail","url":"https://posta.vsb.cz/roundcube/"},{"id":"lvpXh3XlE1sNvMtR","label":"innet","url":"https://innet.vsb.cz/cs/"},{"id":"uUbsPXGFvwZCOiD4","label":"jidlo","url":"https://stravovani.vsb.cz/webkredit/Ordering/Menu"}]},{"id":"PDWbmBk97XTuYZAK","label":"socials","bookmarks":[{"id":"JNEhCQikTAY2jT2C","label":"twitter","url":"https://twitter.com/home"},{"id":"4iDIxN9IIt46xUuF","label":"instagram","url":"https://www.instagram.com/"},{"id":"RU2p30mHvvXZmonE","label":"facebook","url":"https://www.facebook.com/messages/"},{"id":"0ZLE316ZV4iCSJPl","label":"reddit","url":"https://www.reddit.com/"}]},{"id":"5HuGsEzAmCkpoQ3I","label":"entertainment","bookmarks":[{"id":"tdQmEnMdR2q43itg","label":"disney+","url":"https://www.disneyplus.com/home"},{"id":"FDWNsw9eyOeKRIq8","label":"netflix","url":"https://www.netflix.com/browse"},{"id":"Prpr4qEVZjvMzkuP","label":"youtube","url":"https://www.youtube.com/"},{"id":"HhcXSU0LIfMKF41r","label":"twitch","url":"https://www.twitch.tv/"}]},{"id":"N8Ohk2UWqTni1F4C","label":"other","bookmarks":[{"id":"iewgEFQfiXJq49ph","label":"monkeytype","url":"https://monkeytype.com/"},{"id":"7ZnAa8oLNTBUVV65","label":"futbin","url":"https://www.futbin.com/"},{"id":"l8WDOT3WxoqNGYZA","label":"fifa web app","url":"https://www.ea.com/fifa/ultimate-team/web-app/"},{"id":"LefKEEiSBC5xsTxp","label":"author","url":"https://prettycoffee.github.io/"}]},{"id":"c96Ie4Wop6mCjqdF","label":"important","bookmarks":[{"id":"nHgfTmuuv5Q2IvG4","label":"google calendar","url":"https://calendar.google.com/calendar/u/0/r"},{"id":"whwVBRJAXpDiM9Nw","label":"google sheets","url":"https://docs.google.com/spreadsheets/u/0/?tgif=d"}]}]

const createGroupContainer = () => {
  const container = document.createElement("div")
  container.className = "bookmark-group"
  return container
}

const createGroupTitle = title => {
  const h2 = document.createElement("h2")
  h2.innerHTML = title
  return h2
}

const createBookmark = ({ label, url }) => {
  const li = document.createElement("li")
  const a = document.createElement("a")
  a.href = url
  a.innerHTML = label
  li.append(a)
  return li
}

const createBookmarkList = bookmarks => {
  const ul = document.createElement("ul")
  bookmarks.map(createBookmark).forEach(li => ul.append(li))
  return ul
}

const createGroup = ({ label, bookmarks }) => {
  const container = createGroupContainer()
  const title = createGroupTitle(label)
  const bookmarkList = createBookmarkList(bookmarks)
  container.append(title)
  container.append(bookmarkList)
  return container
}

const injectBookmarks = () => {
  const bookmarksContainer = document.getElementById("bookmarks")
  bookmarksContainer.append()
  bookmarks.map(createGroup).forEach(group => bookmarksContainer.append(group))
}

injectBookmarks()
