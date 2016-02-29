function alphabetSoup(string){
	return string.split('').sort().join('');
}

console.log(alphabetSoup("hello"))

function vowelCount(string){
	var reg = /[aeiouAEIOU]/;
	var isVowel = reg.test.bind(reg);
	return string.split('').filter(isVowel).length;
}

console.log(vowelCount("All cows eat grass"))


// ************BONUS************
function coinDeterminer(number){

}