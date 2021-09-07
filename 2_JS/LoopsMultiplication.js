var x = 0;
var y = 0;
var product = 0;
var productstring = "";

while (x != 10) {
    x++;
    while (y != 10) {
        y++;
        product = x * y;
        productstring += product + "\t";
    }
    console.log(productstring);
    productstring = "";
    y = 0;
}