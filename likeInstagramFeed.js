(function () {
    'use strict';
    window.scrollTo(0, document.body.scrollHeight);
    var likeElements = document.querySelectorAll(".coreSpriteHeartOpen");
    var likeCount = 0;
    var nextTime = 1000;

    function doLike(i) {
        likeElements[i].click();
    }

    for (var i = 0; i < likeElements.length; i++) {
        nextTime = Math.random() * (14000 - 4000) + 4000;
        console.log(nextTime);
        console.log("Like: " + likeCount);
        likeCount++;
        if (likeCount > 10) {
            console.log("too much liking !");
            break;
        } else {
            setTimeout(doLike(i), nextTime);
        }
    }

})();
