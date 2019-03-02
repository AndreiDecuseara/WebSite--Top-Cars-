function changeButton1()
{
    var a=document.getElementById("change");
    a.innerHTML="Telefon: 0766377257";
    document.getElementById("buton1").onclick=changeButton2;
     
}

function changeButton2()
{
    var a=document.getElementById("change");
    a.innerHTML="Telefon: 0786943456";
    var b=document.getElementById("buton1");
    b.onclick=changeButton1;
}

function schimbareCuloareTabel()
{
    document.getElementById("tabel").style.color="red";
document.getElementById("buton_schimbare").onclick=schimbareCuloareTabel1;
}

function schimbareCuloareTabel1()
{
    document.getElementById("tabel").style.color="gold";
document.getElementById("buton_schimbare").onclick=schimbareCuloareTabel;
}

function Submit1()
{
   alert("Thank you for your answer.") ;
}

function Submit2()
{
    var nr=0;
var x= document.getElementById("name");
if(x.value!="Name")
{x.style.color="black";nr++;}
    else{
       x.style.color="red";
    }
  var y= document.getElementById("pass");
if(y.value!="")
{y.style.color="black";nr++;}
    else{
       y.style.color="red";
    } 
    if(nr==2)
    alert("Thank you for your Log in! ");
}

function delete_function()
{
var parent = document.getElementById("sectiunea0");
var child = document.getElementById("img1");
parent.removeChild(child);
}

function create_function()
{
var para = document.createElement("p");
var node = document.createTextNode("This is a paragraf create by a button with Java Scripts by Andrei Decuseara");
para.appendChild(node);
var element = document.getElementById("div1");
element.appendChild(para); 
}

function myMove() {
  var elem = document.getElementById("animate");
  var elem1 = document.getElementById("animate1");
  var elem2 = document.getElementById("animate2");
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
      elem1.style.top = pos ; 
      elem1.style.left = pos + "px";
      elem2.style.top = pos +"px"; 
      elem2.style.left = pos ;
    }
  }
}

document.addEventListener("click", function(){
  document.getElementById("demo").innerHTML = "Va multumim ca ne-ati vizitat site-ul nostru!";
});