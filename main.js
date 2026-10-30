
function greeting(nameValue) {

    return nameValue;

}

console.log(greeting('Nova'));


function circleCircumference(diameter) {

    const diameterTrim = diameter.trim();

    const diameterValue = Number(diameterTrim);

    return 3.14 * diameterValue;

};

console.log(circleCircumference('5'));


function first() {

    console.log('Hello');

    console.log(second());

    console.log('second console log.');

};

function second() {

    console.log('world!');

};

console.log(first());

// the logs are in order they apper in, "Hello" "world!" 'Undefined' "second console log." 'Undefined'.
// it happens in this order because when 'first' is called the order diplayed is from top to bottom, once the second function is called that line on is from start to finish that 'second' function then returning to finish 'first'.

function stackOverFlow() {

if (stackOverFlow() === 0)
    
    return stackOverFlow();

};

console.log(stackOverFlow());