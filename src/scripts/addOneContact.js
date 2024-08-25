const fs = require('fs').promises;
const { createFakeContact } = require('../utils/createFakeContact');
const { PATH_DB } = require('../constants/contacts');

async function addOneContact() {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data);

        const newContact = createFakeContact();
        contacts.push(newContact);

        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
        console.log('Successfully added one new contact to the database.');
    } catch (error) {
        console.error('Error adding one contact:', error);
    }
}

addOneContact();
