(function($, window, document, undefined) {

    $.fn.toc = function(userOptions) {

        var defaults = {
            heading: "h2",
            tocClass: "toc",
            tocHeading: "h2",
            tocTitle: "Table of contents:",
            blink: false,
        };

        var options = $.extend({}, // destination object
            defaults, // take from
            userOptions); //override with

        var headings = this.children(options.heading);
        var hrefs = [];
        var ypos = [];

        headings.each(function(index, value) {

            $(this).before("<a name='toc-item-" + (index + 1) + "'></a>");
            hrefs[index] = "<li><a goto='" + index + "' href='#toc-item-" + (index + 1) + "'>" + $(this).text() + "</a></li>";
            ypos[index] = this.offsetTop;

        });

        var tocList = $("<ol>", {
            html: hrefs.join(""),
        });

        var insideToc = $("<" + options.tocHeading + ">" + options.tocTitle + "</" + options.tocHeading + ">");

        var tocContainer = $("<div>", {
            class: options.tocClass,
            html: insideToc[0],
            append: tocList
        });

        this.first().before(tocContainer);

        headings.each(function(index, value) {
            ypos[index] = this.offsetTop;
        });


        var links = $("." + options.tocClass + " a");
        links.click(function(e) {

            e.preventDefault();

            var that = $(this)

            // document.body.scrollTop = ypos[$(this).attr("goto")];


            $("body").stop().animate({
                scrollTop: ypos[$(this).attr("goto")] - 15,
            }, 800, "swing", function() {
                if (options.blink) {
                    var current = headings[that.attr("goto")];
                    $(current).delay().animate({
                        opacity: 0.3,
                    }, 450).animate({
                        opacity: 1,
                    }, 250);
                }
            });
        });


        return this;

    };

})(jQuery, window, document);
