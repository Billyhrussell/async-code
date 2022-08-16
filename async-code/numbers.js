"use strict";

const BASE_URL = "http://numbersapi.com/";
const JSON = "?json";

let $oneNum = $("#one-num");
let $manyNums = $("#multiple-nums");

async function makeRequest(){
  const favNum = 5;

  try{
    const fact = await axios.get(`${BASE_URL}${favNum}${JSON}`);

    //let parsed = JSON.stringify(fact);
    // console.log(parsed);
    console.log(fact.data);
    // $oneNum.text(fact.text);
  }catch(err){
    console.log("You got an error");
  }
}

async function makeMultipleRequest(){
  const favNums = "2,3,4,5,6";

  try{
    fact = await axios({url: `${BASE_URL}${favNums}${JSON}`});
  }catch(err){
    console.log("You got an error");
  }
}


makeRequest();

