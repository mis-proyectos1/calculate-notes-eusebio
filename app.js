// User
const userName = document.getElementById("name");

// Notes
const note1 = document.getElementById("note1");
const note2 = document.getElementById("note2");
const note3 = document.getElementById("note3");

// Buttons
const btnCalculate = document.getElementById("btn-calculate");
const btnNotePredict = document.getElementById("btn-notePredict")

// Result
const resultElement = document.getElementById("result");

// Events
btnCalculate.addEventListener("click", calculateNote);
btnNotePredict.addEventListener("click", predictNote)

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
        resultElement.style.color = "red"
        return;
    }

    if(finalResult>=3.5 && finalResult<=4.5){
        resultElement.textContent =  `Sr(a)(e)(i) ${user}, su nota final es: ${finalResult} gana la materia`;
        resultElement.style.color = "orange"
    }
    else if(finalResult<3.5){
        resultElement.textContent = `Sr(a)(e)(i) ${user}, su nota final es: ${finalResult} pierde la materia`;
        resultElement.style.color = "black"
    }

    else if(finalResult>=4.5){
        resultElement.textContent = `Sr(a)(e)(i) ${user}, su nota final es: ${finalResult} su nota es sobresaliente gana la materia `;
        resultElement.style.color = " green"
    }
    
}

function predictNote(event) {
    event.preventDefault(); 

    let note1Value = parseFloat(note1.value);
    let note2Value = parseFloat(note2.value);
    

    if(note1Value <=5 && note1Value >=1 && note2Value <=5 && note2Value >=1){
        let notePredict = (3.5-(note1Value * 0.3 + note2Value * 0.3))/0.4
        if(notePredict>5){
            resultElement.textContent = `Sr(s)(e)(i) ${userName.value}, no puede ganar la materia ya que su ultima nota debe ser ${notePredict}`
            resultElement.style.color = "red"
        }
        else{
            resultElement.textContent = `Sr(a(e)(i) ${userName.value},la nota minima que debe optener es: ${notePredict}`
            note3.value = notePredict;
            resultElement.style.color = "blue"
        }

    }

}
