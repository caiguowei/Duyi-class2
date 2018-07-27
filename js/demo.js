

var obj = {
    init:function(){
        this.photosUl = $('.photos');
        this.listUl = $('.list');
        this.len = 10;
        this.createDom();
    },
    createDom:function(){
        var str ='';
        for(var i = 1; i <= this.len;i++){
            str += '<li><img src="./images/' + i +'.jpg" alt=""></li>';
            var oLi = $('<li></li>');
            this.listUl.append(oLi);
        }
        this.photosUl.html(str);
        this.picLi = $('.photos li');
        this.picLi = $('.plist li');
        this.change(0);
    },
    bindEvent:function(){
        this.picLi.on('click',function(){
            this.changeIndex($(this).index());
        });
        this.listLi.on('click',function(){
            this.changeIndex($(this).index());
        });
    },
    change:function(){
    
    },
    changeIndex:function(index){
        if(nowIndex != index){
            this.change(index);
        }
    }
}
obj.init();

//点击事件bindEvent --->点击  。photos-->li  .list-->li
//$(this).index（） -->change(index)