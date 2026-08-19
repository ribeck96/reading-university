const application = document.getElementById("application");


const params = new URLSearchParams(window.location.search);

const degreeID = params.get("id");


const degree = degrees.find(function(item){

    return item.id === degreeID;

});


if(degree){

    application.innerHTML = `

        <h2>
            Applying for:
        </h2>

        <h1>
            ${degree.level} of ${degree.type}
        </h1>

        <h2>
            ${degree.degree}
        </h2>

        <p>
            ${degree.description}
        </p>


        <h3>
            Choose your course plan:
        </h3>


<button onclick="showSuggested()">
    Suggested Course Sequence
</button>


<button onclick="showCustom()">
    Create My Own Sequence
</button>
    `;

}
else{

    application.innerHTML = `
        <h2>
            No degree selected.
        </h2>
    `;

}
function showSuggested(){

    application.innerHTML = `

        <h2>Suggested Course Sequence</h2>

        <p>
            Customize your degree plan before finalizing.
        </p>

    `;

degree.suggested.forEach(function(categoryKey){

    const category = courseCategories[categoryKey];

    application.innerHTML += `

        <div class="courseRequirement">

            <h3>${category.name}</h3>

           <select class="courseChoice" data-requirement="${category.name}">
    ${category.options.map(function(option){
        return `
            <option>${option}</option>
        `;
    }).join("")}
</select>

            <br><br>

        </div>

    `;

});


    application.innerHTML += `

        <button onclick="finalizePlan()">
            Finalize Degree Plan
        </button>

    `;

}



function showCustom(){

    application.innerHTML = `

        <h2>Create Your Course Sequence</h2>

        <p>
            Create your own course requirements for this degree.
        </p>

        <label>
            Course 1:
            <input type="text" class="customCourse">
        </label>

        <br><br>

        <label>
            Course 2:
            <input type="text" class="customCourse">
        </label>

        <br><br>

        <label>
            Course 3:
            <input type="text" class="customCourse">
        </label>

        <br><br>

        <label>
            Course 4:
            <input type="text" class="customCourse">
        </label>

        <br><br>

        <button onclick="finalizeCustomPlan()">
            Finalize Degree Plan
        </button>

    `;

}
function finalizePlan(){

    let selections = [];

    document.querySelectorAll(".courseChoice").forEach(function(choice){

        selections.push({
            requirement: choice.dataset.requirement,
            bookCategory: choice.value
        });

    });

    localStorage.setItem(
        "degreePlan",
        JSON.stringify({
            degree: degree,
            selections: selections
        })
    );

    window.location.href = "plan.html";

}


function finalizeCustomPlan(){

    let selections = [];

    document.querySelectorAll(".customCourse").forEach(function(course, index){

        if(course.value.trim() !== ""){

            selections.push({
                requirement: "Custom Course " + (index + 1),
                bookCategory: course.value.trim()
            });

        }

    });

    localStorage.setItem(
        "degreePlan",
        JSON.stringify({
            degree: degree,
            selections: selections
        })
    );

    window.location.href = "plan.html";

}
    localStorage.setItem(
        "degreePlan",
        JSON.stringify({
            degree: degree,
            selections: selections
        })
    );


    window.location.href = "plan.html";

}

    localStorage.setItem(
    "degreePlan",
    JSON.stringify({
        degree: degree,
        selections: selections
    })
);

window.location.href = "plan.html";

}
