$.fn.extend({
    myFullPage:function(config){
        //初始化变量
        var $W = $('.wrapper');
        var $Section = $W.find('.section');
        var colorArray = config.colorArray;
        var clientHeight = $(window).outerHeight();
        var clientWidth = $(window).outerWidth();
        var commondStyle = {
            height: '100%',
            width: '100%'
        }

        var lock = true;
        var curIndex = 0;

        //初始化样式
        $('html').add('body')
            .css({
                position: 'relative' , margin: 0, overflow: 'hidden'
            })
                .add($W).add($Section)
                    .css(commondStyle);
        $W.css({position:'absolute',left:0,right:0})
            .find('.section').each(function(index,ele){
                $(ele).css({position:'relative',backgroundImage:colorArray[index],backgroundSize: '100% 100%'})
                    .find('.slide').css({
                        position: 'relative',float: 'left',height: clientHeight,width: clientWidth
                    })
                        .wrapAll('<div class="sliderWrapper"></div>')
            })

        $('.sliderWrapper').each(function(index,ele){
            $(ele).css({
                position:'absolute',
                left:0,right:0,height:'100%',
                width:clientWidth*$(ele).find('.slide').size()
            })
        })

        //初始化类名
        $W.find('.section').eq(0).addClass('active')
            .end().each(function(index,ele){
                $(ele).find('.slide').eq(0).addClass('innerActive');
            })

        //keydown
        //e.which 37 38 39 40 l t r b
        $(document).on('keydown',function(e){
            //up down
            if(e.which == 38 || e.which == 40){
                if(lock){
                    lock = false;
                    var newTop = $W.offset().top;
                    var direction = null;
                    if(e.which == 38 && curIndex != 0){
                        direction = 'top';
                        config.onLeave(curIndex,direction);
                        newTop += clientHeight;
                        curIndex--;
                    }
                    if(e.which == 40 && curIndex != $Section.size() - 1){
                        direction = 'bottom';
                        config.onLeave(curIndex,direction);
                        newTop -= clientHeight;
                        curIndex++;
                    }

                    $W.animate({top:newTop},1000,function(){
                        lock = true;
                        $Section.eq(curIndex).addClass('active');
                        if(direction == 'top'){
                            $Section.eq(curIndex+1).removeClass('active');
                        }if(direction == 'bottom'){
                            $Section.eq(curIndex-1).removeClass('active');
                        }
                        config.afterLoad(curIndex,direction);
                    })
                }
            }
            //left right
            var $SW = $('.active').find('.sliderWrapper');
            if($SW.size()<=0){
                return;
            }else{
                if(e.which == 37 || e.which == 39){
                    if(lock){
                        lock = false;
                        var $curent = $SW.find('.innerActive');
                        var direction = null;
                        var newLeft = $SW.offset().left;
                        if(e.which == 37 && $curent.index() != 0){
                            direction = 'left';
                            newLeft += clientWidth;
                        }
                        if(e.which == 39 && $curent.index() != $SW.find('.slide').size()-1){
                            // console.log('a');
                            direction = 'right';
                            newLeft -= clientWidth;
                        }
                        
                        $SW.animate({left: newLeft},1000,function(){
                            lock = true;
                            direction != null ? $curent.removeClass('innerActive') : '';
                            if(direction=='left'){
                                $curent.prev().addClass('innerActive');
                            }else if(direction=='right'){
                                $curent.next().addClass('innerActive');
                            }
                        })
                    }
                }
            }
        })
    }
})