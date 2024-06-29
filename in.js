let l=prompt("Enter password");
while(l.length===0||l===null)
    {
        alert("please enter the password");
        l=prompt("Enter password");
    }
console.log(l==="sanjay");
if(l==="sanjay")
{
    document.getElementById('but').innerHTML="Visit Profile";
}
else{
    document.getElementById('p').innerHTML="Wrong Password";
    document.getElementById('t').innerHTML="Try again";
}