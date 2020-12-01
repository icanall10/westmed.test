(function ($) {

    function behaviors() {

        $('#header')
            .once(function () {
                $(this).wrap('<div id="header-wrapper"></div>');
            })
            .on('checkFixed', function () {
                let $this = $(this);
                let scrollTop = $(window).scrollTop();

                if (scrollTop > 30) {
                    $this.addClass('fixed');
                } else {
                    $this.removeClass('fixed');
                }
            })
            .trigger('checkFixed');

    }


    $(window).scroll(function () {
        $('#header').trigger('checkFixed');
    });


    $(document).ready(function () {
        behaviors();
    });


    $(document).ajaxComplete(function () {
        behaviors();
    });


    var cache = {}, uuid = 0;

    $.fn.once = function (id, fn) {
        if (typeof id != 'string') {

            if (!(id in cache)) {
                cache[id] = ++uuid;
            }

            if (!fn) {
                fn = id;
            }

            id = 'jquery-once-' + cache[id];
        }

        var name = id + '-processed';
        var elements = this.not('.' + name).addClass(name);

        return $.isFunction(fn) ? elements.each(fn) : elements;
    };

})(jQuery);