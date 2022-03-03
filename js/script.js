//even number calculator


var number = 23;

if(number%2 == 0){
    alert('The number is even')
}else{
    alert('The number is odd')
};


//Grader
var score= parseInt(prompt('Enter your score: '));

if (score>80 && score <=100 ){
    alert('Grade A')
}else if( score<=79 && score >60){
    alert('Grade B')
}else if(score <=59 && score >40){
    alert('Grade C')
}else if(score <=39 && score >30){
    alert('Grade D')
}else{
    alert('Grade E')
}


