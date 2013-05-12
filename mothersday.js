window.location="https://raw.github.com/nbikhcha/Aggravation/master/mothersday.html";
html = ""
window.onload = function(){
  console.log("loaded");
  html = $("pre").innerHTML;
  
  function unescapeHTML(escapedHTML) {
    return escapedHTML.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
  } 
  
  html = unescapeHTML(html);
}
