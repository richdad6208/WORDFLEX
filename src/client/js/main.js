import "../css/style.css";

const questionList = document.querySelectorAll(".question__item");
const questionSubList = document.querySelectorAll(".question__sub-wrapper");
questionList.forEach((item, i) => {
  item.addEventListener("click", () => {
    questionSubList.forEach((subItem, index) => {
      if (i !== index) subItem.classList.remove("showing");
    });
    questionSubList[i].classList.toggle("showing");
  });
});
