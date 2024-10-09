// User
const userName = document.getElementById("name");

// Notes
const note1 = document.getElementById("note1");
const note2 = document.getElementById("note2");
const note3 = document.getElementById("note3");

// Buttons
const btnCalculate = document.getElementById("btn-calculate");

// Result
const resultElement = document.getElementById("result");

btnCalculate.addEventListener("click", calculateNote);

function calculateNote(event) {
    event.preventDefault();

    let user = userName.value;
    let note1Value = parseFloat(note1.value);
    let note2Value = parseFloat(note2.value);
    let note3Value = parseFloat(note3.value);

    let finalResult

    if (note1Value>1 && note1Value<= 5 && note2Value>1 && note2Value<=5 && note3Value>1 && note3Value<=5) {
        finalResult = (note1Value * 0.3) + (note2Value * 0.3) + (note3Value * 0.4);
    }
    else{
        resultElement.textContent = "Por favor ingrese notas en el rango de 1-5";
        return;
    }

    if(finalResult>=3.5 && finalResult<=4.5){
        resultElement.textContent =  `Sr(a)(e)8i ${user}, su nota final es: ${finalResult} gana la materia`;
    }
    else if(finalResult<3.5){
        resultElement.textContent = `Sr(a)(e)8i ${user}, su nota final es: ${finalResult} pierde la materia`;
    }

    else if(finalResult>=4.5){
        resultElement.textContent = `Sr(a)(e)8i ${user}, su nota final es: ${finalResult} su nota es sobresaliente gana la materia `;
    }
    
}
