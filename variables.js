//var
//var's are function scoped

var func = function() {
    var one = 1;
    if (true) {
        var one = 2;
    }
    console.log("var = ", one); //2
};


//let
//let's are block scoped


let letFunc = function() {
    let one = 1;
    one = 3;
    if (true) {
        let one = 2;
    }
    console.log("let = ", one); //3
};

//const
//const is also block scoped

const constFunc = function() {
    const one = 1;
    // one = 1;
    if (true) {
        const one = 2;
    }
    console.log("const = ", one); //1
};

func();
letFunc();
constFunc();
