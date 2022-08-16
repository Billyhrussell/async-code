"use strict";

const BASE_URL = "http://numbersapi.com/";
const JSON = "?json";

let $oneNum = $("#one-num");
let $manyNums = $("#multiple-nums");
const $oneNumMany = $("#one-num-many-rq");

const favNum = 5;

async function makeRequest(){


  // try{
    const fact = await axios.get(`${BASE_URL}${favNum}?json`);

    //let parsed = JSON.stringify(fact);
    // console.log(parsed);
    console.log("fact.data", fact.data);
    console.log("fact.data.text", fact.data.text);

    $oneNum.text("fact.data.text",fact.data.text);
  // }catch(err){
    console.log("You got an error");
  // }
}

async function makeMultipleRequest(){
  const favNums = "2,3,4,5,6";

    fact = await axios({url: `${BASE_URL}${favNums}${JSON}`});
    $manyNums.text(fact)

}

async function oneNumFourRq(){

  const fact1 = axios({url: `${BASE_URL}${favNum}${JSON}`});
  const fact2 = axios({url: `${BASE_URL}${favNum}${JSON}`});
  const fact3 = axios({url: `${BASE_URL}${favNum}${JSON}`});
  const fact4 = axios({url: `${BASE_URL}${favNum}${JSON}`});

  let results = await Promise.allSettled([fact1,fact2,fact3,fact4]);
  let facts = results.map(res => res.data.text);
  $oneNumMany.text(facts);

}

makeRequest();
makeMultipleRequest();
oneNumFourRq();

