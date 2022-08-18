function validate()
{
    
    var username=document.getElementById("userid").value;
    var password=document.getElementById("pswrd").value;
    if(username=="Nikita" && password=="jade")
    {
        window.Location.href="man.html";
    }
    else
    {
        alert('Jade Chukala Password');
    }
}