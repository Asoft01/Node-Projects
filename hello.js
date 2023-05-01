// function findMeaning(){
//     return 42; 
// }

// console.log(findMeaning());

//////////////////////////////////////////////////////////////////////////////////////
//write a simple node function to find meaning of a word 

// const findMeaning = (word) => {
//   const dictionary = {
//     'happy': 'feeling or showing pleasure or contentment',
//     'sad': 'feeling or showing sorrow; unhappy',
//     'love': 'an intense feeling of deep affection'
//   };
//   return dictionary[word];
// };

// console.log(findMeaning('happy')); // feeling or showing pleasure or contentment
////////////////////////////////////////////////////////////////////////////////////////

// const mission = 'learn'; 
// if (mission === 'learn'){
//     console.log('Time to write some Node code!');
// }else{
//     // console.log('Is '+ mission + ' really more fun?');
//     console.log(`Is ${mission} really more fun?`);
// }

console.log('hello');
const mission = process.argv[2]; 
if(mission === 'learn'){
    console.log('Time to write some code');
}else {
    console.log(`Is ${mission} really more fun?`);
}