// Milestone3

const dynamicForm = document.getElementById("form") as HTMLFormElement;
const displayElement = document.getElementById("resumeOutput") as HTMLDivElement;

//Handling
dynamicForm.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  const myName = (document.getElementById("name") as HTMLInputElement).value;
  const myEmail = (document.getElementById("email") as HTMLInputElement).value;
  const myContact = (document.getElementById("phone") as HTMLInputElement)
    .value;
  const myEducation = (document.getElementById("education") as HTMLInputElement)
    .value;
  const myExperience = (
    document.getElementById("Experience") as HTMLInputElement
  ).value;
  const mySkills = (document.getElementById("Skills") as HTMLInputElement)
    .value;

  const resume = `
<h2><b>Resume</b></h2>
<h3><i>Personal Information<i></h3>
<p><b>Name:</b>${myName}</p>
<p><b>Email:</b>${myEmail}</p>
<p><b>Contact:</b>${myContact}</p>

<h3>Education</h3>
<p>${myEducation}</p>

<h3>Experience</h3>
<p>${myExperience}</p>

<h3>Skills</h3>
<p>${mySkills}</p>`;

//Display
if(displayElement){
    displayElement.innerHTML = resume;
}else{
    console.error('Some element is missing. ')
}


});
