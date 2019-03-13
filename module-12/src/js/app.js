import MicroModal from 'micromodal';
import Notyf from 'notyf';
import 'notyf/dist/notyf.min.css';
import storage from './utils/storage';
import { NOTE_ACTIONS } from './utils/constants';
import Notepad from './utils/notepad-model';
import { refs, renderNoteList, addListItem } from './utils/view';

// Plugins
//=============================================================================
const notyf = new Notyf({
  delay: 2500,
});
//=============================================================================

// LocalStorage
//=============================================================================
const getNotesFromLocalStorage = storage.load('notes');
const getNotes = getNotesFromLocalStorage ? getNotesFromLocalStorage : [];
//=============================================================================

const item = new Notepad(getNotes);
// console.log(item.notes);
renderNoteList(refs.list, item._notes);

// Handlers
//=============================================================================
const handleEditorSubmit = event => {
  event.preventDefault(); // Действия браузера по умолчанию

  const [title, body] = event.currentTarget.elements;
  const titleValue = title.value;
  const bodyValue = body.value;

  const checkForEmptinessForm =
    titleValue.length === 0 || bodyValue.length === 0;

  if (checkForEmptinessForm) {
    return notyf.alert('Необходимо заполнить все поля!');
  }

  const savedItem = item.saveNote(titleValue, bodyValue);
  savedItem.then(savedNotes => addListItem(refs.list, savedNotes));

  event.currentTarget.reset();
  MicroModal.close('note-editor-modal');
  notyf.confirm('Заметка успешно добавлена!');

  // LocalStorage
  //=============================================================================
  storage.save('notes', item.notes);
  //=============================================================================

  console.log(item._notes);
};

const handleFilterNotes = event => {
  const filterNotes = item.filterNotesByQuery(event.target.value);
  filterNotes.then(noteFilter => renderNoteList(refs.list, noteFilter));
};

const handleDeleteNote = ({ target }) => {
  if (target.nodeName !== 'I') {
    return;
  }

  const parentButton = target.closest('.action');
  const actions = parentButton.dataset.action;

  switch (actions) {
    case NOTE_ACTIONS.DELETE:
      removeListItem(target);
      break;
  }
};

const handleOpenModale = () => {
  MicroModal.show('note-editor-modal');
};

const removeListItem = element => {
  const parentListItem = element.closest('.note-list__item');
  const currentId = parentListItem.dataset.id;

  const deleteNote = item.deleteNote(currentId);
  deleteNote.then(noteDelete => parentListItem.remove(noteDelete));
  notyf.confirm('Заметка успешно удалена!');

  // LocalStorage
  //=============================================================================
  storage.save('notes', item.notes);
  //=============================================================================

  console.log(item._notes);
};
//=============================================================================

// Listeners
//=============================================================================
refs.editor.addEventListener('submit', handleEditorSubmit);
refs.filter.addEventListener('input', handleFilterNotes);
refs.list.addEventListener('click', handleDeleteNote);
refs.openEditorModale.addEventListener('click', handleOpenModale);
//=============================================================================
