const noteText = document.getElementById("noteText");
const addNote = document.getElementById("addNote");
const notesContainer = document.getElementById("notesContainer");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

// Save to localStorage
function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

// Display Notes
function displayNotes() {
  notesContainer.innerHTML = "";

  notes.forEach((note) => {
    const div = document.createElement("div");
    div.className = "note";

    div.innerHTML = `
      <p id="text-${note.id}">${note.text}</p>

      <textarea id="input-${note.id}" style="display:none;">
${note.text}
      </textarea>

      <button onclick="editNote(${note.id})">Edit</button>
      <button id="save-${note.id}" onclick="saveEdit(${note.id})" style="display:none;">
        Save
      </button>
      <button onclick="deleteNote(${note.id})">Delete</button>
    `;

    notesContainer.appendChild(div);
  });
}

// Add Note
addNote.addEventListener("click", () => {
  if (noteText.value.trim() === "") return;

  notes.push({
    id: Date.now(),
    text: noteText.value,
  });

  noteText.value = "";
  saveNotes();
  displayNotes();
});

// Delete Note
function deleteNote(id) {
  notes = notes.filter((note) => note.id !== id);
  saveNotes();
  displayNotes();
}

// Edit Note
function editNote(id) {
  document.getElementById(`text-${id}`).style.display = "none";
  document.getElementById(`input-${id}`).style.display = "block";
  document.getElementById(`save-${id}`).style.display = "inline-block";
}

// Save Updated Note
function saveEdit(id) {
  const newText = document.getElementById(`input-${id}`).value;

  notes = notes.map((note) =>
    note.id === id ? { ...note, text: newText } : note
  );

  saveNotes();
  displayNotes();
}

// Initial Load
displayNotes();
