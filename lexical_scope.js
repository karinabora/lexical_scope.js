var a=10
function n1(){
    var b=2
    console.log(a,b);
    function n2(){
        c=4
        console.log(a,b,c);
    function n3(){
        d=5
        console.log(a,b,c,d);
    }
    n3()
    } 
    n2() 
}
n1()
console.log(a);
console.log(b); 