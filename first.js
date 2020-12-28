(function (shop) { 
   var div = document.getElementById("scriptApp");
   div.innerHTML += '<div> <p>this is a box</p></div>'
   console.log('I am from script tag for shop ' + shop); 
})(Shopify.shop)
