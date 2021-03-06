import MicroModal from 'micromodal';
import Notyf from 'notyf';
import 'notyf/dist/notyf.min.css';
import { NOTE_ACTIONS } from './utils/constants';
import Notepad from './utils/notepad-model';
import initialNotes from '../assets/notes.json';
import { refs, renderNoteList, addListItem } from './utils/view';

// Plugins
//=============================================================================
const notyf = new Notyf({
  delay: 2500,
});
//=============================================================================

const item = new Notepad(initialNotes);
console.log(item.notes);

renderNoteList(refs.list, item.notes);

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

  addListItem(refs.list, savedItem);
  event.currentTarget.reset();
  MicroModal.close('note-editor-modal');
  notyf.confirm('Заметка успешно добавлена!');
  console.log(item._notes);
};

const handleFilterNotes = event => {
  const filterNotes = item.filterNotesByQuery(event.target.value);

  renderNoteList(refs.list, filterNotes);
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

  item.deleteNote(currentId);
  parentListItem.remove();
  notyf.confirm('Заметка успешно удалена!');
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
