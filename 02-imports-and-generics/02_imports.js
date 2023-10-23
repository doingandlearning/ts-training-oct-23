"use strict";
// import http from "http";
// console.log(http);
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
var photos_json_1 = require("./photos.json");
console.log(photos_json_1.photos[0]);
// destructuring
// Array
var array1 = [
    ["Zac", "Tom", "Robbie"],
    ["Fiona", "Manish", "Inken"],
];
var _a = array1[0], teamLeader1 = _a[1], teamLeader2 = array1[1][0];
// const [count, setCount] = React.useState(0)
console.log(teamLeader1, teamLeader2);
// Object
var user = {
    name: "Nicholas",
    background: "AI",
    previousLanguages: ["Python"],
};
// Looks confusing!
var firstName = user.name, background = user.background;
console.log(firstName, background);
console.log(photos_json_1.photos[0].id);
var _b = photos_json_1.photos[0], id = _b.id, title = _b.title;
console.log(id, title);
// console.log([] === []);
var array123 = [];
var updateableName = "";
// var interesting;
// console.log(interesting);
// interesting = "Maths";
function log(message) {
    console.log(message);
}
exports.log = log;
exports.default = log;
