let generatedProof = "";
let generatedSecret = "";

async function generateProof() {

    const age = document.getElementById("age").value;
    const minimumAge = document.getElementById("minimumAge").value;

    if (!age) {
        alert("Please enter your age");
        return;
    }

    const response = await fetch(
        "http://localhost:3000/generate-proof",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                age: age,
                minimumAge: minimumAge
            })
        }
    );

    const data = await response.json();

    generatedProof = data.proof;
    generatedSecret = data.secret;

    document.getElementById("proofBox").innerHTML =
        "<b>Cryptographic Proof Generated:</b><br>" +
        generatedProof;
}

async function verifyProof() {

    const age = document.getElementById("age").value;
    const minimumAge = document.getElementById("minimumAge").value;

    if (!generatedProof) {
        alert("Generate the proof first");
        return;
    }

    const response = await fetch(
        "http://localhost:3000/verify",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                proof: generatedProof,
                age: age,
                minimumAge: minimumAge,
                secret: generatedSecret
            })
        }
    );

    const data = await response.json();

    document.getElementById("result").innerHTML =
        data.result;
}