function pigLatin(element) {
  const sequence = ["a", "e", "i", "o", "u"];
  let wordArray = element.split("");

    if (sequence.includes(wordArray[0])) {
      return wordArray.join("") + "way"; 
    }
    return i;
  }