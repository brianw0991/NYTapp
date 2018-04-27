//pull text from results field to insert into api query
var searchTerm = "";
var numofRecords = "";
var startYear = "";
var endYear = "";


//search button to trigger ajax function


//function to generate buttons that add pagination text to the 
//initial api query if results request is more than 10



function displayNYTResults() {
   searchTerm = $("#searchterm").val();
   console.log(searchTerm);
   numofRecords = $("#retrieve").val();
   startYear = $("#startyear").val();
   endYear = $("#endyear").val();
   
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "3b0912289d5d4dfb9f98296b8558eb8a",
        'q': searchTerm,
        'begin_date': startYear + "0101",
        'end_date': endYear + "0101"
    });

    $.ajax({
        url: queryURL,
        method: 'GET',
    }).done(function (result) {
        for (i = 0; i < 10; i++) {
            var target = results.response.docs[i];
            var resultTitle = $("<h2>").text(target.headline.main);
            var resultAuthor = $("<p>").text(target.byline.original);
            var resultLink = $("<a>").attr("href", target.web_url);
            var resultDiv = $("<div>").attr("class", "result-entry");
    
            $(resultDiv).append(resultNumber[i], resultTitle, resultAuthor);
        };
        $(content).append(resultDiv);
       
    }).fail(function (err) {
        throw err;
    });
    
}

$("#search").on("click", function(){
    displayNYTResults();






});



function generateResultDivs() {

    
}

function multiplePageResults(numberofPages) {
    var numberofResults = userINput / 10;
    for (i = 0; i < numberofResults.length; i++) {
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
        }).done(function (result) {
            console.log(result);
        }).fail(function (err) {
            throw err;
        });
    }
}

