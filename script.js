//step 1. create a request variable.
  var request = new XMLHttpRequest();

//step 2. create a connection.
  request.open('GET','https://restcountries.eu/rest/v2/all',true);

//spet 3. send the request.
  request.send();

//spet 4. process and load the response.
  request.onload = function (){
     var data = JSON.parse(this.response);
     try
     {
       var len=data.length;
       console.log(len);
       if(len!==300)
       {
         throw new SyntaxError("data length is too low");
       }
     for(var i in data)
     {
       if(data[i].region=="Asia")
       {
         console.log(data[i].name);
       }
     }
     for(var j in data)
     {
       console.log(data[j].flag);
     }  
     }
     catch(err)
     {
       alert(err.name);
       alert(err.message);
       alert(err.stack);
     }
 //task 1. print the dlag url of all country.
 //task 2. print the countries whose region is asia.
  
}   

