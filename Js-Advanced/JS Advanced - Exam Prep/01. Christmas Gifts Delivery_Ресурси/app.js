function solution() {
  //   let taskInpt = document.querySelector(
  //     "body > div > section:nth-child(1) > div > input[type=text]"
  //   );
  //   let ulList = document.querySelector("body > div > section:nth-child(2) > ul");

  //   document.querySelector("body").addEventListener("click", addItem);
  //   function addItem(ev) {
  //     event.preventDefault(); //prevent refreshing
  //     // let newListItem = createEl("li", "", "gift");
  //     if (taskInpt.value == "") {
  //       return;
  //       //  return alert("Input must be filled");
  //       // throw Error("Input must be filled");
  //     } else if (ev.target.textContent === "ADD") {
  //       newListItem = taskInpt.value;
  //       newElement = createEl("li", taskInpt.value, "gift");
  //       let newBsend = createEl("button", "Send", "sendButton");
  //       newElement.appendChild(newBsend);
  //       let newBdiscart = createEl("button", "Discart", "discardButton");
  //       newElement.appendChild(newBdiscart);
  //       ulList.appendChild(newElement);
  //       taskInpt.value = "";
  //     }
  //   }
  // }

  const [gifts, sent, discarded] = document.querySelectorAll("section ul");
  const input = document.querySelector("input");
  document.querySelector("button").addEventListener("click", addItem);
  //add to list from input
  function addItem(ev) {
    const name = input.value;
    input.value = "";
    const element = createEl("li", name, "gift");
    const sendBtn = createEl("button", "Send", "sendButton");
    const discartBtn = createEl("button", "Discart", "discardButton");
    element.appendChild(sendBtn);
    element.appendChild(discartBtn);
    gifts.appendChild(element);

    sendBtn.addEventListener("click", () => sendGift(name, element));
    discartBtn.addEventListener("click", () => discardGift(name, element));
    sortGifts();
  }

  //send gifts
  function sendGift(name, gift) {
    gift.remove();
    const element = createEl("li", name, "gift");
    sent.appendChild(element);
  }
  //discart gifts
  function discardGift(name, gift) {
    gift.remove();
    const element = createEl("li", name, "gift");
    discarded.appendChild(element);
  }
  //sort gifts
  function sortGifts() {
    Array.from(gifts.children)
      .sort((a, b) =>
        a.childNodes[0].textContent.localeCompare(b.childNodes[0].textContent)
      )
      .forEach((g) => gifts.appendChild(g));
  }

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
