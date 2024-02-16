"use strict";
// block
// let =>  block scope
// {
//   let x: number = 20;
//   x = 30;
//   console.log(`Value is ${x}`);
// }
// console.log(`Value is ${x}`) let can only be used in block
// Global Scope => var
// {
//   var x: number = 20;
//   console.log(`Value is ${x}`);
// }
// x = 40;
// console.log(`Value is ${x}`);
// x = 60;
// {
//   console.log(`Value is ${x}`);
// }
{
    const x = 10;
    console.log(`Value is ${x}`);
}
