$(document).ready(function() {
  // Gets the video src from the data-src on each button
  var vimeoVideoID = '265045525';
  
  $('.video-btn').each(function() {
    src = $(this).data( "src" );
    arr = src.split('/')
    $vimeoVideoID = arr.slice(-1)
  });

  $.getJSON('https://www.vimeo.com/api/v2/video/' + $vimeoVideoID + '.json?callback=?', {format: "json"}, function(data) {  
    $(".thumbs").attr('src', data[0].thumbnail_large);
  });

  var $videoSrc; 
  $('.video-btn').click(function() {
      $videoSrc = $(this).data( "src" );
  });

  console.log($videoSrc);
  // when the modal is opened autoplay it  
  $('#myModal').on('shown.bs.modal', function (e) {
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
  })
    
  // stop playing the youtube video when I close the modal
  $('#myModal').on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#video").attr('src',$videoSrc); 
  }) 
  // document ready  
});
  