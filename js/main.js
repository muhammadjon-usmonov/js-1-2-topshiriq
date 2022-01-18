
// longestWord

function longWord(str){

    var string = str.split(" ");
    var longestWord = 0;
    var word=null;

    for(var i = 0; i < string.length; i++){

        if(string[i].length > longestWord){

            longestWord=string[i].length;
            word=string[i];
        }
    }
    
    return word;
    
}
console.log(longWord("salom dunyo qalesan olam man informatikaning"));





// numbers summa



function number(){
    var summa =0;

    var sonlar=[1,2,3,4,5,6,7,8,9,10];

    for (var i=0; i<sonlar.length; i++){
        summa=summa+sonlar[i];
    }

    return summa;
}
console.log(number());