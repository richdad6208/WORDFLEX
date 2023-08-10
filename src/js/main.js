const questionList = document.querySelectorAll(".question__item");
const questionSubList = document.querySelectorAll(".question__sub-wrapper");
questionList.forEach((item, i) => {
  item.addEventListener("click", () => {
    questionSubList.forEach((subItem) => {
      return console.log(subItem);
    });
  });
});

console.log(questionSubList);
