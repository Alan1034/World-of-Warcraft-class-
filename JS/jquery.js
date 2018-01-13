    $(function () {
        //固定状态栏开始
        $(window).scroll(function () {
            if ($(window).scrollTop() >= $('#channelBar').height()) {
                // setTimeout(function(){
                //     $('.nav li:nth-child(1)').animate({width:'62px'},30).children().animate({opacity:1,width:35,height:39},10);
                // },30);
                // setTimeout(function(){
                //     $('.nav li').animate({height:'39px', lineHeight:'39px'},100);
                // },29);
                // setTimeout(function(){
                //     $('.nav li span').animate({top:'17px'},100);
                // },28);
                // setTimeout(function  (){
                //     $('.nav li:nth-child(7)').animate({width:'764px'},100).next().animate({width:'48px'},30);
                // },27);
                // setTimeout(function(){
                //     $('.nav').css({zIndex:100,position:'fixed',top:0,left:0}).animate({height:'39px',width:'1346px'},30).children('img').css({opacity:"0"});
                // },26);

                    $('#thinNav').css({display: 'block'});
                    $('.nav').css({height:0});
                    $('.nav ul.clearfix,.nav>img').css({display: 'none'})
                if($('#gameDownList').css('display')=='block'){
                    $('#gameDownList').css({position:'fixed',top:40,left:0,width:1348});
                }
                if($('#storyDownList').css('display')=='block'){
                    $('#storyDownList').css({position:'fixed',top:40,left:0,width:1348});
                }
            }
            else {
                $('#thinNav').css({display: 'none'});
                $('.nav').css({height:78});
                $('.nav ul.clearfix,.nav>img').css({display: 'block'});
                if($('#gameDownList').css('display')=='block'){
                    $('#gameDownList').css({position:'absolute',top:78,left:-187,width:1287});
                }
                if($('#storyDownList').css('display')=='block'){
                    $('#storyDownList').css({position:'absolute',top:78,left:-187,width:1287});
                }

                // $('#box').children('video').css({top:40})
                // setTimeout(function(){
                //     $('.nav li').stop(false,true).animate({height:'78px', lineHeight:'78px'},30);
                // },30);
                // setTimeout(function(){
                //     $('.nav li span').stop(false,true).animate({top:'34px'},30);
                // },29);
                // setTimeout(function(){
                //     $('.nav').stop(false,true).animate({height:'78px',width:'1101px',right:'10px'},30).css({position:'absolute',left:'197px'}).children('img').animate({opacity:"1"},30);
                // },28);
                // setTimeout(function(){
                //     $('.nav li:nth-child(1)').stop(false,true).animate({width:'70px'},30).children().stop(false,true).animate({opacity:'0'});
                // },27);
                // setTimeout(function(){
                //     $('.nav li:nth-child(7)').stop(false,true).animate({width:'480px'},30).next().stop(false,true).animate({width:'79px'},30);
                // },26);

            };

        });
        $('#thinNav .game').click(function(){
                $('#storyDownList').hide();
                $('#gameDownList').css({position:'fixed',top:40,left:0,width:1348}).slideToggle(200);
        });
        $('#thinNav .story').click(function(){
                $('#gameDownList').hide();
                $('#storyDownList').css({position:'fixed',top:40,left:0,width:1348}).slideToggle(200);
        });
        //固定状态栏结束
        //下拉状态栏开始
        $('.center .nav ul.clearfix li:nth-child(2) a').click(function(){
                $('#storyDownList').hide();
                $('#gameDownList').css({position:'absolute',top:78,left:-187,width:1287}).slideToggle(200);
        });
        $('.center .nav ul.clearfix li:nth-child(3) a').click(function(){
                $('#gameDownList').hide();
                $('#storyDownList').css({position:'absolute',top:78,left:-187,width:1287}).slideToggle(200);
        });
        //下拉状态栏结束
        $('#more a,#buyNow div a,#existImg div a,#followAssistant div a,#buyGift .more a').hover(function () {
            $(this).css({backgroundColor: 'rgba(199,126,25,0.8)'});
        },function () {
            $(this).css({backgroundColor: 'rgba(199,126,25,0)'});
        });

        $('#pay a,#buyGift .buyNow a').hover(function () {
            $(this).css({backgroundColor: 'rgba(255,0,0,0.8)'});
        },function () {
            $(this).css({backgroundColor: 'rgba(255,0,0,0.5)'});
        });

        var $lis = $('.content .fourImgs li');
        $lis.mouseenter(function () {
            $(this).find('img').stop().animate({
                width: '110%',
                height: '110%'
            }, 800).css({border: '1px solid #c77e19'});

            $('.decription').eq($(this).index()).css({color: '#fff'})

        });
        $lis.mouseleave(function () {
            $(this).find('img').stop().animate({
                width: '100%',
                height: '100%'
            }, 800).css({
                border: '1px solid #333'
            });
            $('.decription').eq($(this).index()).css({color: ''})
        });
        $('.icFont').hover(function () {
            $(this).css({color: '#f8b700'});
            $(this).next().next().css({color: '#f8b700'});

        }, function () {
            $(this).css({color: ''});
            $(this).next().next().css({color: ''});
        });

        //英雄跳出动画
        $('#hero,#hero1').hover(function () {
            var $wValue = 1.5 * $(this).width();
            var $hValue = 1.5 * $(this).height();

            $(this).stop().animate({
                zIndex:200,
                opacity: 1,
                width: $wValue,
                height: $hValue,
                left: ("-" + (0.5 * $(this).width()) / 2),
                top: ("-" + (0.5 * $(this).height()) / 2)
            }, 100, function () {
                var $wValue = 0.8 * $(this).width();
                var $hValue = 0.8 * $(this).height();
                $(this).stop().animate({
                    opacity: 1,
                    width: $wValue,
                    height: $hValue,
                    left: -60,
                    top: 30
                }, 200, function () {
                    var $wValue = 1.1 * $(this).width();
                    var $hValue = 1.1 * $(this).height();
                    $(this).stop().animate({
                        opacity: 1,
                        width: $wValue,
                        height: $hValue,
                        left: '-100px',
                        top: '10px'
                        // left:("-"+(0.3 * $(this).width())/2),
                        // top:("-"+(0.3 * $(this).height())/2)},100)
                    })
                })
            }).siblings().stop().animate({opacity:0.08})
        },function () {
                $(this).stop().animate({
                    opacity: 0,
                    width: 671,
                    height: 336,
                    left:0,
                    top:60
                    // left: ("-" + (0.5 * $(this).width()) / 2),
                    // top: ("-" + (0.5 * $(this).height()) / 2)
                }).siblings().stop().animate({opacity:1})
            }
        );







    });
