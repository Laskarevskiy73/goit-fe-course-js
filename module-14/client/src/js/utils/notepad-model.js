import { PRIORITY_TYPES, PRIORITIES } from './constants';
import * as api from '../services/api';

export default class Notepad {
  constructor(notes = []) {
    this._notes = notes;
  }

  get notes() {
    try {
      const notes = api.getNotes();
      this._notes = notes;

      return this._notes;
    } catch (error) {
      throw error;
    }
  }

  findNoteById(id) {
    for (const note of this._notes) {
      if (note.id === id) {
        return note;
      }
    }
  }

  saveNote(title, body) {
    try {
      const newNote = {
        title,
        body,
        priority: Notepad.getPriorityName(),
      };
      const note = api.saveNote(newNote);
      note.then((response) => {
        this._notes.push(response);
      });

      return note;
    } catch (error) {
      throw error;
    }
  }

  deleteNote(id) {
    try {
      const deleteItems = api.deleteNote(id);
      this._notes = this._notes.filter(item => item.id !== id);

      return deleteItems;
    } catch (error) {
      throw error;
    }
  }

  updateNoteContent(id, updatedContent) {
    const note = this.findNoteById(id);
    const updateNoteContent = Object.keys(updatedContent);

    for (const key of updateNoteContent) {
      note[key] = updatedContent[key];
    }
  }

  updateNotePriorityIncrement(id) {
    const note = this.findNoteById(id);
    if (note.priority !== PRIORITIES[2].id) {
      note.priority = note.priority += 1;

      api.patchNote(id, note.priority);

      return note;
    }
  }

  updateNotePriorityDicrement(id) {
    const note = this.findNoteById(id);

    if (note.priority !== PRIORITIES[0].id) {
      note.priority = note.priority -= 1;

      api.patchNote(id, note.priority);
      return note;
    }
  }

  filterNotesByQuery(query) {
    const filteredNote = [];
    for (let i = 0; i < this._notes.length; i += 1) {
      const { title, body } = this._notes[i];
      const note = `${title} ${body}`;
      const resultNote = note.toLowerCase().includes(query.toLowerCase());

      if (resultNote) {
        filteredNote.push(this._notes[i]);
      }
    }
    return filteredNote;
  }

  filterNotesByPriority(priority) {
    const filteredNotesOnPriority = [];
    const { notes } = this;

    for (const note of notes) {
      if (note.priority === priority) {
        filteredNotesOnPriority.push(note);
      }
    }
    return filteredNotesOnPriority;
  }

  static getPriorityName(priorityId) {
    const valuesPriorityType = Object.values(PRIORITY_TYPES);

    if (valuesPriorityType.includes(priorityId)) {
      return PRIORITIES[priorityId].name;
    }

    return PRIORITY_TYPES.LOW;
  }
}
