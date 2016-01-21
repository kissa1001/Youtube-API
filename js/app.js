$(function(){
  $('#search').submit(function(event){
    event.preventDefault();
    var searchValue = $('#query').val();
  getRequest(searchValue);
  });
});

  function getRequest(searchValue){
    var params = {
      part: 'snippet',
      key: 'AIzaSyCb3EOFPB9g7VsCxkGxTaJGX74a3opBbJI',
      q: searchValue
    }
    url='https://www.googleapis.com/youtube/v3/search';



    var container = $('ul.results')

    $.getJSON(url, params, function(data) {
      var results = $.map(data.items,function(result){
          return {
              thumbnails : result.snippet.thumbnails.medium.url,
              title : result.snippet.title,
              url: 'https://www.youtube.com/watch?v=' + result.id.videoId
          };
      });
        var attachTemplate = function(){
        var sourse = $('#youtube-template').html();
        var template = Handlebars.compile(sourse);
        container.append( template(results) );
        };

      attachTemplate();
    })
  };
