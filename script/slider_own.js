/*
$(document).ready(function () {
    var nextIm = $("#next-im");
    var prevIm = $("#prev-im");
    var toLeft = function (index, elem) {
        elem.css("left", "750px");
    } ;
    var toRight = function (index, elem) {
        elem.css("left", "-750px")
    }
    nextIm.on('click', function () {
        $(".slider img").each(toRight);
    });
    prevIm.on('click', function() {
        $(".slider img").each(toLeft);
    });
})
*/

$(document).ready(function () {
    $("#add").on("click", function() {
        var index = $("#index").val();
        var title = $("#title").val();
        var htmlContent = $("#html-content").val();
        var data = $("#datepicker").val();
        var imgSrc = $("#image").val();
        var ancor = "<a href='#'></a>";
        
        console.log(index, title, htmlContent, data, imgSrc);
        var newLi = document.createElement("li");
        newLi.setAttribute("class", "tab current");
        $(newLi).append("<a href='#'>" + title +"</a>");
        $(newLi).insertBefore("#next-im");
    })
})