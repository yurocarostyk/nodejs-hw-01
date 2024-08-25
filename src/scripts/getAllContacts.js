const fs = require('fs').promises;
const { PATH_DB } = require('../constants/contacts');

async function getAllContacts() {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data);
        console.log(contacts);
        return contacts;
    } catch (error) {
        console.error('Error getting contacts:', error);
    }
}

getAllContacts();
