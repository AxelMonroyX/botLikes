(function () {

  //Based on http://www.joeldare.com/wiki/simple_instagram_like_bot
  var likeElement = document.querySelector('.coreSpriteHeartOpen');
  var nextElement = document.querySelector('.coreSpriteRightPaginationArrow');
  var likeCount = 0;

  function doLike() {
      likeCount++;
      console.log('Liked ' + likeCount);
      var nextTime = Math.random() * (14000 - 4000) + 4000;
      likeElement.click();
      setTimeout(function() {nextElement.click();}, 1000);
      if (likeCount < 25) {
          setTimeout(doLike, nextTime);
      } else {
          console.log('Nice! Time for a break.');
      }
  }

  doLike();

})();
