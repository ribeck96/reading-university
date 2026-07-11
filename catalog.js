const catalog = document.getElementById("catalog");

degreeCatalog.forEach(function(degree) {

    const card = document.createElement("div");

    card.className = "degreeCard";

    card.innerHTML = `
        <h3>${degree.level} of ${degree.type}</h3>

        <h2>${degree.degree}</h2>

        <p><strong>${degree.college}</strong></p>

        <p>${degree.description}</p>

        <p><strong>${degree.books}</strong> Books Required</p>

        <button>View Degree</button>
    `;

    catalog.appendChild(card);

});
