let username;
document.getElementById("button").onclick=function(){
    username=document.getElementById("username").value;
    document.getElementById("paragraph").textContent=`hello ${username}`;
    email=document.getElementById("email").value;
    document.getElementById("paragraph2").textContent=`
    YOUR EMAIL IS ${email}`

}