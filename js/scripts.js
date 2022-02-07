// For words beginning with a vowel, add "way" to the end. For Pig Latin, vowels are "a," "e," "i," "o," and "u." Don't treat "y" as a vowel. Examples: "away" becomes "awayway" and "okay" becomes "okayway."

// For words beginning with one or more consonants, move all of the first consecutive consonants to the end and add "ay". Examples: "code" becomes "odecay" and "move" becomes "ovemay."

// If the first consonants include "qu", move the "q" and the "u." Don't forget about words like "squeal" where "qu" doesn't come first! Examples: "quick" becomes "ickquay" while "squeal" becomes "quealsay."

function pigLatin(element) {
  let firstConsonants = [];
  const vowels = ["a", "e", "i", "o", "u",];
  let wordArray = element.toLowerCase().split("");

    if (vowels.includes(wordArray[0])) {
      return wordArray.join("") + "way"; 
    }
    for (i in wordArray) {
      if (!vowels.includes(wordArray[i])) {
        firstConsonants.push(wordArray[i]);
      } else {
        word =
          wordArray.splice(i).join("") + firstConsonants.join("") + "ay";
          break;
      }
    }
    return word;
  }