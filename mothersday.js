if (window.XMLHttpRequest)
{// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
}
xmlhttp.onreadystatechange=function()
{
    console.log("4");
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
        alert(xmlhttp.responseText);
    }
}

console.log("1");
xmlhttp.open("GET","https://github.com/nbikhcha/Aggravation/blob/master/mothersday.html",true);
console.log("2");
xmlhttp.send();
console.log("3");
