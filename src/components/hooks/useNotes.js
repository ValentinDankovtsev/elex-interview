import { reactive, ref } from "vue";

export function useNotes() {
  const note = reactive({
    title: '',
    content: ''
  });


  let notes = ref(JSON.parse(localStorage.getItem("notes")) || []);

  function addNote() {
    if (note.title === "") return;

    notes.value.push({
      id: Date.now(),
      title: note.title,
      content: note.content
    });

    note.title = "";
    note.content = "";
    saveData();
  }


  function removeNote(id) {
    notes.value.splice(id, 1);

    saveData();
  }

  function saveData() {
    const storageData = JSON.stringify(notes.value);
    localStorage.setItem("notes", storageData);
  }


  return {
    note,
    notes,
    addNote,
    removeNote,
  };
}