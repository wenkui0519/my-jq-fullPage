pageEngine.init('.wrapper', ['url(./src/img/bg1-1.jpg)', 'url(./src/img/bg2-1.jpg)', 'url(./src/img/bg1-1.jpg)'])
            .addSection('oneSection')
                //zi
                .addComponent({
                    type: 'base',
                    className: 'bg1-6',
                    width: 512,
                    height: 45,
                    center: true,
                    marginLeft: -256,
                    css: {
                        position: 'absolute',
                        opacity: 0,
                        backgroundImage: 'url(./src/img/bg1-6.png)',
                        backgroundSize: '100% 100%',
                        left: '50%',
                        top: '15%',
                        backgroundRepeat: 'no-repeat',                        
                    },
                    animateIn: {
                        opacity: 1,
                        width: '561',
                        marginLeft: '-280'
                    },
                    animateOut: {
                        opacity: 0,
                        width: '512',
                        marginLeft: '-256'
                    },
                    delayLoad:100,
                    delayLeave: 100
                })
                //三个飞机
                .addComponent({
                    type: 'base',
                    className: 'bg1-3',
                    width: 164,
                    height: 117,
                    bottom: 160,
                    center: true,
                    marginLeft: -180,
                    css: {
                        position: 'absolute',
                        opacity: 0,
                        backgroundImage: 'url(./src/img/bg1-3.png)',
                        backgroundSize: '100% 100%',                        
                    },
                    animateIn: {
                        opacity: 1,
                        bottom: '260',
                        marginLeft: '-280'
                    },
                    animateOut: {
                        opacity: 0,
                        bottom: '160',
                        marginLeft: '-180'
                    },
                    delayLoad:100,
                    delayLeave: 100
                })
                .addComponent({
                    type: 'base',
                    className: 'bg1-4',
                    width: 70,
                    height: 29,
                    bottom: 280,
                    center: true,
                    marginLeft: -330,
                    css: {
                        position: 'absolute',
                        opacity: 0,
                        backgroundImage: 'url(./src/img/bg1-4.png)',
                        backgroundSize: '100% 100%',                        
                    },
                    animateIn: {
                        opacity: 1,
                        bottom: '380',
                        marginLeft: '-430'
                    },
                    animateOut: {
                        opacity: 0,
                        bottom: '280',
                        marginLeft: '-330'
                    },
                    delayLoad: 300,
                    delayLeave: 100
                })
                .addComponent({
                    type: 'base',
                    className: 'bg1-4',
                    width: 43,
                    height: 26,
                    bottom: 320,
                    center: true,
                    marginLeft: -410,
                    css: {
                        position: 'absolute',
                        opacity: 0,
                        backgroundImage: 'url(./src/img/bg1-4.png)',
                        backgroundSize: '100% 100%',                        
                    },
                    animateIn: {
                        opacity: 1,
                        bottom: '420',
                        marginLeft: '-510'
                    },
                    animateOut: {
                        opacity: 0,
                        bottom: '320',
                        marginLeft: '-410'
                    },
                    delayLoad: 500,
                    delayLeave: 100,
                })
                //bj
                .addComponent({
                    type: 'base',
                    className: 'bg1-2',
                    width: 1000,
                    height: 215,
                    center: true,
                    marginLeft: -500,
                    css: {
                        // margin: 'auto',
                        position: 'absolute',bottom: 100,
                        background: 'url(./src/img/bg1-2.png) 50% 0 no-repeat'
                    }
                })
            .addSection('twoSection')
                //
                .addComponent({
                    type: 'base',
                    className: 'bg2-7',
                    width: 512,
                    height: 45,
                    center: true,
                    marginLeft: -256,
                    css: {
                        position: 'absolute',
                        opacity: 0,
                        backgroundImage: 'url(./src/img/bg2-7.png)',
                        backgroundSize: '100% 100%',
                        left: '50%',
                        top: '15%',
                        backgroundRepeat: 'no-repeat',                        
                    },
                    animateIn: {
                        opacity: 1,
                        width: '561',
                        marginLeft: '-280'
                    },
                    animateOut: {
                        opacity: 0,
                        width: '512',
                        marginLeft: '-256'
                    },
                    delayLoad:100,
                    delayLeave: 100
                })
                //tu
                .addComponent({
                    type: 'base',
                    html:'<div class="command"><p style="position: relative;left: 20px;margin-left: 40px;border-right: 1px solid #13AB86;font-size: 16px;color: #fff;">易信扫描二维码即可登录网易<br>邮箱6.0版，“扫一扫”让邮<br>箱登录更方便。</p></div>',
                    className: 'bg2-2',
                    width: 300,
                    height: 84,
                    bottom: '15%',
                    center: true,
                    marginLeft: -670,
                    css: {
                        paddingTop: 350 ,
                        position: 'absolute',
                        opacity: 0,
                        backgroundImage: 'url(./src/img/bg2-2.png)',
                        backgroundRepeat: 'no-repeat'                                     
                    },
                    animateIn: {
                        opacity: 1,
                        marginLeft: '-570'
                    },
                    animateOut: {
                        opacity: 0,
                        marginLeft: '-670'
                    },
                    delayLoad: 300,
                    delayLeave: 100,
                })
                .addComponent({
                    type: 'base',
                    html:'<div class="command"><p style="position: relative;left: 20px;margin-left: 40px;border-right: 1px solid #13AB86;font-size: 16px;color: #fff;">登录邮箱后，可直接使用Web<br>易信和好友聊天，还可以发图<br>片，让聊天更有趣。</p></p></div>',
                    className: 'bg2-3',
                    width: 300,
                    height: 84,
                    bottom: '15%',
                    center: true,
                    marginLeft: -180,
                    css: {
                        paddingTop: 350 ,
                        position: 'absolute',
                        opacity: 0,
                        backgroundImage: 'url(./src/img/bg2-3.png)',
                        backgroundRepeat: 'no-repeat',
                        backgroundPositionX: 'center'                                     
                    },
                    animateIn: {
                        opacity: 1,
                    },
                    animateOut: {
                        opacity: 0,
                    },
                    delayLoad: 300,
                    delayLeave: 100,
                })
                .addComponent({
                    type: 'base',
                    html:'<div class="command"><p style="position: relative;left: 20px;margin-left: 40px;font-size: 16px;color: #fff;">易信和邮箱新邮件同步提醒，<br>在易信可以直接查看和回复<br>邮件，手机收发邮件更快捷。</p></div>',
                    className: 'bg2-4',
                    width: 300,
                    height: 84,
                    bottom: '15%',
                    center: true,
                    marginLeft: 330,
                    css: {
                        paddingTop: 350 ,
                        position: 'absolute',
                        opacity: 0,
                        backgroundImage: 'url(./src/img/bg2-4.png)',
                        backgroundRepeat: 'no-repeat'                                     
                    },
                    animateIn: {
                        opacity: 1,
                        marginLeft: '230'
                    },
                    animateOut: {
                        opacity: 0,
                        marginLeft: '330'
                    },
                    delayLoad: 300,
                    delayLeave: 100,
                })
            .addSection('threeSection')
                .addSlide('3Section-one')
                     //zi
                    .addComponent({
                        type: 'base',
                        className: 'bg1-6',
                        width: 512,
                        height: 45,
                        center: true,
                        marginLeft: -256,
                        css: {
                            position: 'absolute',
                            opacity: 0,
                            backgroundImage: 'url(./src/img/bg1-6.png)',
                            backgroundSize: '100% 100%',
                            left: '50%',
                            top: '15%',
                            backgroundRepeat: 'no-repeat',                        
                        },
                        animateIn: {
                            opacity: 1,
                            width: '561',
                            marginLeft: '-280'
                        },
                        animateOut: {
                            opacity: 0,
                            width: '512',
                            marginLeft: '-256'
                        },
                        delayLoad:100,
                        delayLeave: 100
                    })
                    //三个飞机
                    .addComponent({
                        type: 'base',
                        className: 'bg1-3',
                        width: 164,
                        height: 117,
                        bottom: 160,
                        center: true,
                        marginLeft: -180,
                        css: {
                            position: 'absolute',
                            opacity: 0,
                            backgroundImage: 'url(./src/img/bg1-3.png)',
                            backgroundSize: '100% 100%',                        
                        },
                        animateIn: {
                            opacity: 1,
                            bottom: '260',
                            marginLeft: '-280'
                        },
                        animateOut: {
                            opacity: 0,
                            bottom: '160',
                            marginLeft: '-180'
                        },
                        delayLoad:100,
                        delayLeave: 100
                    })
                    .addComponent({
                        type: 'base',
                        className: 'bg1-4',
                        width: 70,
                        height: 29,
                        bottom: 280,
                        center: true,
                        marginLeft: -330,
                        css: {
                            position: 'absolute',
                            opacity: 0,
                            backgroundImage: 'url(./src/img/bg1-4.png)',
                            backgroundSize: '100% 100%',                        
                        },
                        animateIn: {
                            opacity: 1,
                            bottom: '380',
                            marginLeft: '-430'
                        },
                        animateOut: {
                            opacity: 0,
                            bottom: '280',
                            marginLeft: '-330'
                        },
                        delayLoad: 300,
                        delayLeave: 100
                    })
                    .addComponent({
                        type: 'base',
                        className: 'bg1-4',
                        width: 43,
                        height: 26,
                        bottom: 320,
                        center: true,
                        marginLeft: -410,
                        css: {
                            position: 'absolute',
                            opacity: 0,
                            backgroundImage: 'url(./src/img/bg1-4.png)',
                            backgroundSize: '100% 100%',                        
                        },
                        animateIn: {
                            opacity: 1,
                            bottom: '420',
                            marginLeft: '-510'
                        },
                        animateOut: {
                            opacity: 0,
                            bottom: '320',
                            marginLeft: '-410'
                        },
                        delayLoad: 500,
                        delayLeave: 100,
                    })
                    //bj
                    .addComponent({
                        type: 'base',
                        className: 'bg1-2',
                        width: 1000,
                        height: 215,
                        center: true,
                        marginLeft: -500,
                        css: {
                            // margin: 'auto',
                            position: 'absolute',bottom: 100,
                            background: 'url(./src/img/bg1-2.png) 50% 0 no-repeat'
                        }
                    })                      
                .addSlide('3Section-two')
                    .addComponent({
                        type: 'base',
                        className: 'duyi',
                        width: 522,
                        height: 336,
                        text: '渡一教育创立于2015年！ 在成哥 邓哥 彤哥的带领下已经向着高端编程教育公司大踏步的，渡一 Dream Factory',
                        center: true,
                        css: {
                            position: 'absolute',
                            opacity: 0,
                            top: 0,
                            backgroundImage: 'url(./src/img/dialog.jpg)',
                            backgroundSize: '100% 100%',                        
                            padding: '10px 15px 10px 15px',
                            textAlign: 'justify',
                            fontSize: '18px',
                            fontWeight: '900',
                            lineHeight: '25px'
                        },
                        animateIn: {
                            opacity: 1,
                            top: 240,
                        },
                        animateOut: {
                            opacity: 0,
                            top: 0
                        },
                        delay: 1000,
                        event: {
                            click: function () {
                                alert($(this).text());
                            }
                        }
                    })
                .addSlide('3Section-three')
                    .addComponent({
                        type: 'base',
                        className: 'duyi',
                        width: 522,
                        height: 336,
                        text: '渡一教育创立于2015年！ 在成哥 邓哥 彤哥的带领下已经向着高端编程教育公司大踏步的，渡一 Dream Factory',
                        center: true,
                        css: {
                            position: 'absolute',
                            opacity: 0,
                            top: 0,
                            backgroundImage: 'url(./src/img/dialog.jpg)',
                            backgroundSize: '100% 100%',                        
                            padding: '10px 15px 10px 15px',
                            textAlign: 'justify',
                            fontSize: '18px',
                            fontWeight: '900',
                            lineHeight: '25px'
                        },
                        animateIn: {
                            opacity: 1,
                            top: 240,
                        },
                        animateOut: {
                            opacity: 0,
                            top: 0
                        },
                        delay: 1000,
                        event: {
                            click: function () {
                                alert($(this).text());
                            }
                        }
                    })
        .load();

