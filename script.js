console.log("Hi Earth!");
console.log("this is my change");

function eat(food1, food2)
{
    alert("I like to eat " + food1 + " and " + food2 );
}
/* function myFunc(callback, args)
{
    //do stuff
    //...
    //execute callback when finished
    callback.apply(this, args);
}

//alerts "I like to eat pickles and peanut butter"
myFunc(eat, ["pickles", "peanut butter"]); 
 */
function func1(a, b){
    alert(`Results: ${a} and ${b}`);
}

function func2(callback, args)
{
    callback.apply(this,args);
}

func2(func1, ["A","B"]);

