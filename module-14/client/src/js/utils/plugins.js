import { Notyf } from 'notyf';
import { refs } from './view';

// Plugins
//= ============================================================================

// Notyf

export const notyf = new Notyf({
  delay: 2500,
  types: [
    {
      type: 'add',
      backgroundColor: '#229954',
    },
    {
      type: 'info',
      backgroundColor: '#B03A2E',
    },
    {
      type: 'delete',
      backgroundColor: '#2E4053',
    },
    {
      type: 'update-priority',
      backgroundColor: '#1F618D',
    },
    {
      type: 'priority-undefined',
      backgroundColor: '#D68910',
    },
  ],
});
//= ============================================================================
