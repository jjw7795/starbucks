// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
  new YT.Player("player", {
    videoId: "EJF919p_hb0",
    playerVars: {
      autoplay: true, //자동재생유무
      loot: true, //반복재생유무
      playlist: "EJF919p_hb0",
    },
    events: {
      onReady: function (e) {
        e.target.mute(); //음소거
      },
    },
  });
}
