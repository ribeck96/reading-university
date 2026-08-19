
Riannon Beck <riannonbeck@gmail.com>
11:37 AM (0 minutes ago)
to me

const plan = document.getElementById("plan");


const savedPlan = JSON.parse(
    localStorage.getItem("degreePlan")
);


if(savedPlan){

    plan.innerHTML = `

        <h2>
            ${savedPlan.degree.level} of ${savedPlan.degree.type}
        </h2>

        <h3>
            ${savedPlan.degree.degree}
        </h3>

        <p>
            ${savedPlan.degree.description}
        </p>

        <h3>
            Course Requirements
        </h3>

    `;


    savedPlan.selections.forEach(function(course){

        plan.innerHTML += `

            <p>
                ☐ ${course.requirement}: 
                ${course.bookCategory}
            </p>

        `;

    });

}
else{

    plan.innerHTML = `
        <p>No degree plan found.</p>
    `;

}
