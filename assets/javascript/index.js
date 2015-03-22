$(document).ready(function () {
    $(document).scroll(function () {
        var scrollTop = $(document).scrollTop();
        if (scrollTop > 2000 && scrollTop < 2100) {
            circles_action();
            $(document).unbind("scroll");
        }
    });

    function circles_action() {
        for (var i = 1; i <= 8; i++) {
            var child = document.getElementById('circles-' + i);
            var percentage = $("#circles-" + i).attr("percent");
            Circles.create({
                id: child.id,
                percentage: percentage,
                radius: 80,
                width: 15,
                number: percentage,
                text: '%',
                colors: ['#fff', '#2980b9']
            });
        }
    }

});