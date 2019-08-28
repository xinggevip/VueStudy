let app = new Vue({
    el:"#app",
    data:{
        message:"遍历",
        info:["苹果","香蕉","橘子"],
        home:[{name:"Tom"},{name:"Jack"}]
    },
    methods:{
        fn:function (){
            alert("提示内容！");
        },
        show:function (name){
            alert("我喜欢" + name);
        }
    }
})


