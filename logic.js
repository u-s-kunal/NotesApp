
console.log("Welcome to notes app. This is app.js");
showNotes();



// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function () {
  
    let addTxt = document.getElementById("addTxt");
    let addTitle =document.getElementById("addTitle")
  let notes = localStorage.getItem("notes");
  

 
  if (addTitle.value == "") {
    alert("ENTER YOUR BOOKS TITLE...!!!!");
    return false;
  } else {
    notesObj = JSON.parse(notes);
  };
  

  if (notes == null) {
    notesObj = [];
  } else {

    notesObj = JSON.parse(notes);


  };
  

  let myObj = {
    title: addTitle.value,
    text: addTxt.value

  };
  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";
  console.log(notesObj);

  showNotes();
});

// Function to show elements from localStorage
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function(Element, index) {
      html += `
      <div class="added">
      <input id="${index} "onClick="deleteNote(this.id)" class="btn-x deleteBtn" value="X"></input>
          <h2 class="card-title">${Element.title}</h2>
          <p class="cardTxt">${Element.text}</p>
       
      </div>
            `;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML =`<b>Nothing to show! Use "Add a Note" section above to add notes.</b>`;
  }
}

// Function to delete a note
function deleteNote(index) {
//   console.log("I am deleting", index);

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}




