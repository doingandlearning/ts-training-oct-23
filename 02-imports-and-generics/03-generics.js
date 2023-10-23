"use strict";
//
function firstElement(a) {
    return a[0];
}
var a_s = ["one", "two", "three", "four"];
var a_n = [1, 2, 3, 4];
var a_m = ["one", 2, "three", 4];
firstElement(a_s);
firstElement(a_n);
firstElement(a_m);
var newRequest = {
    body: {
        content: {
            title: "Doctor Who",
            location: "",
            lastPlayed: "",
        },
    },
};
var stringyBox = {
    inside: "I am a string",
};
var numberyBox = {
    inside: 123,
};
