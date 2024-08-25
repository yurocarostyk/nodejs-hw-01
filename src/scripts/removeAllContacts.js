import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

const removeAllContacts = async () => {
  try {
  
    await fs.writeFile(PATH_DB, JSON.stringify([]));
    console.log('All contacts removed successfully.');
  } catch (error) {
    console.error('Error removing all contacts:', error);
  }
};

removeAllContacts();
