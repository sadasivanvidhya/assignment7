const countWords = (sentence) => {
    return sentence.trim().split(/\s+/).length;//removes the spaces ,and split the sentence and find the length
};

let sentence = "Hello world, how are you?";//the given sentence
console.log(`Number of words:`, countWords(sentence));//function calling