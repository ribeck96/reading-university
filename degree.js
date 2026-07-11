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
            ${degree.suggested.map(function(course){
                return `<li>${course}</li>`;
            }).join("")}
        </ul>

    `;

}
else{

    details.innerHTML = `
        <h2>Degree not found.</h2>
    `;

}
