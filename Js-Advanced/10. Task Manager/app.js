function solve() {
  let taskInpt = document.querySelector("#task");
  let taskDescr = document.querySelector("#description");
  let taskDate = document.querySelector("#date");

  document.querySelector("body > main").addEventListener("click", addItem);
  function addItem(ev) {
    event.preventDefault(); //prevent refreshing

    if (ev.target.textContent === "Add") {
      // if empty inputs do nothing
      if (
        taskInpt.value == "" ||
        taskDescr.value == "" ||
        taskDate.value == ""
      ) {
        return;
        //  return alert("Input must be filled");
        // throw Error("Input must be filled");
      } else {
        // create h3, text cont -sdf.., classname btn TEMPLATE
        // let newHfromFunction= createElements("h3", "sdfsdf", "btn");
        let newArticle = createEl("article", "", "");
        let newH = createEl("h3", taskInpt.value, "");
        newArticle.appendChild(newH);
        taskInpt.value = "";

        let newPdescr = createEl("p", `Description: ${taskDescr.value}`, "");
        newArticle.appendChild(newPdescr);
        taskDescr.value = "";

        let newPdate = createEl("p", `Due date: ${taskDate.value}`, "");
        newArticle.appendChild(newPdate);
        taskDate.value = "";

        let newDiv = createEl("div", "", "flex");

        let newBdelete = createEl("button", "Delete", "red");
        newDiv.appendChild(newBdelete);

        let newBstart = createEl("button", "Start", "green");
        newDiv.appendChild(newBstart);

        newArticle.appendChild(newDiv);

        document
          .querySelector(
            "body > main > div > section:nth-child(2) > div:nth-child(2)"
          )
          .appendChild(newArticle);
      }
    } else if (ev.target.textContent === "Delete") {
      console.log("sdfsfds");
      let targetArticle = ev.target.parentNode.parentNode;
      targetArticle.parentNode.removeChild(targetArticle);
    } else if (ev.target.textContent === "Start") {
      let targetForProgress = ev.target.parentNode.parentNode;
      document.querySelector("#in-progress").appendChild(targetForProgress);
      ev.target.textContent = "Finish";
    } else if (ev.target.textContent === "Finish") {
      let targetFinish = ev.target.parentNode.parentNode;
      document.querySelector("#compl").appendChild(targetFinish);
      let divFordel = ev.target.parentNode;

      // remove buttons
      divFordel.parentNode.removeChild(divFordel);
    }
  }

  //in progress

  // create element function
  function createEl(type, text, atribute) {
    let el = document.createElement(type);
    if (text) {
      el.textContent = text;
    }
    if (atribute) {
      el.className = atribute;
    }
    return el;
  }
  //end create element
}
