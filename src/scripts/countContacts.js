const fs = require('fs').promises;
const { PATH_DB } = require('../constants/contacts');

async function countContacts() {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data);
        console.log(`There are ${contacts.length} contacts in the database.`);
        return contacts.length;
    } catch (error) {
        console.error('Error counting contacts:', error);
    }
}

countContacts();
