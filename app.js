

function displayResults(articles) {
  // First, empty the table
  $("tbody").empty();

  // Then, for each entry of that json...
  articles.forEach(function(article) {
    // Append each of the animal's properties to the table
    var tr = $("<tr>").append(
      $("<td>").text(article.title),
      $("<td>").text(article.link),
    );

    $("tbody").append(tr);
  });
}

$.getJSON("/all", function(data){
  displayResults(data);
})

$("#scraperbutton").on("click", function() {

  $.getJSON("/scrape", function(data) {
    displayResults(data);
  });
});
