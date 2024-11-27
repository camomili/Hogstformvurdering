document.getElementById("assessmentForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const slope = document.getElementById("slope").value;
    const surface = document.getElementById("surface").value;
    const peatForest = document.getElementById("peatForest").value;
    const hogstClass = document.getElementById("hogstClass").value;
    const treeSpecies = document.getElementById("treeSpecies").value;
    const treeSuitability = document.getElementById("treeSuitability").value;

    let evaluation = "Egnethet vurdering: ";

    if (slope === "egnet" || slope === "sannsynligvis_egnet") {
        evaluation += "Egnet.";
    } else if (slope === "ikke_egnet" || surface === "svært_dårlig" || hogstClass === "ikke_egnet") {
        evaluation += "Ikke egnet.";
    } else if (peatForest === "yes") {
        evaluation += "Lukket hogst anbefalt.";
    } else {
        evaluation += "Egnet eller sannsynligvis egnet.";
    }

    document.getElementById("evaluation").textContent = evaluation;
    document.getElementById("result").style.display = "block";
});