import { Notyf } from 'notyf';

// Plugins
//=============================================================================

// Notyf

export const notyf = new Notyf({
  delay: 2500,
  types: [
    {
      type: 'info',
      backgroundColor: '#f1ae13',
    },
    {
      type: 'delete',
      backgroundColor: '#68aaf1',
    },
  ],
});
//=============================================================================
