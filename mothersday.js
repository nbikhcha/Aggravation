window.location="https://raw.github.com/nbikhcha/Aggravation/master/mothersday.html";
html = $("pre").innerHTML;

function unescapeHTML(escapedHTML) {
  return escapedHTML.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
}

html = unescapeHTML(html);
window.location="about: blank";
document.open();
document.write(html);
