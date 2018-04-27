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

function displayNYTResults() {
   var searchTerm = $(".searchterm").val();
   var numofRecords = $(".retrieve").val();
   var startYear = $(".startyear").val();
   var endYear = $(".endyear").val();
   console.log(searchTerm);
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "3b0912289d5d4dfb9f98296b8558eb8a",
        'q': searchTerm,
        'begin_date': startYear + "0101",
        'end_date': endYear + "0101",
    });

    $.ajax({
        url: url,
        method: 'GET',
    }).done(function (result) {

        for (i = 0; i < numofRecords; i++) {
            var target = result.response.docs[i];
            var resultTitle = $("<h2>").text(target.headline.main);
            var resultAuthor = $("<p>").text(target.byline.original);
            var resultLink =   target.web_url ;
            var resultDiv = $("<div>").attr("class", "result-entry");
    
            $(resultDiv).append(resultTitle, resultAuthor).wrapInner(function(){
                return "<a href = '" +resultLink+ "'/>"; 
             });
            $(".content").append(resultDiv);
        
    }}).fail(function (err) {
        throw err;
    });
    
};

function generateResultDivs(result) {

}
//////////////////////////////////////////////////////////////////////////


// function multiplePageResults(numofPage) {

//         var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
//         url += '?' + $.param({
//             'api-key': "3b0912289d5d4dfb9f98296b8558eb8a",
//             'q': "trump",
//             'begin_date': startYear + "0101",
//             'end_date': endYear + "0101",
//             'page': numofPage
//         });

//     }
// }

