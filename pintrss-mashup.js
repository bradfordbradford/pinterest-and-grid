(function($){
    $.fn.extend({
        pintRSSt: function (options) {
            var settings = {
                boardRSS: 'http://pinterest.com/jeffr/howdyJeff.rss',  // First Board
                boardRSSB: 'http://pinterest.com/jeffr/me-likey.rss', // Second Board
                items: 25, //  25 Max Pinterest Output
                container: 'li' // container
            };
            options =  $.extend(settings, options);

            return this.each(function () {
                var o = options;
                    obj = $(this);
                    wrapper = o.container;
                    wrapperB = o.container;


                // Add First Board
                $.getJSON('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=100&callback=?&q='+encodeURIComponent(o.boardRSS)+'', function(data) {
                    $.each(data.responseData.feed.entries, function (i, item) {
                        description = item.content;
                    post = '<li class="item"> <a href="' + item.link + '">'  + '<div class="cover"><div class="center-text"><div class="text">' + item.contentSnippet + '</div></div></div><img src="'+$('img',item.content).attr('src')+'" /></a></li>';
                        $(obj).append(post);
                        return i<o.items-1;
                    });
                });
                // Add Second Board
                $.getJSON('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=100&callback=?&q='+encodeURIComponent(o.boardRSSB)+'', function(data) {
                    $.each(data.responseData.feed.entries, function (i, item) {
                        var description = item.content;
                        var post = '<li class="item"> <a href="' + item.link + '">'  + '<div class="cover"><div class="center-text"><div class="text">' + item.contentSnippet + '</div></div></div><img src="'+$('img',item.content).attr('src')+'" /></a></li>';
                        $(obj).append(post);
                        return i<o.items-1;
                    });
                });

            });
        }
    });
})(jQuery);