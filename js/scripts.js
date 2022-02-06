// For words beginning with a vowel, add "way" to the end. For Pig Latin, vowels are "a," "e," "i," "o," and "u." Don't treat "y" as a vowel. Examples: "away" becomes "awayway" and "okay" becomes "okayway."

// For words beginning with one or more consonants, move all of the first consecutive consonants to the end and add "ay". Examples: "code" becomes "odecay" and "move" becomes "ovemay."



function pigLatin(element) {
  let firstConsonants = [];
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let wordArray = element.split("");

    if (vowels.includes(wordArray[0])) {
      return wordArray.join("") + "way"; 
    }
    return i;
  }