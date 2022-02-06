function pigLatin(dnaSequence, pattern) {
  for (let i = 0; i < dnaSequence.length; i +=1) {
    if (dnaSequence[i] === pattern) {
      return true;
    };
    console.log("Looped!");
  }
  return false;
}