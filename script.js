// script.js
document.addEventListener('DOMContentLoaded', function() {
    var image = document.getElementById('play-audio1');
    var audio = document.getElementById('audio1');

    image.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var image = document.getElementById('play-song2');
    var audio = document.getElementById('song2');

    image.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
  var image = document.getElementById('play-image3');
  var audio = document.getElementById('image3');

  image.addEventListener('click', function() {
      if (audio.paused) {
          audio.play();
      } else {
          audio.pause();
      }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var image = document.getElementById('play-song1');
  var audio = document.getElementById('song1');

  image.addEventListener('click', function() {
      if (audio.paused) {
          audio.play();
      } else {
          audio.pause();
      }
  });
});


function myFunction()  {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

