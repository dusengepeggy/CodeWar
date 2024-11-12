function topThreeWords(text) {
    var replacedText = text.replace(/[^a-zA-Z ']/g, '');
var words = replacedText.toLowerCase().split(" ")

const wordCount = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
  }, {});
delete wordCount['']
delete wordCount['\'']


const sortedArray = Object.entries(wordCount).sort((a, b) => b[1] - a[1]);


const top3Words = sortedArray.slice(0, 3).map(item => item[0]);

return top3Words

  
}