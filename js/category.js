$(function() {
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });

    $.ajax({
        type: "get",
        url: "/category/queryTopCategory",
        success: function(abing) {
            // console.log(abing);

            //  拼接
            var html = template("Category", abing);
            // console.log(html)
            $("#shuaiabing").html(html);

        }

    });

    //  点击一级按钮 显示二级页面
    $("#shuaiabing").on("click", "a", function() {
        $(this).addClass("active").siblings().removeClass("active");
        var id = $(this).attr("data-id");
        console.log(id);
        $.ajax({
            type: "get",
            url: "/category/querySecondCategory",
            data: {
                "id": id
            },
            success: function(abing) {
                console.log(abing);

                var html = template("Categorylinks", abing);
                $("#dadadshuaiabing").html(html);
            }

        });

    })

});