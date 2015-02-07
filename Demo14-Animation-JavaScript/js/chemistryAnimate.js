/**
 * Created by jptacek on 1/28/15.
 */
chemApp
    .animation('.periodic-animation', function () {
    return {
        addClass: function (element, className, done) {
            alert('hi mom');
            if (className == 'largeCell-visible') {
                TweenMax.to(element,0.5, {right: 0, onComplete: done});           
            }
            else {
                done();
            }
        },
        removeClass: function (element, className, done) {
            alert('hi mom');
            if (className == 'largeCell-visible') {
                TweenMax.to(element,0.5,
                    {right: -element.width() +50, onComplete: done});

            }
            else {
                done();
            }
        }
    };
});

