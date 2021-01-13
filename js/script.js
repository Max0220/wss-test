window.onload=function(){

    // Video
    var video = document.getElementById("video");

    // Buttons
    var playButton = document.getElementById("play-pause");

    playButton.addEventListener("click", function() {
      if (video.paused == true) {
        // Play the video
        video.play();

        // Update the button text to 'Pause'
        playButton.innerHTML = '<svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect opacity="0.4" width="12" height="32" fill="white"/><rect opacity="0.4" x="18" width="12" height="32" fill="white"/></svg>';
      } else {
        // Pause the video
        video.pause();

        // Update the button text to 'Play'
        playButton.innerHTML = '<svg width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg"> <path opacity="0.4" d="M30 17L-1.50898e-06 33.0215L-1.0834e-07 0.97853L30 17Z" fill="white"/> </svg> ';
      }
    });

}

$('.nav-toggle').click(function() {
  $("body header").toggleClass('active');
});

$('.head-nav li a').click(function() {
  $("body header").toggleClass('active');
});

$('.more-read').click(function(){
    $('.hiden-block').css('height','auto');
    $(this).css('display','none');
})

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
	if ( scrolled > 100) {
		$("body header").removeClass('active');
	}
});