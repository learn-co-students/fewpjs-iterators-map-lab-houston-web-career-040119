const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
   return tutorials.map((string) => {
     let string_arr = string.split(' ')
     for (var i = 0; i < string_arr.length; i++) {
       string_arr[i] = capitalize(string_arr[i])
     }
     return string_arr.join(" ")
   })
}

function capitalize(word){
  return word.charAt(0).toUpperCase()+word.slice(1)
}
