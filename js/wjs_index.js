$(function () {
    $('[data-toggle="tooltip"]').tooltip();


    var items = $('.carousel-inner > .item');
    $(window).on('resize',function(){
        var width = $(window).width();
        if(width >= 768) {
            items.each(function (index, value) {
                var item = $(this);
                var src = item.data('bigImg');
                item.html($('<a href="javascript:;" class="bannerBg"></a>').css('backgroundImage', 'url(' + src + ')'));
            })
        }
        else {
                items.each(function (index,value) {
                    var item = $(this);
                    var src = item.data('smallImg');
                    item.html($('<a href="javascript:;" class="bannerImg"><img src="'+src+'" ></a>'));

                })
            }
        }).trigger('resize');

    var startX,endX;
    $('.carousel-inner')[0].addEventListener('touchstart',function(e){
        startX = e.targetTouches[0].clientX;
    });
    $('.carousel-inner')[0].addEventListener('touchend',function(e){
        endX= e.changedTouches[0].clientX;
        if(endX - startX > 0) {
            $('.carousel').carousel('prev');
        }
        else if(endX - startX < 0) {
            $('.carousel').carousel('next');
        }
    });

    /*产品部分,实现导航栏滚动*/
    var lis = $('.tab_parents > ul > li');
    var totalWidth = 0;
    lis.each(function (index, value) {
        totalWidth +=  $(value).outerWidth();
    });
    $('.tab_parents > ul').width(totalWidth);


    var myScroll = new IScroll('.tab_parents',{
        scrollX: true,
        scrollY: false
    });



})