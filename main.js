themenuarray=[
    "margarita pizza",
    "veggie special pizza",
    "paneer pizza",
    "pinapple pizza",
    "pasta pizza"
    
]

function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    themenuarray.sort();
    for (var i=0; i<themenuarray.length; i++){
        htmldata=htmldata+'<li>'+themenuarray[i]+'</li>'
    }
    htmldata=htmldata+"</ol>"
    document.getElementById("display_menu").innerHTML=htmldata;

}
function add_item() {
 var htmldata;
 var item=document.getElementById("add_item").value;
 themenuarray.push(item);
 themenuarray.sort();
 htmldata="<section class='cards'>"
 for (var i=0; i<themenuarray.length; i++ ) {
     htmldata=htmldata+'<div class="cards">'+'<img src="https://tse2.mm.bing.net/th?id=OIP.RqKMMPM-huv2exYKU_adlAHaEo&pid=Api&P=0&w=295&h=185">'+
     themenuarray[i]+'</div>'
     
 }
 htmldata=htmldata+"</section>"
     document.getElementById("display_addedmenu").innerHTML=htmldata;
    }