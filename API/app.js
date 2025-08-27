// API 


// assume i request to api then api according to request take the data from server and give resonse to me 


// like we order food from zomato then then zomato rider go to that specific hotel and take that food then came to me and give me the food 
// so in this example order is request rider is api and hotel is the server 
// and person who order is user 

//json
// parse means conversion from one data format to other data format 

//json.parse(data)
// this method is use to convert the string to js object
let respose1 = '{"fact":"Tabby cats are thought to get their name from Attab, a district in Baghdad, now the capital of Iraq.","length":100}';
let validres1 = JSON.parse(respose1);
console.log(validres1);
console.log(validres1.fact);
console.log(validres1.length);


//json.stringify
// this method is use to convert the js object data  to json 

let obj1 = {
    name : "yugi",
    rollno : 81,
}

let validres2 = JSON.stringify(obj1);
console.log(validres2);


// testing api request 
// tools = >  https://hoppscotch.io/

//AJAX
// Aasynchronous javascript and xml
// name suggest xml but we get in json because old times we get response in  xml but now we get in json

//https verbs
// example 
// 1. GET => when want to get information 
// 2. POST => if we want send some data get response 
// 3. DELETE => use when we want to delete something
// etc

//status code 
// example 
// 1. 200 => onk
// 2. 404 => notfound
// 3. 400 => badrequest 
// 4. 500 => internet server error

// query string 
// A query string is the part of a URL that lets you send extra data to an API 
// in the form of key=value pairs after a ?, separated by &. For example, if you use the OpenWeather API like this:
// https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=YOUR_API_KEY
// Here, q=London tells the API you want weather for London, units=metric asks for °C instead of °F, 
// and appid=YOUR_API_KEY is your access key. The API reads these query string values and returns the weather data you requested.

//https header 