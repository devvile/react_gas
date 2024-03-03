function doGet() {
  const html = HtmlService.createTemplateFromFile('index');
  return html.evaluate().addMetaTag('viewport', 'width=device-width, initial-scale=1').setTitle('Web App') ;
}

function require(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}