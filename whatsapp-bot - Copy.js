const qrcode = require('qrcode-terminal');

const myGroupName = "Wow Group 2024";
const contactName = "​B𝕽🇪​🇳​𝕯🇪𝔫𝕶";

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
console.log('Conected WhatsApp!');
});

client.on('message', message => {
if(message.body === '!addcontacts') {
client.getChats().then((chats) => {
const myGroup = chats.find((chat) => chat.name === myGroupName);
client.getContacts().then((contacts) => {
const contactToAdd = contacts.find(
(contact) => contact.name === contactName
);
if (contactToAdd) {
myGroup.addParticipants([contactToAdd.id._serialized])
.then(() => {
console.log('Done!')
});
} else {
console.log("+234 9137179451");
}
});
});
}
});

client.initialize();
