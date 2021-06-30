//h-menu
$(function() {
  $(".hamburger").on("click", function() {
    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {
      $(".gl-nav").addClass("active");
    } else {
      $(".gl-nav").removeClass("active");
    }
  });
});

//診断
$(function() {
  $(".btn").on("click", function() {
    $(this)
      .closest("div")
      .css("display", "none");
    id = $(this).attr("href");
    $(id)
      .addClass("fit")
      .fadeIn("slow")
      .show();
    return false; //falseでaタグ効果をキャンセル指定
  });

  var countA;
  var countB;
  var countC;
  var box = [];
  $(".btn").each(function() {
    $(this).on("click", function() {
      var value = $(this).data("value");
      box.push(value);

      countA = box.filter(function(x) {
        return x === "a";
      }).length;
      countB = box.filter(function(y) {
        return y === "b";
      }).length;
      countC = box.filter(function(z) {
        return z === "c";
      }).length;
    });
  });

  //結果出力
  $(".end").on("click", function() {
    if (countA > countB > countC) {
      $("#answer_01").css("display", ""); //回答1
    }
    if (countB > countA) {
      $("#answer_02").css("display", ""); //回答2
    }
    if ((countC > countA) & countB) {
      $("#answer_03").css("display", ""); //回答3
    } else {
      $("#answer_04").css("display", ""); //その他
    }
  });
});
