const capitalize = (str: string): string => str.toUpperCase();
const addExclamation = (str: string): string => str + "!";

const shout = (str: string): string => {
  return addExclamation(capitalize(str));
};

console.log(shout("hello")); // 'HELLO!'
