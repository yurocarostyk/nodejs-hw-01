import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';

const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);

    const newContact = createFakeContact();
    contacts.push(newContact);

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log('New contact added successfully!');
  } catch (error) {
    console.error('Error adding new contact:', error);
  }
};

addOneContact();
