$(document).ready(function() {

    var url = "https://api.nytimes.com/svc/archive/v1/1891/12.json";
    url += '?' + $.param({
      'api-key': "16b2450d5a3444418fd80c13c69915f2"
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
      console.log(result);
    }).fail(function(err) {
      throw err;
    });




});