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

const titleCased = () => {//function goes here??
    return tutorials.map(function(t){ //iterate over the array with this function
    t = t.split(' '); // t is each element, and it is split into another array, each word called t
    for( let i = 0; i < t.length ; i++){// loop to iterate over every word and capitalize every word
      t[i] = t[i].charAt(0).toUpperCase() + t[i].slice(1);
    }
  return t.join(' ')

});
}
