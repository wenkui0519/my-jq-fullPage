pageEngine = {
    init:function(selector,colorArray){
        this.$W = $(selector);
        this.colorArray = colorArray;
        this.slideFlag = false;
        return this;
    },
    addSection:function(className){
        this.slideFlag = false;
        this.$Page = $('<div class="section"></div>');
        this.$Page.addClass(className);
        this.$Page.appendTo(this.$W);
        return this;
    },
    addSlide:function(className){
        this.slideFlag = true;
        this.$Slide = $('<div class="slide"></div>')
        this.$Slide.addClass(className);
        this.$Slide.appendTo(this.$Page);
        return this;
    },
    addComponent:function(config){
        var type = config.type;
        var command = null;
        switch (type) {
            case 'base':
                command = ComponentFactory(config);
                break;
        }
        this.slideFlag ?  this.$Slide.append(command) : this.$Page.append(command); 
        return this;
    },
    bindEvent:function(){//给section绑定事件
        this.$W.find('.section')
            .on({
                _leave: function () {
                    $(this).find('.command').trigger('cpLeave');
                },
                _load: function () {
                    $(this).find('.command').trigger('cpLoad');
                }
            })

    },
    load:function(){//fullpage插件 触发section上的事件
        this.bindEvent();
        var self = this;
        this.$W.myFullPage({
            colorArray: this.colorArray,
            onLeave: function(index,direction){
                self.$W.find('.section').eq(index).trigger('_leave');
            },
            afterLoad: function(index,direction){
                self.$W.find('.section').eq(index).trigger('_load');
            }
        })
        this.$W.find('.section').eq(0).trigger('_load');

    }
}