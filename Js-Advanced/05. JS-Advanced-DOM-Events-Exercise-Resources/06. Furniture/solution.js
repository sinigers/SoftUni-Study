function solve() {
  const [input, output] = [...document.querySelectorAll("textarea")];
  const table = document.querySelector("table.table tbody");
  const [genarateBtn, buyBtn] = [...document.querySelectorAll("button")];

  const furniture = [];
  

  genarateBtn.addEventListener("click", () => {
    const furnitureArray = JSON.parse(input.value.trim()); //parsva JSON formatiran text, zarededn v input text field
    table.innerHTML = "";
    furnitureArray.forEach(f => {
      const item = createRow(f);
      furniture.push(item);
      table.appendChild(item.element);
    });
  });

  buyBtn.addEventListener("click", () => {
    furniture.forEach(f => console.log(f.getValues().name, f.isChecked()));
   
   console.log(element);
    
  });

  function createRow(data) {
    const img = e("img");
    img.src = data.img;

    const check = e("input");
    check.type = "checkbox";

    //create table
    const element = e(
      "tr",
      e("td", img),
      e("td", e("p", data.name)),
      e("td", e("p", data.price)),
      e("td", e("p", data.decFactor)),
      e("td", check)
    );

    return {
      element,
      isChecked,
      getValues,
    };
  }

  function isChecked() {
    return check.checked;
  }

  function getValues() {
    return data;
    
  }

  //create element type string (ul, div ....) ,
  function e(type, ...content) {
    const result = document.createElement(type);

    content.forEach((e) => {
      if (typeof e == "string") {
        const node = document.createTextNode(e);
        result.appendChild(node);
      } else {
        result.appendChild(e);
      }
    });
    return result;
  }
}
