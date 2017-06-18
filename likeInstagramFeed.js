(function () {
    'use strict';
    window.scrollTo(0, document.body.scrollHeight);
    var likeElements = document.querySelectorAll(".coreSpriteLikeHeartOpen");
    var likeCount = 0;
    var nextTime = 1000;

    function doLike(photo) {
        photo.click();
    }

    likeElements.forEach(photo => {
        nextTime = Math.random() * (14000 - 4000) + 4000;
        console.log(nextTime);
        console.log("Like: " + likeCount);
        likeCount++;
        if (likeCount > 5) {
            console.log("too much liking !");
            return
        } else {
            setTimeout(doLike(photo), nextTime);
        }
    });

})();
