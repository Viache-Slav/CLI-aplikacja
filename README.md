﻿# CLI-aplikacja

- To install this repository you need to clone it to your hardware: https://github.com/Viache-Slav/CLI-aplikacja.git
- Perform dependency installation using the command: `npm install`

# list of commands for working with the application

-  Retrieving a list of contacts: `node index.js --action list` [![Скриншот](Screenshot_4.png)](Screenshot_4.png)
- Adding Contact: `node index.js --action add --name "enter a name" --email "enter your e-mail" --phone "enter your phone number"` [![Скриншот ](Screenshot_1.png)](Screenshot_1.png)
- Retrieving a contact by ID: `node index.js --action get --id "enter contact_ID"` [![Скриншот](Screenshot_3.png)](Screenshot_3.png)
- Delete contact by ID: `node index.js --action remove --id "enter ID"` [![Скриншот](Screenshot_2.png)](Screenshot_2.png)
