import Notepad from '../notepad-model-for-testing/notepad-model';
import { PRIORITY_TYPES } from '../src/js/utils/constants';

const initialNotes = [
  {
    id: 1,
    title: 'JavaScript essentials',
    body:
      'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: PRIORITY_TYPES.HIGH,
  },
  {
    id: 2,
    title: 'Refresh HTML and CSS',
    body:
      'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: PRIORITY_TYPES.NORMAL,
  },
];

const savedItem = {
  id: 3,
  title: 'New Skill',
  body: 'Gain new skill',
  priority: PRIORITY_TYPES.HIGH,
};

describe('testing method notepad models', () => {
  it('initialized notes', () => {
    const item = new Notepad(initialNotes);

    expect(item._notes).toEqual(initialNotes);
  });
  it('whether item is added', () => {
    const item = new Notepad(initialNotes);
    item.saveNote(savedItem);

    expect(item._notes.length).toBe(3);
  });
  it('does item delete', () => {
    const item = new Notepad(initialNotes);
    item.deleteNote(1);

    expect(item._notes.length).toBe(2);
  });
  it('does item find by id', () => {
    const item = new Notepad(initialNotes);
    const findItem = item.findNoteById(3);

    expect(findItem.id).toBe(3);
  });
  test('testing defined method saveNote', () => {
    const item = new Notepad(initialNotes);

    expect(item.saveNote()).not.toBeDefined();
  });
  test('is the element in an array', () => {
    const item = new Notepad(initialNotes);

    expect(item._notes).toContain(savedItem);
  });
});
