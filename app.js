// Milestone2
// const button = document.getElementById('Submit') as HTMLButtonElement;
// const skills = document.getElementById('skillhide') as HTMLElement;
// button.addEventListener('click' , ()=>{
//     if(skills.style.display === 'none'){
//         skills.style.display ='block'
//     }else{
//         skills.style.display = 'none'
//     }
//});
// Milestone3
var dynamicForm = document.getElementById("form");
var displayElement = document.getElementById("resumeOutput");
//Handling
dynamicForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var myName = document.getElementById("name").value;
    var myEmail = document.getElementById("email").value;
    var myContact = document.getElementById("phone")
        .value;
    var myEducation = document.getElementById("education")
        .value;
    var myExperience = document.getElementById("Experience").value;
    var mySkills = document.getElementById("Skills")
        .value;
    var resume = "\n<h2><b>Resume</b></h2>\n<h3><i>Personal Information<i></h3>\n<p><b>Name:</b>".concat(myName, "</p>\n<p><b>Email:</b>").concat(myEmail, "</p>\n<p><b>Contact:</b>").concat(myContact, "</p>\n\n<h3>Education</h3>\n<p>").concat(myEducation, "</p>\n\n<h3>Experience</h3>\n<p>").concat(myExperience, "</p>\n\n<h3>Skills</h3>\n<p>").concat(mySkills, "</p>");
    //Display
    if (displayElement) {
        displayElement.innerHTML = resume;
    }
    else {
        console.error('Some element is missing. ');
    }
});
