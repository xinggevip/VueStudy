let app = new Vue({
    el: "#app",
    data: {
        i: 0,
        thing: "",
        something: [{ do: "给电动牙刷充电", see: true }],
        see: true

    },
    methods: {
        // 添加数据
        add: function () {
            this.something.push({ do: this.thing, see: true });
        },
        // 删除数据
        rem: function (item) {
            this.something.splice(this.something.indexOf(item), 1);
        },
        // 隐藏数据
        hid: function (item) {
            // 根据值找到下标，根据下标设置see
            this.something[this.something.indexOf(item)]["see"] = false;
        },
        // 全部显示/隐藏
        togo: function () {
            if (this.see) {
                this.something.forEach(element => {
                    element["see"] = false;
                });
                this.see = false;
            } else {
                this.something.forEach(element => {
                    element["see"] = true;
                });
                this.see = true;
            }

        }
    }
})


