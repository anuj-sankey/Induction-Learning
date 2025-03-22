var sum = function(a) {
    console.log(a);

    var c = 4;

    return function(){
        return a+b+c;
    }
}

var store = sum(2);