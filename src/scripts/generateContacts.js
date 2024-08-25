import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';

const generateContacts = async (count) => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);

    for (let i = 0; i < count; i++) {
      contacts.push(createFakeContact());
    }

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log(`${count} contacts added successfully!`);
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

generateContacts(5);
