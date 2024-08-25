const fs = require('fs').promises;
const { PATH_DB } = require('../constants/contacts');

async function removeAllContacts() {
    try {
        await fs.writeFile(PATH_DB, JSON.stringify([], null, 2));
        console.log('All contacts have been removed.');
    } catch (error) {
        console.error('Error removing all contacts:', error);
    }
}

removeAllContacts();
