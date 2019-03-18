import MicroModal from 'micromodal';
import Notyf from 'notyf';
import 'notyf/dist/notyf.min.css';
import { NOTE_ACTIONS } from './utils/constants';
import Notepad from './utils/notepad-model';
import { refs, renderNoteList, addListItem } from './utils/view';
import * as api from './services/api';

// Plugins
//=============================================================================
const notyf = new Notyf({
  delay: 2500,
});
//=============================================================================

const item = new Notepad();
// console.log(item.notes);

api.getNotes().then(note => {
  renderNoteList(refs.list, note);
});

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

  savedItem
    .then(savedNotes => {
      addListItem(refs.list, savedNotes);
      notyf.confirm('Заметка успешно добавлена!');
    })
    .catch(error => {
      notyf.alert(error);
    });

  event.currentTarget.reset();
  MicroModal.close('note-editor-modal');

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
  deleteNote
    .then(noteDelete => {
      parentListItem.remove(noteDelete);
      notyf.confirm('Заметка успешно удалена!');
    })
    .catch(error => {
      notyf.alert(error);
    });

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
