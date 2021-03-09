(function (shop) { 
   var div = document.getElementById("scriptApp");
   div.innerHTML += '<div>\
      <select name="cars" id="cars">\
      <option value="volvo">Left Eye</option>\
      <option value="saab">Right Eye</option>\
      </select>\
      </div>'
   console.log('I am from script tag for shop ' + shop); 
})(Shopify.shop)
