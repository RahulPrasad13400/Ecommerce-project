var productContainer=document.getElementById("product")
var searchproduct=document.getElementById('search')
var productlist=productContainer.querySelectorAll("div")

searchproduct.addEventListener("keyup",function(){
    var enteredValue=event.target.value.toUpperCase()
    for(i=0;i<productlist.length;i++){
        
        var productname=productlist[i].querySelector("h4").textContent
        if(productname.toUpperCase().indexOf(enteredValue)<0){
            productlist[i].style.display="none"
        }
        else{
            productlist[i].style.display="block"
        }
    }
})