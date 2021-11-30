// Code your solutions in this file
for (let age = 30 ; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
};

const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    };
    return gifts;
};
wrapGifts(gifts);

function writeCards(arrNames, event) {
    const msg = [];
    for (let i = 0; i < arrNames.length; i++) {
        msg.push(`Thank you, ${arrNames[i]}, for the wonderful ${event} gift!`)
        debugger;
    };
    return msg;
};
writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countDown(num){
    while (num <= 10 && num >= 0 ){
        console.log(num--)
    };
};
countDown(10);
