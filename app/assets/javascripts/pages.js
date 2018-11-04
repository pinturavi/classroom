//= require jquery/dist/jquery
//= require remodal/dist/remodal
//= require os

(function() {
  var player;

  ready = function() {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    let length = $('script').length;
    var lastScriptTag = $('script')[$('script').length - 1];
    $(tag).insertAfter(lastScriptTag);
  }

  $(document).ready(ready)
}).call(this);

function onYouTubePlayerAPIReady() {
  player = new YT.Player('getting-started', {
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  $(document).on('opened', '.video', function () {
    player.playVideo();
  });

  $(document).on('closed', '.video', function (e) {
    player.stopVideo();
  });
}
