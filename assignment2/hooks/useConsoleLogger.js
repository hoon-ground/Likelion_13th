console.log(a);
var a = 10;
function outer() {
    console.log("바깥 1")
    function inner() {
        console.log('안의 함수');
    }
    inner();
    console.log("바깥 2");
}
outer();