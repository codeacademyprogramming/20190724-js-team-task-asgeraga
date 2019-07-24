`use strict`;


// let forum = document.createElement("div");  
// forum.innerHTML = `<form class="container" >
// <div class="form-group">

//   <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
// </div>
// <div class="form-group">
//   <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
// </div>
// <div class="form-group form-check">
//   <input type="checkbox" class="form-check-input" id="exampleCheck1">
//   <label class="form-check-label" for="exampleCheck1">Check me out</label>
// </div>
// <button type="submit" class="btn btn-primary">Submit</button>
// </form>`;                   
// document.body.appendChild(forum);            


let start = document.createElement("div"); 
start.innerHTML = `
<div class="container">
  <div class="row">
    <div class="col6">
      <button id="startb" type="button" class="btn btn-success start">Start</button>
      

    </div>
  </div>
</div>`
document.body.appendChild(start);

let stop = document.createElement("div"); 
stop.innerHTML = `
<div class="container">
  <div class="row">
    <div class="col6">
     
      <button id="stopb" type="button" class="btn btn-danger stop">Stop</button>

    </div>
  </div>
</div>`
document.body.appendChild(stop);

var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById("startb").innerHTML = d.toLocaleTimeString();
}


