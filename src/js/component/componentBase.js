var ComponentFactory = function (config) {
    if(config.html){
        var $Div = $(config.html);
    }else{
        var $Div = $('<div class = "command"></div>');
    }
    
    config.className && $Div.addClass(config.className);
    config.width && $Div.css({width:config.width});
    config.height && $Div.css({height:config.height});
    config.text && $Div.text(config.text);
    config.center && $Div.css({position:'absolute',left:'50%',marginLeft: config.marginLeft || -config.width/2});
    config.bottom && $Div.css({position:'absolute',bottom:config.bottom});
    config.marginLeft && $Div.css({marginLeft:config.marginLeft});
    config.css && $Div.css(config.css);
    if(config.event){
        for(prop in config.event){
            $Div.on(prop,config.event[prop]);
        }
    }

    $Div.on('cpLeave',function(){
        var self = this;
        setTimeout(() => {
            config.animateOut && $(self).animate(config.animateOut);
        }, config.delayLeave || 0 );
    });
    $Div.on('cpLoad',function(){
        var self = this;
        setTimeout(() => {
            config.animateIn && $(self).animate(config.animateIn);
        }, config.delayLoad || 0 );
    })

    return $Div;
}
// var config = {
//     type: 'base',
//     className: 'duyi',
//     width: 522,
//     height: 336,
//     text: '渡一教育创立于2015年！ 在成哥 邓哥 彤哥的带领下已经向着高端编程教育公司大踏步的，渡一 Dream Factory',
//     center: true,
//     css: {
//         position: 'absolute',
//         opacity: 0,
//         top: 0,
//         backgroundImage: 'url(./src/img/dialog.jpg)',
//         backgroundSize: '100% 100%',                        
//         padding: '10px 15px 10px 15px',
//         textAlign: 'justify',
//         fontSize: '18px',
//         fontWeight: '900',
//         lineHeight: '25px'
//     },
//     animateIn: {
//         opacity: 1,
//         top: 240,
//     },
//     animateOut: {
//         opacity: 0,
//         top: 0
//     },
//     delay: 1000,
//     event: {
//         click: function () {
//             alert($(this).text());
//         }
//     }
// }