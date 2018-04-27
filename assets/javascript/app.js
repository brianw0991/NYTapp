//pull text from results field to insert into api query



//search button to trigger ajax function


//function to generate buttons that add pagination text to the 
//initial api query if results request is more than 10



function displayNYTResults() {

    //example: var movie = $(this).attr("data-name");
    var searchTerm = $("#searchterm").text();
    var recordstoRetrieve =  $("#retrieve").text();
    var startYear = $("startyear").text();
    var endYear = $("endyear").text();

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "3b0912289d5d4dfb9f98296b8558eb8a",
  'q': "trump",
  'begin_date': startYear + "0101",
  'end_date': endYear + "0101"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {

$("#search").on(click, function(){
    console.log(result);
    var target = ;
    var resultTitle = $("<h2>").text();
    var resultAuthor = $("<p>").text();
    var resultNumber = $("<h2>").text();
    var resultLink = $("<a>").
    var resultDiv = $("<div>").attr("class", "result-entry");
   
    for (i = 0; i < 10; i++){
        $(resultDiv).text(resultNumber, resultTitle, resultAuthor);
        resultDiv =+;
    }
  
    //resultTitle, resultAuthor, resultNumber)
}
    $("div.content").append(resultDiv)
});
  
}).fail(function(err) {
  throw err;
});


function multiplePageResults (numberofPages){
  
    var   numberofResults = userINput / 10;
for (i=0 ; i<numberofResults.length; i++){
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
    'api-key': "3b0912289d5d4dfb9f98296b8558eb8a",
    'q': "trump",
    'begin_date': startYear + "0101",
    'end_date': endYear + "0101",
  'page': page[i]
});

$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});

};}