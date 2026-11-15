function extractBodyContent(htmlString) {
  // TODO: Implement this function
  return htmlString.slice(htmlString.indexOf("<body>") + 6, htmlString.indexOf("</body>"));
}
