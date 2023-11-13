console.log("Please Enter Number between 0 to 7 and press enter")
function printPattern2(x,y) { 
    for (let i = 1; i <= x; i++) { 
        let line = ""; 
        for (let j = 1; j <= y; j++) { 
            if(j==i){
                line += "#";  
            }else{
               line += "*";   
               
            }
           
        } 
        console.log(line); 
        
    } 
    
} 
  

function printPattern1(x,y) { 
    for (let i = 1; i <= x; i++) { 
        let line = ""; 
        for (let j = 1; j <= y; j++) { 
            if(j==1){
                line += "#";  
            }else{
               line += "*";   
            }
           
        } 
        console.log(line); 
    } 
} 

function printPattern3(x,y) { 
     for (let i = 1; i <= x; i++) { 
        let line = ""; 
        for (let j = 1; j <= y; j++) { 
            if(j==3 || j==4 || j==5){
                line += "#";  
            }else{
               line += "*";   
               
            }
           
        } 
        console.log(line); 
        
    } 
    
}


function printPattern4(x,y) { 
     for (let i = 1; i <= x; i++) { 
        let line = ""; 
        for (let j = 1; j <= y; j++) { 
            if(i==1 && j==3){
                line += "#";  
            }else if(i==2 && j==3){
             line += "#"; 
             }
             else if(i==3){
             line += "#"; 
             }
             else if(i==4 && j==3){
             line += "#"; 
             }
             else if(i==5 && j==3){
             line += "#"; 
             }
             else if(i==6 && j==3){
             line += "#"; 
             }
            else{
               line += "*";   
               
            }
           
        } 
        console.log(line); 
        
    } 
    
}


function printPattern5(x,y) { 
     for (let i = 1; i <= x; i++) { 
        let line = ""; 
        for (let j = 1; j <= y; j++) { 
            if(i==1 && (j==5 || j==6)){
                line += "#";  
            }else if(i==2 && j==5){
             line += "#"; 
             }
             else if(i==3 &&(j==4 || j==5) ){
             line += "#"; 
             }
             else if(i==4 &&(j==3 || j==5) ){
             line += "#"; 
             }
              else if(i==5 &&(j==2 || j==5) ){
             line += "#"; 
             }
              else if(i==6 &&(j==1 || j==5) ){
             line += "#"; 
             }
            else{
               line += "*";   
               
            }
           
        } 
        console.log(line); 
        
    } 

    
}

function printPattern6(x,y){
    for (let i = 1; i <= x; i++) { 
        let line = ""; 
        for (let j = 1; j <= y; j++) { 
            if(i==1 && (j==1 || j==6)){
                line += "#";  
            }else if(i==2 && (j==2 || j==5)){
             line += "#"; 
             }
             else if(i==3 &&(j==3 || j==4) ){
             line += "#"; 
             }
             else if(i==4 &&(j==3 || j==4) ){
             line += "#"; 
             }
              else if(i==5 &&(j==2 || j==5) ){
             line += "#"; 
             }
              else if(i==6 &&(j==1 || j==6) ){
             line += "#"; 
             }
            else{
               line += "*";   
               
            }
           
        } 
        console.log(line); 
        
    } 

}
function printPattern7(x,y){
   for (let i = 1; i <= x; i++) { 
        let line = ""; 
        for (let j = 1; j <= y; j++) { 
            if(j%2==0){
                line += "#";  
            }
            else{
               line += "*";   
               
            }
           
        } 
        console.log(line); 
        
    } 


}


function printPattern8(x,y){
  for (let i = 1; i <= x; i++) { 
        let line = ""; 
        for (let j = 1; j <= y; j++) { 
            if(i!=1 && i!==6 ){
               if(i==2 && j!==1 && j!==8){
                   line += "#";  
               }
               else if((i==3 || i==4)  && (j==2 ||j==7)){
                   line += "#";  
               }
               else if((i==4 || i==4)  && (j==2 ||j==7)){
                   line += "#";  
               }
               else if(i==5 && j!=1 && j!=8){
                   line += "#";  
               }
               else{
                   line += "*";   
               }
              
            }
            else{
               line += "*";   
               
            }
           
        } 
        console.log(line); 
        
    } 
  
}




const printPattern=(TYPE)=>{
    switch(TYPE){
        case 0:{
            printPattern1(6,8)
            break;
        }
        case 1:{
            printPattern2(6,8)
            break;
        } 
        case 2:{
            printPattern3(6,8)
            break;
        }
         case 3:{
            printPattern4(6,8)
            break;
        }
         case 4:{
            printPattern5(6,8)
            break;
        }
        case 5:{
            printPattern6(6,8)
            break;
        }
         case 6:{
            printPattern7(6,8)
            break;
        }
         
         case 7:{
            printPattern8(6,8)
            break;
        }
         
       default :{
            console.log("You Entered "+TYPE+" Please run again then Please Enter between 0 to 7 number and press enter ")
            break
        }
        
    }
}

while (true) {
  const input = prompt("Enter a number between 0 and 7: ");

  if (isNaN(input) || input < 0 || input > 7) {
    console.log("Invalid input. Please enter a number between 0 and 7.");
  } else {
    printPattern(parseInt(input));
  }
}

const input = prompt();

if(input==0){
    printPattern(0)
}else if(input==1){
    printPattern(1)
}
else if(input==2){
    printPattern(2)
}
else if(input==3){
    printPattern(3)
}
else if(input==4){
    printPattern(4)
}
else if(input==5){
    printPattern(5)
}
else if(input==6){
    printPattern(6)
}
else if(input==7){
    printPattern(7)
}
else{
     printPattern(input)
}
