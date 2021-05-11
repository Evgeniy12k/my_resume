// ============================
//  contact data
// ============================
document.querySelector('.contacts-block').innerHTML +=`<li><a href="tel:${data.phone}">${data.phone}</a></li>`;
document.querySelector('.contacts-block').innerHTML +=`<li><a href="mailto:${data.email}">${data.email}</a></li>`;
document.querySelector('.contacts-block').innerHTML +=`<li><a href="https://github.com/Evgeniy12k">${data.link}</a></li>`;
document.querySelector('.address').innerHTML +=`<p>${data.address}</p>`;
document.querySelector('#my-photo').src = data.photo;

// skills
let skillsData = '';
 data.skills.forEach(item =>{
    skillsData += `<li> ${item}</li>`;

 });

 document.querySelector('.skills-list').innerHTML = skillsData;

// education

let educationsData = '';
 data.education.forEach(item =>{
    educationsData += `<li> ${item[0]}, ${item[1]}</li>`;

 });

 document.querySelector('.education-list').innerHTML = educationsData;

//  Achievements
// skills
let achievementsData = '';
 data.achievements.forEach(item =>{
    achievementsData += `<li> ${item}</li>`;
 });
 document.querySelector('.achievements-list').innerHTML = achievementsData;


//  experience

let experienceData = '';
experience.forEach(item =>{
    experienceData +=`<section class ="mb-5">`;
    experienceData +=`<h4 class="company-name mb-2">${item.company}, ${item.sity}, <i>${item.from} -${item.to} </i> </h4>`;
    experienceData +=`   <h5>${item.position}</h5>`;
    experienceData +=`<p>${item.discription}</p>`;
    experienceData +=` </section>`;
});
document.querySelector('.experience-list').innerHTML = experienceData;

document.querySelector('#my-name').innerHTML = ` <h1 class="text-center cv-header mt-4 mb-4">
${data.last_name} <span class="color-grey">${data.first_name}</span> 
   
</h1>`;
document.querySelector('#job-title').innerHTML = data.job_title;
document.querySelector('.profile-data').innerHTML = data.profile;

                    
                   
                    
               