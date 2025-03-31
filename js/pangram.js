const isPangram = (sentence) => {
    let givenSentence = sentence.toLowerCase().replace(/[^a-z]/g, "");//convert the sentence to lowercase letters and remove the spaces
    let alphabets = "abcdefghijklmnopqrstuvwxyz";
    for (let letter of givenSentence) {
        if (!alphabets.includes(letter)) {//check if not includes the alphabets
            return "It is not a pangram";
        }
    }
    return "It is a pangram";
   
    
}



let sentence = "The quick brown fox jumps over the lazy dog";//given sentence
console.log(isPangram(sentence));//function call