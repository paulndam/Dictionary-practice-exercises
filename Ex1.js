/** @format */

// Write a program that takes a set of names and phone numbers from a text file and stores them in a Dictionary object. Include in your program the ability to display one phone number, display all phone numbers, add new phone numbers, remove phone numbers, and clear out the list of numbers.

/** @format */
// Sorting through a Dictionary

function Dictionary() {
	this.dataStore = {};
	this.add = add;
	this.find = find;
	this.remove = remove;
	this.display = display;
	this.count = count;
	this.clear = clear;
	this.displayAll = displayAll;
}

function add(key, value) {
	this.dataStore[key] = value;
}

function find(key) {
	return this.dataStore[key];
}

function remove(key) {
	delete this.dataStore[key];
}
function display() {
	for (let key in this.dataStore) {
		console.log(`${key} ${this.dataStore[key]}`);
	}
}

// function to know how many entries are in a dict

function count() {
	let number = 0;
	for (let key in this.dataStore) {
		number++;
	}
	return number;
}

function clear() {
	for (let key in this.dataStore) {
		delete this.dataStore[key];
	}
}

// Sorting through a Dictionary

function displayAll() {
	const keys = Object.keys(this.dataStore);
	keys.sort();

	for (let i = 0; i < keys.length; i++) {
		console.log(`${keys[i]} ${this.dataStore[keys[i]]}`);
	}
}

const pbook = new Dictionary();

pbook.add("etoo", "123");
pbook.add("mia", "456");
pbook.add("sandra", "789");
pbook.add("jennifer", "213");
pbook.add("funkeh", "007");
console.log(`etoo's extension ${pbook.find("etoo")}`);
console.log(`number of entries is ${pbook.count()}`);
pbook.remove("mia");
pbook.display();
pbook.displayAll();
pbook.clear();
console.log(`Number of entries ${pbook.count()}`);
