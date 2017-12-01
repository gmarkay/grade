var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

let gradeArr = [];
let dupCount = {};

let highest = Math.max.apply(Math,scores);
let lowest = Math.min.apply(Math, scores);
for(let i=0; i<scores.length; i++){
  let score = scores[i];

  if (score > 90){
    grade = 'A'
  }else if(score>80){
    grade = 'B'
  }else if(score > 70){
    grade = 'C'
  }else if(score > 60){
    grade = 'D'
  }else{
    grade = 'F'
  }
  gradeArr.push(grade);

}

console.log(`The highest grade was ${highest}`);
console.log(`The lowest grade was  ${lowest}`);


  for(let i=0; i<gradeArr.length; i++){
      dupCount[gradeArr[i]] ? dupCount[gradeArr[i]]  ++ :  dupCount[gradeArr[i]] = 1 ;
  }
  
for (const grade in dupCount) {
  console.log(`  ${dupCount[grade]} students got a(n)${grade}`);
}

  
