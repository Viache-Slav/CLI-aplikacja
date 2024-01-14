import { promises as fs } from "fs";
import path from "path";

const contactsPath = path.join(process.cwd(), "/db/contacts.json");

function generateID() {
    return Math.random().toString(36);
}

function listContacts() {
    return fs.readFile(contactsPath, "utf-8")
      .then((data) => {
        const contacts = JSON.parse(data);
        console.table(contacts);
      })
      .catch((error) => {
        console.error("Error reading contacts:", error);
      });
  }

function getContactById(contactId) {
    return fs.readFile(contactsPath, "utf-8")
        .then((data) => {
        const contacts = JSON.parse(data);
        const contact = contacts.find((contact) => contact.id === contactId);
        if (contact) {
            console.table([contact]);
            return;
        }
        return console.log("Contact not found");
        })
        .catch((error) => {
        console.error("Error reading contacts:", error);
    });
}

function removeContact(contactId) {
    return fs.readFile(contactsPath, "utf-8")
        .then((data) => {
        let contacts = JSON.parse(data);
        contacts = contacts.filter((contact) => !contact.id.startsWith(contactId));
        console.log("Contact removed successfully");
        return fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
        })
        .catch((error) => {
        console.error("Error reading or writing contacts:", error);
    });
}

function addContact(name, email, phone) {
    return fs.readFile(contactsPath, "utf-8").then((data) => {
        let contacts = JSON.parse(data);
        const newContact = {
            id: generateID(),
            name,
            email,
            phone,
        };

        const checkPhone = contacts.find((contact) => contact.phone === phone);
        if (checkPhone) {
            return console.log("Contact with this phone number already exists");
        }

        contacts.push(newContact);
        console.log("Contact added successfully");
        return fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
        })
        .catch((error) => {
        console.error("Error reading or writing contacts:", error);
    });
}

export { listContacts, getContactById, removeContact, addContact };
