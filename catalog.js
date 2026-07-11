
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
    `;


    availableColleges.forEach(function(college){

        catalog.innerHTML += `
            <button onclick="showDegrees('${level}', '${college}')">
                ${college}
            </button>
        `;

    });

}
