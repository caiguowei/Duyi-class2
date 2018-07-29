

var obj = {
    init: function () {
        this.photosUl = $('.photos');
        this.listUl = $('.list');
        this.len = 10;
        this.createDom();
    },
    //  创建元素
    createDom: function () {
        var str = '';
        for (var i = 1; i <= this.len; i++) {
            str += '<li><img src="./images/' + i + '.jpg" alt=""></li>';
            var oLi = $('<li></li>');
            this.listUl.append(oLi);
        }
        this.photosUl.html(str);
        this.picLi = $('.photos li');
        this.listLi = $('.list li');
        this.change(0);
        this.bindEvent();
    },
    //  点击事件
    bindEvent: function () {
        var self = this;
        this.picLi.on('click', function () {
            self.changeIndex($(this).index());
        });
        this.listLi.on('click', function () {
            self.changeIndex($(this).index());
        });
    },
    change: function (index) {
        var len = this.len;
        var picLi = this.picLi;
        var listLi = this.listLi;
        for (var i = 0; i < len; i++){
            i % 2 == 0 ? d = 1: d = -1;
            var deg = parseInt(Math.random() * 360);
            var h = parseInt(Math.random() * 400);
            var w = parseInt(Math.random() * 600);
            var z = parseInt(Math.random() * 100);
            $(picLi[i]).css(
                'transform','rotateZ('+ d * deg +' deg) translateZ(-' + z + ' px)',
            );
            $(picLi[i]).on('transitionend',(function(i){
                $(picLi[i]).animate({
                    'z-index': 0,
                    'top':p * h / 1.2 + 'px',
                    'left': p * w / 1.2 + 'px',
                },'1500', 'swing')
            })(i));
            $(listLi[i]).css({
                'transform': 'scale(' + 1 + ')',
            })    
        }
        $(picLi[index]).animate({
            top:0,
            left:0
        },10,function(){
            $(picLi[index]).css({
                'transform':'rotateZ(' + 0 + 'deg) translateZ(' + 10 + 'px)',
                'z-index':1000,
            })
        })
    },
    changeIndex: function (index) {
        if (this.nowIndex != index) {
            this.nowIndex = index;
            this.change(index);
            console.log(index);
        }
    }
}
obj.init();

//点击事件bindEvent --->点击  。photos-->li  .list-->li
//$(this).index（） -->change(index)