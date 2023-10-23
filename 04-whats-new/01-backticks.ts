var url = "https://bbc.co.uk/news";
var title = "BBC News";

var htmlResponse = '<a href="' + url + '">' + title + "</a>";

const htmlResponse2 = `<a href="${url}">${title} ${new Date()}</a>`;
