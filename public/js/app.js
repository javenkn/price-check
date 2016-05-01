/**
 * Sends a request to the server to get Uber products based on passed in
 * latitude and longitude positions.
 * @param  {number} lat The location's latitude value
 * @param  {number} lng The location's longitude value
 * @return {[Products]]} The Uber products available at the queried location
 */

var productPrices = getProductsByLocation(21.3069, -157.8583);

for(var i = 0; i < productPrices.responseJSON.products.length; i++){
  console.log(productPrices.responseJSON.products[i]);

  var uberElement = document.createElement("div");
  uberElement.className = "uber";

  var displayElement = document.createElement("header");
  var h2 = document.createElement("h2");
  h2.innerHTML = "Display: " + productPrices.responseJSON.products[i].display_name;
  displayElement.appendChild(h2);
  uberElement.appendChild(displayElement);

  var descriptionElement = document.createElement("paragraph");
  var p = document.createElement("p");
  p.innerHTML = "Description: " + productPrices.responseJSON.products[i].description;
  descriptionElement.appendChild(p);
  uberElement.appendChild(descriptionElement);

  var capacityElement = document.createElement("header");
  var h4 = document.createElement("h4");
  h4.innerHTML = "Capacity: " + productPrices.responseJSON.products[i].capacity;
  capacityElement.appendChild(h4);
  uberElement.appendChild(capacityElement);

  var imageElement = document.createElement("IMG");
  imageElement.src = productPrices.responseJSON.products[i].image;
  uberElement.appendChild(imageElement);

  document.body.appendChild(uberElement);
}

function getProductsByLocation (lat, lng) {
  var location = {
    latitude: lat,
    longitude: lng
  };
  var products = getProducts(location);
  return products;
}


/**
 * Gets the products from a certain location.
 * @param  {object} The location object to query
 * @return {[Product]]} An array of products
 */
function getProducts (location) {
  return $.ajax({
    type: "GET",
    data: location,
    url: '/products',
    async: false
  });
}

// Stretch Goal
/**
 * Returns the device's current location.
 * @return {object} The device's current location
 */
function requestProductsByCurrentPosition () {
  /* The `getCurrentPosition` takes a function as it's first argument.
   * This function is referred to as a "callback" function, because it is
   * called when the result (current location) is found.
   */
  navigator.geolocation.getCurrentPosition(/* your function name goes here */);
}
