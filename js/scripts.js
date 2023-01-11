window.onload = function(){
  document.querySelector("form").onsubmit = function(event){
  event.preventDefault();
    // const ageId = document.querySelector("input#age-id").value;
    // const age = parseInt(ageId);
    const age = parseInt(document.querySelector("input#age-id").value);

    console.log("age ", age);

    // document.querySelector("").innerText = age;
    if(age < 18) {
      console.log("in IF ");
      document.getElementById("too-young").removeAttribute("class");
      document.getElementById("old-enough").setAttribute("class", "hidden");
    } else {
      console.log("in else ");
      document.getElementById("old-enough").removeAttribute("class");
      document.getElementById("too-young").setAttribute("class","hidden");
    }   
  }
}