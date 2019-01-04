'use strict';

/*
Создайте объект notebook для работы с массивом заметок. Каждая заметка это объект следующего формата:

// Shema
id: string | integer
title: string
body: string
priority: integer [0-2]


id - уникальный идентификатор объекта, чтобы можно было найти его в коллекции. Пока что для удобства используем числа, потом перейдем к строкам.

title - заголовок заметки, строка.

body - текст заметки, строка.

priority - значение приоритета, от 0 (низкий) до 2 (высокий).

Вот карта приоритетов, используйте ее.
*/

const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

// Напишите код для работы методов данного объекта.

const notebook = {
  notes: [],
  getNotes() {
    return this.notes;
  },
  findNoteById(id) {
    for (const note of this.notes) {
      if (note.id === id) {
        return note;
      }
    }
  },
  saveNote(note) {
    this.notes.push(note);
  },
  deleteNote(id) {
    for (let i = 0; i < this.notes.length; i += 1) {
      const note = this.notes[i];

      if (note.id === id) {
        return this.notes.splice(i, 1);
      }
    }
  },
  updateNoteContent(id, updatedContent) {
    const note = this.findNoteById(id);
    const updateNoteContent = Object.keys(updatedContent);

    for (const key of updateNoteContent) {
      note[key] = updatedContent[key];
    }

    // Вариант с Деструкторизацией!

    // const { fields, value } = updatedContent;
    // const note = this.findNoteById(id);

    // return note[fields] = value;
  },
  updateNotePriority(id, priority) {
    const note = this.findNoteById(id);

    if (!note) {
      return;
    }
    note.priority = priority;
  },
  filterNotes(query) {
    const filteredNote = [];
    for (let i = 0; i < this.notes.length; i += 1) {
      const { title, body } = this.notes[i];
      const note = `${title} ${body}`;
      const resultNote = note.toLowerCase().includes(query.toLowerCase());

      if (resultNote) {
        filteredNote.push(this.notes[i]);
      }
    }
    return filteredNote;
  },
  filterByPriority(priority) {
    const filteredNotesOnPriority = [];
    const notes = this.getNotes();

    for (const note of notes) {
      if (note.priority === priority) {
        filteredNotesOnPriority.push(note);
      }
    }
    return filteredNotesOnPriority;
  },
};

// Далее идет код для проверки работоспособности объекта, вставьте его в конец скрипта. Ваша реализация методов объекта notebook должна проходить этот тест.

/*
  Добавляю 4 заметки и смотрю что получилось
*/
notebook.saveNote({
  id: 1,
  title: 'JavaScript essentials',
  body:
    'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
  priority: PRIORITY_TYPES.HIGH,
});

notebook.saveNote({
  id: 2,
  title: 'Refresh HTML and CSS',
  body:
    'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
  priority: PRIORITY_TYPES.NORMAL,
});

notebook.saveNote({
  id: 3,
  title: 'Get comfy with Frontend frameworks',
  body:
    'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
  priority: PRIORITY_TYPES.NORMAL,
});

notebook.saveNote({
  id: 4,
  title: 'Winter clothes',
  body:
    "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
  priority: PRIORITY_TYPES.LOW,
});

console.log('Все текущие заметки: ', notebook.getNotes());

/*
  Ищу заметку по ID
*/
console.log(notebook.findNoteById(1));

/*
  Зима уже близко, пора поднять приоритет на покупку одежды
*/
notebook.updateNotePriority(4, PRIORITY_TYPES.NORMAL);
// Смотрю что у меня в заметках
console.log(
  'Заметки после обновления приоритета для id 4: ',
  notebook.getNotes(),
);

/*
  Решил что фреймворки отложу немного, понижаю приоритет
*/
notebook.updateNotePriority(3, PRIORITY_TYPES.LOW);
console.log(
  'Заметки после обновления приоритета для id 3: ',
  notebook.getNotes(),
);

/*
  Решил отфильтровать заметки по слову html
*/
console.log(
  'Отфильтровали заметки по ключевому слову "html": ',
  notebook.filterNotes('html'),
);

/*
  Решил отфильтровать заметки по слову javascript
*/
console.log(
  'Отфильтровали заметки по ключевому слову "javascript": ',
  notebook.filterNotes('javascript'),
);

/*
  Обновим контент заметки с id 3
*/
notebook.updateNoteContent(3, { title: 'Get comfy with React.js or Vue.js' });
console.log(
  'Заметки после обновления контента заметки с id 3: ',
  notebook.getNotes(),
);

/*
Вариант для деструкторизации
*/
// notebook.updateNoteContent(3, { fields: 'title', value: 'Get comfy with React.js or Vue.js' });
// console.log(
//   'Заметки после обновления контента заметки с id 3: ',
//   notebook.getNotes(),
// );

/*
  Обновим контент заметки с id 4
*/
// notebook.updateNoteContent(4, { fields: 'body', value: 'In winter it is very cold. This is not very good, I love the heat' });
// console.log(
//   'Заметки после обновления контента заметки с id 3: ',
//   notebook.getNotes(),
// );

/*
  Повторил HTML и CSS, удаляю запись c id 2
  */
notebook.deleteNote(2);
console.log('Заметки после удаления с id 2: ', notebook.getNotes());

/*
  Выберает все заметки с указаным приоритетом
*/
console.log(
  'Отфильтрованые заметки по приоритету: ',
  notebook.filterByPriority(PRIORITY_TYPES.HIGH),
);
