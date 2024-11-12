// src/index.js
import { createModal } from './modal';

const NexusNotes = {
  init: (isAuthorized, apiUrl) => {
    createModal(isAuthorized, apiUrl);
  }
};

export default NexusNotes;
