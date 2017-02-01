
var $results = $('#results');

$("#search").on("click", function(){
  var artistSearch = $("#artistSearch").val();
  var songSearch = $("#songSearch").val();
  var url = "https://itunes.apple.com/search?limit=10&";
  var searchUrl = getUrl(artistSearch, songSearch, url);
  $.ajax({
    type: 'GET',
    url: searchUrl,
    dataType: 'jsonp',
    success: function(tracks){
      showResults(tracks);
    }
  });
});
function showResults(tracks){
    var track = tracks.results;
    for(var i = 0; i <track.length;i++){
      $results.append('<tr><td>'+ track[i].artistName +'</td>'
      +'<td>'+ track[i].trackName +' </td>'
      +'<td>'+ track[i].collectionName +' </td>'
      +'<td><img src='+track[i].artworkUrl100+' alt="" border=3 height=100 width=100></img></td>'
      +'<td>'+'<audio controls>'+"<source src="+track[i].previewUrl+"></audio>"+'</td></tr>');
    }
}

function getUrl(artist,song, url){
  parsedUrl = '';
  artist = artist.replace(" ", "+");
  song = song.replace(" ", "+");
  parsedUrl = url+"term="+song+'+'+artist;
  return parsedUrl;
}
