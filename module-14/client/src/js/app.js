import MicroModal from 'micromodal';
import { notyf } from './utils/plugins';
import 'notyf/notyf.min.css';
import { NOTE_ACTIONS } from './utils/constants';
import Notepad from './utils/notepad-model';
import { refs, renderNoteList, addListItem } from './utils/view';
import * as api from './services/api';

const item = new Notepad();

api
  .getNotes()
  .then(note => {
    renderNoteList(refs.list, note);
    item._notes = note;
  })
  .catch(error => {
    notyf.error(`${error}`);
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
    return notyf.open({
      type: 'info',
      message: 'All fields must be filled in!',
    });
  }

  try {
    const savedItem = item.saveNote(titleValue, bodyValue);

    savedItem.then(savedNotes => {
      addListItem(refs.list, savedNotes);
      notyf.open({
        type: 'add',
        message: 'Note successfully added!',
      });
    });
  } catch (error) {
    notyf.error(`${error}`);
  }

  event.currentTarget.reset();
  MicroModal.close('note-editor-modal');
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

  try {
    const deleteNote = item.deleteNote(currentId);

    deleteNote.then(noteDelete => {
      parentListItem.remove(noteDelete);

      notyf.open({
        type: 'delete',
        message: 'The note is successfully deleted!',
      });
    });
  } catch (error) {
    notyf.error(`${error}`);
  }
};

const handleUpdatePriorityIncrement = ({ target }) => {
  const action = target.parentNode.dataset.action;

  if (NOTE_ACTIONS.INCREASE_PRIORITY !== action) {
    return;
  }

  const parentListItem = target.closest('.note-list__item');
  const parentListItemId = parentListItem.dataset.id;

  try {
    const note = item.updateNotePriorityIncrement(parentListItemId);

    if (note === undefined) {
      notyf.open({
        type: 'priority-undefined',
        message: 'The highest priority!',
      });
      return;
    }

    renderNoteList(refs.list, item._notes);
    notyf.open({
      type: 'update-priority',
      message: 'Priority increased!',
    });
  } catch (error) {
    notyf.error(`${error}`);
  }
};
const handleUpdatePriorityDicrement = ({ target }) => {
  const action = target.parentNode.dataset.action;

  if (NOTE_ACTIONS.DECREASE_PRIORITY !== action) {
    return;
  }

  const parentListItem = target.closest('.note-list__item');
  const parentListItemId = parentListItem.dataset.id;

  try {
    const note = item.updateNotePriorityDicrement(parentListItemId);

    if (note === undefined) {
      notyf.open({
        type: 'priority-undefined',
        message: 'The lowest priority!',
      });
      return;
    }

    renderNoteList(refs.list, item._notes);
    notyf.open({
      type: 'update-priority',
      message: 'Priority is down!',
    });
  } catch (error) {
    notyf.error(`${error}`);
  }
};
//=============================================================================

// Listeners
//=============================================================================
refs.editor.addEventListener('submit', handleEditorSubmit);
refs.filter.addEventListener('input', handleFilterNotes);
refs.list.addEventListener('click', handleDeleteNote);
refs.openEditorModale.addEventListener('click', handleOpenModale);
refs.list.addEventListener('click', handleUpdatePriorityIncrement);
refs.list.addEventListener('click', handleUpdatePriorityDicrement);
//=============================================================================
