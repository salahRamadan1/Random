let rules = [
  {
    author: "― Oscar Wilde",
    description: "Be yourself; everyone else is already taken.",
  },
  {
    author: "― Marilyn Monroe",
    description:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  },
  {
    author: "― Albert Einstein",
    description:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  },
  {
    author: "― Frank Zappa",
    description: "So many books, so little time",
  },
  {
    author: "― Marcus Tullius Cicero",
    description: "A room without books is like a body without a soul",
  },
  {
    author: "― Dr. Seuss",
    description:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
  },
];
let myBtn = document.getElementById("mtBtn")
myBtn.addEventListener("click" ,()=>{
let random = Math.floor(Math.random() * rules.length)
    document.getElementById("h1").innerHTML = rules[random].author;
    document.getElementById("par").innerHTML = rules[random].description
})