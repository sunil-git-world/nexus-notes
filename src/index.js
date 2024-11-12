import { createModal } from './modal.js';
import './styles.css';

export default function NexusNotes({ loggedIn }) {
  if (loggedIn) {
    createModal();
  }
}