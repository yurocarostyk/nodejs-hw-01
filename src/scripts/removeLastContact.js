const fs = require('fs').promises;
const { PATH_DB } = require('../constants/contacts');

async function removeLastContact() {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data);

        if (contacts.length === 0) {
            console.log('No contacts to remove.');
            return;
        }

        contacts.pop();
        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
        console.log('The last contact has been removed.');
    } catch (error) {
        console.error('Error removing last contact:', error);
    }
}

removeLastContact();
