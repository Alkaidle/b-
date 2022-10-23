/*function speedup(){
    var inp=document.getElementsByName("number");
    var att=document.createElement("li");
    att.className="bpx-player-ctrl-playbackrate-menu-item";
    att.setAttribute("data-value",inp);
    //speedvalue.appendChild(att);
    var clas2=document.getElementsByClassName("bpx-player-ctrl-playbackrate-menu");
    //speedvalue.appendChild(att); -->有问题
    clas2[0].appendChild(att);
    }
    */
    /*setTimeout(a,5000);
function a()
{
var shuru=document.createElement("input");
shuru.setAttribute('type','test');  
shuru.setAttribute('name','number'); 
shuru.setAttribute('class','box'); 
shuru.style="height:100px;width:200px;";
var clas1=document.getElementsByClassName("video-container-v1");
clas1[0].appendChild(shuru)
//if(document.getElementById("bilibili-player-placeholder-bottom")!=null)
//document.getElementById("bilibili-player-placeholder-bottom").appendChild(shuru);

var clas4=document.getElementsByClassName("box");
var button=document.createElement("button");
button.setAttribute('value','ok');
button.setAttribute('onclick','speedup()');
//button.setAttribute('style','display:block');
clas4[0].appendChild(button);
}
//clas3[0].innerHTML="<input type='button' value='ok' onclick='speedup()'>";

/*尝试将button放在input里面：失败
var button=document.createElement("input");
button.setAttribute('type','button');
button.setAttribute('onclick','speedup()');
clas3[0].appendChild(button);

}
*/

setTimeout("popup()",1500);
function popup(){
var input=prompt("请输入倍数","1")
if(input!=null && input!=""){
    document.querySelector('video').playbackRate=input;
}
}
