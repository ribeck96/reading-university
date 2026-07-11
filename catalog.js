
const catalog = document.getElementById("catalog");


showLevels();


function showLevels(){

    catalog.innerHTML = `
        <h3>Select Degree Level</h3>

        <button onclick="showColleges('Associate')">
            Associate
        </button>

        <button onclick="showColleges('Bachelor')">
            Bachelor
        </button>

        <button onclick="showColleges('Master')">
            Master
        </button>

        <button onclick="showColleges('Doctorate')">
            Doctorate
        </button>
    `;

}


function showColleges(level){

    let availableColleges = [];

    degrees.forEach(function(degree){

        if(degree.level === level){

            if(!availableColleges.includes(degree.college)){
                availableColleges.push(degree.college);
            }

        }

    });


    catalog.innerHTML = `
        <h3>${level} Degree Programs</h3>
        <p>Select a college:</p>

        <button onclick="showLevels()">
            ← Back to Degree Levels
        </button>
    `;


    availableColleges.forEach(function(college){

        catalog.innerHTML += `
            <button onclick="showDegrees('${level}', '${college}')">
                ${college}
            </button>
        `;

    });

}
function showDegrees(level, college){

    let matchingDegrees = [];

    degrees.forEach(function(degree){

        if(
            degree.level === level &&
            degree.college === college
        ){

            matchingDegrees.push(degree);

        }

    });


    catalog.innerHTML = `
        <h3>${level} Degrees</h3>
        <h4>${college}</h4>

        <button onclick="showColleges('${level}')">
            Back to Colleges
        </button>
    `;


    matchingDegrees.forEach(function(degree){

        catalog.innerHTML += `

        <div class="degreeCard">

            <h2>
                ${degree.level} of ${degree.type}
            </h2>

            <h3>
                ${degree.degree}
            </h3>

            <p>
                ${degree.description}
            </p>

            <p>
                <strong>
                ${degree.books}
                </strong>
                books required
            </p>

            <button>
                View Degree
            </button>

        </div>

        `;

    });

}
window.showLevels = showLevels;
window.showColleges = showColleges;
window.showDegrees = showDegrees;
