/** @format */

// Using the Dictionary class, write a program that stores the number of occurrences of words in a text. Your program should display each word in a text just once as well as the number of times the word occurs in the text. For example, given the text “the brown fox jumped over the blue fox,” the output will be:  the: 2
// brown: 1
// fox: 2
// jumped: 1
// over: 1
// blue: 1
// Rewrite exercise 2 so that it displays the words in sorted order.

function Dictionary() {
	this.dataStore = {};
	this.add = add;
	this.find = find;
	this.count = count;
	this.countOccurences = countOccurences;
	this.countWords = countWords;
	this.remove = remove;
	this.display = display;
	this.displayAll = displayAll;
}

function add(key, value) {
	this.dataStore[key] = value;
}
function find(key) {
	return this.dataStore[key];
}

function count() {
	let n = 0;
	for (let key in this.dataStore) {
		n++;
	}
	return n;
}

function countOccurences(key, value) {
	return key.split(value).length - 1;
}

function countWords(keys) {
	if (keys.length === 0) {
		return {};
	}

	const outPut = {};
	const keysArray = keys.split("");
	for (let i = 0; i < keysArray.length; i++) {
		const word = keysArray[i];

		if (outPut[word] === undefined) {
			outPut[word] = 1;
		} else {
			outPut[word]++;
		}
	}
	return outPut;
}

function remove() {
	delete this.dataStore[key];
}

function display() {
	for (let key in this.dataStore) {
		console.log(`${key}${this.dataStore[key]}`);
	}
}

function displayAll() {
	const keys = Object.keys(this.dataStore);
	keys.sort();
	for (let i = 0; i < keys.length; i++) {
		console.log(`${keys[i]}${this.dataStore[keys[i]]}`);
	}
}

const pbook = new Dictionary();
//const text = new Dictionary();

//text.add("i was the i and i am still the i was");
const text = "i was the i and i am still the i was";
const outPut = "the brown fox jumped over the blue fox";

pbook.add("etoo", "123");
pbook.add("messi", "456");
pbook.add("deco", "789");
pbook.add("ronaldinho", "213");
pbook.add("iniesta", "007");
pbook.add("xavi", "107");
pbook.add("guly", "009");
pbook.add("valdez", "457");
pbook.add("puyol", "654");

pbook.displayAll();
console.log(`There are ${pbook.count()} records of counts`);
console.log(
	`The occurence of this letter is ${countOccurences(text, "i")}   times `
);

console.log(countWords(outPut));
console.log(countWords(text));
