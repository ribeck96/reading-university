const details = document.getElementById("degreeDetails");


const params = new URLSearchParams(window.location.search);

const degreeID = params.get("id");


const degree = degrees.find(function(item){

    return item.id === degreeID;

});


if(degree){

    details.innerHTML = `

        <h2>${degree.level} of ${degree.type}</h2>

        <h1>${degree.degree}</h1>

        <h3>${degree.college}</h3>

        <p>${degree.description}</p>

        <p>
            <strong>
            Books Required:
            </strong>
            ${degree.books}
        </p>


        <h3>
            Suggested Course Sequence
        </h3>

        <ul>
    ${degree.suggested.map(function(requirement){
        return `<li>${requirement.requirement}</li>`;
    }).join("")}
        </ul>

<a href="apply.html?id=${degree.id}">
    <button>
        Apply for this Degree
    </button>
</a>

    `;

}
else{

    details.innerHTML = `
        <h2>Degree not found.</h2>
    `;

}
