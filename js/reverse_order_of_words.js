const reverseWords = (sentence) => {
    return sentence.trim().split(/\s+/).reverse().join(" ");//trim the sentence , split the words ,reverse the words and join the words
};

let sentence = "JavaScript is fun";// the given sentence
console.log(`Reversed sentence is : "${reverseWords(sentence)}"`);//function calling