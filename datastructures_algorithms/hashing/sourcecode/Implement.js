const hashChains = new HashTableChains();
const hashLinear = new HashTableLinearP();
var keys = [];
var values = [];

function makeid() {

	var text = "";

	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	possible += "abcdefghijklmnopqrstuvwxyz0123456789";

	for (var i = 0; i < 10; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}

	return text;

}

for (var i = 0; i < 10; i++) {
	keys.push(makeid());
	values.push(Math.round(i));
}

console.time("Chains");
	for (var i = 0;i < keys.length;i++) {
		hashChains.put(keys[i], values[i]);
	}
console.timeEnd("Chains");

console.time("LinearP");
	for (var i = 0;i < keys.length;i++) {
		hashLinear.put(keys[i], values[i]);
	}
console.timeEnd("LinearP");
