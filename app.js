import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico"; 

window.onload = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  const generateDomains = () => {
    let domains = [];
    pronoun.forEach((p) => {
      adj.forEach((a) => {
        noun.forEach((n) => {
          domains.push(`${p}${a}${n}.com`);
        });
      });
    });
    return domains;
  };

  let domainList = generateDomains();
  document.querySelector("#domainList").textContent = domainList;
  //console.log(domainList);
};
