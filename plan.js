
const plan = document.getElementById("plan");
const studentName = localStorage.getItem("studentName") || "";

const savedPlan = JSON.parse(
    localStorage.getItem("degreePlan")
);


if(savedPlan){

    plan.innerHTML = `
<h3>
    Student: ${studentName || "____________________"}
</h3>
        <h2>
            ${savedPlan.degree.level} of ${savedPlan.degree.type}
        </h2>

<h3>
    ${savedPlan.degree.degree}
</h3>

<p>
    <strong>College:</strong>
    ${savedPlan.degree.college}
</p>

<p>
    <strong>Books Required:</strong>
    ${savedPlan.degree.books}
</p>

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

    <p>
        Book:
        ______________________________
    </p>

    <p>
        Status: Not Completed
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
function saveStudentName(){

    const name = document.getElementById("studentName").value;

    localStorage.setItem("studentName", name);

    location.reload();

}
