const prompt = require('prompt-sync')()
let num = Number(prompt("How Many Sides Should The Dice Have: "))

    console.log(Math.ceil(Math.random()*num))