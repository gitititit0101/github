$(function() {
    // 
    // searchbtn 验证事件
    $("#searchbtn").click(function() {
        // console.log(1)
        // 获取输入框内当前的值
        var keyword = $("#keyword").val();
        // 判断   当前有值 就跳转至搜索结果页面
        if (keyword) {

            // keyArr.push(keyword);
            // console.log(keyArr);
            window.location.href = "search-list.html?keyword=" + keyword;
            // 当输入框没有值的时候。将提醒用户输入值
        } else {
            mui.alert("请您用真心对待我");
            return;
        }
    });


    // 实现关键字存储到历史记录


    // 存储关键字的数组
    var keyArr = [];

});