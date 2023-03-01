'use strict'

let currentUserName = prompt('Enter name of goods', 'here')
alert(currentUserName);

let user = {};
user.name = 'John';
user.surname = 'Smith';
user[currentUserName] = prompt(`Enter count of ${currentUserName}`, '0');

delete user.name;