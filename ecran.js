filterSelection("all","all");
var arr1=["all","Gaming","Pro","Lenovo","Asus","BenQ","Dell","Hp","Msi","Samsung","Prmo"];
var arr2=["nball","nbgam","nbpro","nblenovo","nbasus","nbbenq","nbdell","nbhp","nbmsi","nbsam","nbpromo"]
var arr3=["ecran1","ecran2","ecran3","ecran4","ecran5","ecran6","ecran7","ecran8","ecran9","ecran10","ecran11","ecran12","ecran13","ecran14","ecran15","ecran16","ecran17","ecran18","ecran19","ecran20","ecran21"]
var arr4=["eecran1","eecran2","eecran3","eecran4","eecran5","eecran6","eecran7","eecran8","eecran9","eecran10","eecran11","eecran12","eecran13","eecran14","eecran15","eecran16","eecran17","eecran18","eecran19","eecran20","eecran21"]

var i ;
for (i=0;i<arr1.length;i++){
  Calc(arr1[i],arr2[i]);
}
var ar
verifDispo();
function verifDispo(){
  fetch("screens.json")
.then(result => result.json())
.then(result => {
  for(i=0;i<arr3.length;i++){
    if(result[arr3[i]]["quantité"]==0){
      console.log("salem")
      document.getElementById(arr3[i]).innerHTML = "<img src="+"photos/cross.png class=cross></img><label class=rep >  Rupture de Stock</label>";
      document.getElementById(arr4[i]).disabled=true;
    }
    else{
      document.getElementById(arr3[i]).innerHTML = "<img src="+"photos/tick.png class=cross></img><label class=dis >  Disponible</label>";

    }
  }
    
})}
function Calc(c,x){
    document.getElementById(x).innerHTML = " ("+document.getElementsByClassName(c).length+")";
}
function filtration(){
  
  if(document.getElementById('all').checked){
    var x = "all"
    for (i = 3 ;i<arr1.length;i++){
      x+=fil(arr1[i]);
    }
    filterSelection(x,"all")
  }
  else if(document.getElementById('Gaming').checked){
    var x = "Gaming"
    for (i = 3 ;i<arr1.length;i++){
      x+=fil(arr1[i]);
    }
    filterSelection(x,"Gaming")
  }
  else if(document.getElementById('Pro').checked){
    var x = "Pro"
    for (i = 3 ;i<arr1.length;i++){
      x+=fil(arr1[i]);
    }
    filterSelection(x,"Pro")
  }
  
}
function fil(y){
  if(document.getElementById(y).checked){
    return " "+y;
  }
  return "";
  
}
function filterSelection(c,o) {
  var x,i,j;
  c=c.split(" ")
  x = document.getElementsByClassName("all");
  if (c.length>1){
    c[0] = "aaaa";
  } 
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    for( j=0; j<c.length;j++){
      if (x[i].className.indexOf(c[j]) > -1 && x[i].className.indexOf(o) > -1) 
      AddClass(x[i], "show");
      
    }
    
  }
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}
function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}







