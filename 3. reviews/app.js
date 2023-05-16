// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const btns = document.querySelectorAll("#btns-container > button");
const randomBtn = document.getElementById("btnRandom");

const personImg = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

let reviewIndex = 0;
setReview(reviewIndex);

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    //console.log(e.currentTarget.classList)
    if (e.currentTarget.classList.value === "prev-btn") {
      if (reviewIndex === 0) {
        reviewIndex = reviews.length - 1;
        setReview(reviewIndex);
      } else {
        reviewIndex -= 1;
        setReview(reviewIndex);
      }
    }

    if (e.currentTarget.classList.value === "next-btn") {
      if (reviewIndex === reviews.length -1) {
        reviewIndex = 0;
        setReview(reviewIndex);
      } else {
        reviewIndex += 1;
        setReview(reviewIndex);
      }
    }
  });
});

randomBtn.addEventListener("click", function(){
  const randomIndex = getRandomNumber();
  setReview(randomIndex)
})

function setReview(reviewIndex) {
  person = reviews[reviewIndex];
  personImg.src = person.img;
  author.textContent = person.name;
  job.textContent = person.job;
  info.textContent = person.text;
}

function getRandomNumber(){
  return Math.floor(Math.random() * ((reviews.length-1) - 0 + 1) + 0);
}
