function deleteByEmail() {
  // get texta from inputa
  let email = document.querySelector('input[name="email"]').value;
  // select all table cells from last column
  let rows = Array.from(document.querySelectorAll("tbody tr"));
  let deleted = false;
  // interate over cells
  for (let row of rows) {
    if (row.children[1].textContent == email) {
      row.remove(); // izrriva reda ako ima suvpadenie
      deleted=true;
      document.getElementById("result").textContent = "Deleted.";
    }
  }
  if(deleted != true){
    document.getElementById("result").textContent = "Not found.";
  }
}
