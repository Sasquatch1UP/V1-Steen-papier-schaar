// Selecteer HTML elementen
const humanOutput = document.querySelector("#human");
const computerOutput = document.querySelector("#computer");
const resultOutput = document.querySelector("#result");

// Buttons
const buttonSteen = document.querySelector("#steen");
const buttonPapier = document.querySelector("#papier");
const buttonSchaar = document.querySelector("#schaar");

// Mogelijke keuzes
const keuzes = ["Steen", "Papier", "Schaar"];

let humanChoice = "";

function bepaalUitkomst(human, computer) {
  if (human === computer) {
    return "Gelijkspel!";
  } else if (
    (human === "Steen" && computer === "Schaar") ||
    (human === "Papier" && computer === "Steen") ||
    (human === "Schaar" && computer === "Papier")
  ) {
    return "Jij wint!";
  } else {
    return "Computer wint!";
  }
}

function speelGame(keuze) {
  humanChoice = keuze;
  const randomIndex = Math.floor(Math.random() * 3);
  const computerChoice = keuzes[randomIndex];

  // Update de HTML
  humanOutput.innerHTML = humanChoice;
  computerOutput.innerHTML = computerChoice;
  resultOutput.innerHTML = bepaalUitkomst(humanChoice, computerChoice);
}

// Event listeners
buttonSteen.addEventListener("click", () => speelGame("Steen"));
buttonPapier.addEventListener("click", () => speelGame("Papier"));
buttonSchaar.addEventListener("click", () => speelGame("Schaar"));
