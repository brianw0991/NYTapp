//pull text from results field to insert into api query



//search button to trigger ajax function


//function to generate buttons that add pagination text to the 
//initial api query if results request is more than 10
$(document).ready(function(){
$("div.search-parameters").on("click", "#search", function(){
    console.log("clicked");
    displayNYTResults();
});
});

    //example: var movie = $(this).attr("data-name");
$(document).ready()
function displayNYTResults() {
   var searchTerm = $(".searchterm").val();
   var numofRecords = $(".retrieve").val();
   var startYear = $(".startyear").val();
   var endYear = $(".endyear").val();
   console.log(searchTerm);
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "af348c7aed984630a9779dfd8db1d273",
        'q': searchTerm,
        'begin_date': startYear + "0101",
        'end_date': endYear + "0101"
    });

    $.ajax({
        url: url,
        method: 'GET',
    }).done(function (result) {
        for (i = 0; i < 10; i++) {
            var target = result.response.docs[i];
            var resultTitle = $("<h2>").text(target.headline.main);
            var resultAuthor = $("<p>").text(target.byline.original);
            var resultLink = $("<a>").attr("href", target.web_url);
            var resultDiv = $("<div>").attr("class", "result-entry");
    
            $(resultDiv).append(resultTitle, resultAuthor);
            $(".content").append(resultDiv);
        };
        
    }).fail(function (err) {
        throw err;
    });
    
}

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
    var searchTerm = $("#searchterm").val().text();
    var numofRecords = $("#retrieve").val();
    var startYear = $("#startyear").val();
    var endYear = $("#endyear").val();
}



