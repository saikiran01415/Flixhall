/* button functions */

function show_home(){
    document.getElementById("login-page").style.display="none"
    document.getElementById("home").style.display="block"
    
}
function show_login(){
    document.getElementById("login-page").style.display="flex"
    document.getElementById("home").style.display="none"
    
}

function show_signup(){
    document.getElementById("login").style.display="none"
    document.getElementById("signin").style.display="block"
}

function show_login1(){
     document.getElementById("login").style.display="flex"
    document.getElementById("signin").style.display="none"
}

/* dropdown */

// for language
const lan=["Telugu","Hindi","English","kanada","Tamil","Malayam"]
var dropdown=document.getElementById("dropdown")
lan.forEach(function (item){
    var option=document.createElement("option")
    option.text=item;
    dropdown.appendChild(option)
})

// for catagary
const value=["Action","Drama","","kanada","Tamil","Malayam"]
let C_dropdown=document.getElementById("C-dropdown")
value.forEach(function (item){
    var option=document.createElement("option")
    option.text=item;
    C_dropdown.appendChild(option)
})
