const fs = require('fs').promises;
const { createFakeContact } = require('../utils/createFakeContact');
const { PATH_DB } = require('../constants/contacts');

async function generateContacts(count) {
    try {
        // Читання існуючих контактів з файлу
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data);

        // Генерація нових контактів
        const newContacts = [];
        for (let i = 0; i < count; i++) {
            newContacts.push(createFakeContact());
        }

        // Додавання нових контактів до існуючого масиву
        const updatedContacts = [...contacts, ...newContacts];

        // Запис оновленого масиву контактів у файл
        await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
        console.log(`Successfully added ${count} new contacts to the database.`);
    } catch (error) {
        console.error('Error generating contacts:', error);
    }
}

// Виклик функції з кількістю контактів, яку потрібно згенерувати
generateContacts(5);
