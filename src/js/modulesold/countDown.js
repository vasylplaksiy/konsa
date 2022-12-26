var countDown = {
    init: function () {
        var time = parseInt($(".topSaleInfoCountdown").attr("data-time"));
        $('.topSaleInfoCountdown b').countdown({until: time, compact: true,
            format: 'DHMS', description: ''});
    }

};

$(document).ready(function () {
    countDown.init();
});