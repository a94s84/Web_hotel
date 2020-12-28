var select=0;
var sel_val=0;

$(document).ready(function(){
  $("#div-select").empty();
  //將預覽的div新增到div-select裡
  for (var i=1; i<=15; i++){
    $("#div-select").append(
      "<div class='h_hotels_div' id='div"+i+"'><div class='h_hotels_pic'><a href='#'><img src='img/best_"+i+".jpg'></div><div class='h_hotels_detail'><p>台東市區</p><h5>采虹6號</h5><p>嚮往台東的大山大水，卻又仍希望住在方便的市區，有沒有一個簡單可愛的地方，能暫時給妳一個喘息的空間、讓妳卸下疲憊的旅途奔波，就是采虹六號。</p></div></a></div>" 
       );
  }
    iconShow();
    $("#btnPrev").on("click",fnPrev);
    $("#btnNext").on("click",fnNext);
  })


//判斷左右按鈕是否出現及按鈕
function iconShow(){
if (select < 1){
  $("#btnPrev").attr("style","display:none;");
}
else if (select > 1){
  $("#btnNext").attr("style","display:none;");
}
else {
  $("#btnPrev").removeAttr("style");
  $("#btnNext").removeAttr("style");
}
}

//往左按鈕處理事件
function fnPrev(){
if(select != 0){
  select -=1;
  sel_val += 100;
  $("#div-select").css("left",sel_val+"%");   
}
iconShow()
}

//往右按鈕處理事件
function fnNext(){
  select +=1;
  sel_val -= 100;
  $("#div-select").css("left",sel_val+"%");   
  iconShow()
}







