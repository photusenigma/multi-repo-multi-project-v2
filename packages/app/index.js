const str1 =
  'this is the app project from repo: https://github.com/photusenigma/multi-repo-multi-project-v2-app';
const srt2 = () => {
  return 'it will should be worked on and managed as a subtree of https://github.com/photusenigma/multi-repo-multi-project-v2';
};

console.log(str1);
console.log(srt2);


const names = ['React', 'Angular', 'GraphQL (Apollo)', 'Redux-Saga'];
const count = 100;
const myFun = (name1, name2, count) => `Wrote ${count} lines with ${name1}, and ${Math.floor(count/2)} with ${name2}`
const getRandomNumFromZeroTo = (num) => Math.floor(Math.random() * num)

let myCount = count;
let namesLen = names.length;
while(myCount){
  const name1 = names[getRandomNumFromZeroTo(namesLen)]
  const name2 = names[getRandomNumFromZeroTo(namesLen)]
  const myNames = [name1, name2];
  console.log(myFun(...myNames, myCount));
  myCount--;
}