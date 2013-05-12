
if (window.XMLHttpRequest)
{// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
}
xmlhttp.onreadystatechange=function()
{
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
        alert(xmlhttp.responseText);
    }
}
xmlhttp.open("GET","https://github.com/nbikhcha/Aggravation/blob/master/mothersday.html",true);
xmlhttp.send();
