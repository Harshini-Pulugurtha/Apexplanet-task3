//quiz.js
const quizData = [
  {
    question: "Where is the Taj Mahal located?",
    options: ["Agra", "Delhi", "Jaipur"],
    answer: "Agra"
  },
  {
    question: "The Eiffel Tower is in which city?",
    options: ["London", "Paris", "Rome"],
    answer: "Paris"
  },
  {
    question: "Which country is home to the Great Wall?",
    options: ["China", "Mongolia", "Japan"],
    answer: "China"
  },
  {
    question: "The Statue of Liberty is located in which city?",
    options: ["New York", "Los Angeles", "Chicago"],
    answer: "New York"
  },
  {
    question: "Machu Picchu is a famous monument in which country?",
    options: ["Peru", "Brazil", "Mexico"],
    answer: "Peru"
  },
  {
    question: "The Colosseum is located in which city?",
    options: ["Rome", "Athens", "Florence"],
    answer: "Rome"
  },
  {
    question: "Christ the Redeemer statue is in which country?",
    options: ["Argentina", "Brazil", "Portugal"],
    answer: "Brazil"
  },
  {
    question: "Stonehenge is located in which country?",
    options: ["Scotland", "Ireland", "England"],
    answer: "England"
  },
  {
    question: "Petra, the rock-cut city, is in which country?",
    options: ["Jordan", "Egypt", "Greece"],
    answer: "Jordan"
  },
  {
    question: "The Leaning Tower of Pisa is located in which city?",
    options: ["Pisa", "Florence", "Venice"],
    answer: "Pisa"
  }
];

const quizContainer = document.getElementById("quizContainer");
const submitBtn = document.getElementById("submitQuiz");
const quizResult = document.getElementById("quizResult");

function loadQuiz() {
  quizContainer.innerHTML = ""; // Clear previous quiz if any
  quizData.forEach((q, i) => {
    const div = document.createElement("div");
    div.innerHTML = `<p><strong>${i + 1}. ${q.question}</strong></p>`;
    q.options.forEach(opt => {
      div.innerHTML += `
        <label>
          <input type="radio" name="q${i}" value="${opt}"> ${opt}
        </label><br>`;
    });
    quizContainer.appendChild(div);
  });
}

submitBtn.addEventListener("click", () => {
  let score = 0;
  quizData.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && selected.value === q.answer) {
      score++;
    }
  });
  quizResult.innerHTML = `<h3>You scored ${score} / ${quizData.length}</h3>`;
});

loadQuiz();
