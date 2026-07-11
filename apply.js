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


        <button>
            Suggested Course Sequence
        </button>


        <button>
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
