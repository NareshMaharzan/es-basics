//Default parameters
function defParam(a = 10, b = 11) {
    return a + b;
}

console.log(defParam(12));


//Rest Parameters

function restParams(...nums){
    return nums.reduce(function(total, num) {
        return total + num;
    },10);
}

console.log(restParams(1,2,3,4,5,6,7,8,9));

//arrow function
const reducer = (total, num) => {
    return  total + num
};

const reducer1 = (total, num) => total + num;

const anotherArrow = a => a * 2; // function(a){return a * 2;}

