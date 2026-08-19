
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

        <div class="planCourse">

            <h3>${course.requirement}</h3>

            <p>
                Reading Category:
                <strong>${course.bookCategory}</strong>
            </p>

        </div>

    `;

});
}
else{

    plan.innerHTML = `
        <p>No degree plan found.</p>
    `;

}
