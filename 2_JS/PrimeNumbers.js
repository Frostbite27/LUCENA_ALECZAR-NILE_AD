var num = 2719;
var prime = 0;


for (i = 2; i <= num / 2; ++i) {
    if (num % i == 0) {
        prime = 1;
        break;
    }
}
if (num < 2) {

    console.log(num, "is not a prime number");
} else if (num >= 2) {
    if (prime == 0)
        console.log(num, "is a prime number");

    else
        console.log(num, "is not a prime number")
}