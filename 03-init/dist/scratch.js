"use strict";
function firstElement(a) {
    return a[0];
}
const a_s = ["one", "two", "three", "four"];
const a_n = [1, 2, 3, 4];
const a_m = ["one", 2, "three", 4];
firstElement(a_s);
firstElement(a_n);
firstElement(a_m);
const newRequest = {
    body: {
        content: {
            title: "Doctor Who",
            location: "",
            lastPlayed: "",
        },
    },
};
let stringyBox = {
    inside: "I am a string",
};
let numberyBox = {
    inside: 123,
};
console.log(numberyBox);
