import { PRIORITY_TYPES } from './constants';
import * as api from '../services/api';

export default class Notepad {
  constructor(notes = []) {
    this._notes = notes;
  }
  get notes() {
    return api.getNotes().then(notes => {
      this._notes = notes;

      return this._notes;
    });
  }
  findNoteById(id) {
    for (const note of this._notes) {
      if (note.id === id) {
        return note;
      }
    }
  }
  saveNote(title, body) {
    return new Promise(resolve => {
      setTimeout(() => {
        const newItem = {
          title: title,
          body: body,
          priority: Notepad.getPriorityName(),
        };

        resolve(newItem);
      }, 200);
    })
      .then(note => {
        return api.saveNote(note);
      })
      .then(note => {
        this._notes.push(note);

        return note;
      });
  }
  deleteNote(id) {
    return new Promise(resolve => {
      setTimeout(() => {
        this._notes = this._notes.filter(item => item.id !== id);

        resolve(this._notes);
      }, 200);
    })
      .then(() => {
        this._notes = this._notes.filter(item => item.id !== id);

        return id;
      })
      .then(id => {
        api.deleteNote(id);
      });
  }
  updateNoteContent(id, updatedContent) {
    const note = this.findNoteById(id);
    const updateNoteContent = Object.keys(updatedContent);

    for (const key of updateNoteContent) {
      note[key] = updatedContent[key];
    }
  }
  updateNotePriority(id, priority) {
    const note = this.findNoteById(id);

    if (!note) {
      return;
    }
    note.priority = priority;
  }
  filterNotesByQuery(query) {
    return new Promise(resolve => {
      setTimeout(() => {
        const filteredNote = [];
        for (let i = 0; i < this._notes.length; i += 1) {
          const { title, body } = this._notes[i];
          const note = `${title} ${body}`;
          const resultNote = note.toLowerCase().includes(query.toLowerCase());
          if (resultNote) {
            filteredNote.push(this._notes[i]);
          }

          resolve(filteredNote);
        }
      }, 200);
    });
  }
  filterNotesByPriority(priority) {
    const filteredNotesOnPriority = [];
    const notes = this.notes;

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
      return Notepad.PRIORITIES[priorityId].name;
    }

    return PRIORITY_TYPES.LOW;
  }
}
