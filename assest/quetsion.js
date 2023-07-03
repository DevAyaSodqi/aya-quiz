      //Refrences
 
    const butStart = document.getElementById('start-button');
    const oneScreen = document.getElementsByClassName('name-quiz')[0];
    const welcomeScreen = document.querySelector('.content_quiz')
    const diaplayQuis = document.getElementsByClassName('quiz-box')[0];
    const inputName = document.getElementsByClassName('form-student');
    const nameStudent = document.getElementById('name-st');
    const errorMessage = document.getElementsByClassName('p-error')[0];
    const domQuestion = document.querySelector('.que_text');
    const brtNext = document.querySelector('.next-btn');
    const scorStudent = document.querySelector('.score_que');
    const countQu = document.querySelector('.count_que');
    const quiz_box = document.querySelector('.quiz-box');
    const optionQu = quiz_box.querySelector('.options');
    const boxResult = document.querySelector('.result-box');
    const nameResult= document.querySelector('.name-result');
    const scoreResult = document.querySelector('.score-result');
    const btnLaboard = document.querySelector('#heigh_score');


    //variable
   let questionNumber = 1 ;
   let playerScore = 0  ;
   let index = 0;





    //========================ButtonStart&&ValidateInput=================================//
    butStart.addEventListener('click',()=>{

         errorMessage.textContent = '';

         if(nameStudent.value === ""){
         errorMessage.textContent ='Error: Enter NameStudent';
         }

         if(nameStudent.value != ""){
          errorMessage.textContent ='';
          console.log(diaplayQuis);
          oneScreen.style.display = 'none';
          diaplayQuis.style.display = 'block';
          NextQuestion(index);


         }
     

          
    });



   


//===================================RandomQuestion===============================================//    



function sufflyArray(arr){
    return arr.sort(()=> Math.random() -0.5);
  // return randomQ=(Math.random() * 10) ;
   }


// let shuffledQuestions = [] ;

// function handleQuestions() { 
  
//     while (shuffledQuestions.length <= 9) {
//         const random = questions[Math.floor(Math.random() * 10)]
//         if (!shuffledQuestions.includes(random)) {
//             shuffledQuestions.push(random)
//         }
//     }
// }




//================================DisplayQuestion&&Option===========================================================================//

function NextQuestion(index) {
    sufflyArray(questions);
    const currentQuestion = questions[index];
    //  handleQuestions();
    //  const currentQuestion = shuffledQuestions[index]
      domQuestion.innerHTML = currentQuestion.question;
   
     countQu.innerHTML = index+1;
      scorStudent.innerHTML = playerScore ;

      var option_statement = "";
      for(var i=0; i<questions[index].options.length; i++){
          option_statement += `<div class="options">${questions[index].options[i]}</div>`;
      }
      
      optionQu.innerHTML = option_statement;
      
      var AllOptions = optionQu.querySelectorAll(".options");
      
          for(var j=0; j<AllOptions.length; j++){
              AllOptions[j].setAttribute("onclick","checkForAnswer(this)");
          }


         
      }



 //==================================================================================================//     
      function handleNextQuestion() {
            checkForAnswer(index) ;
                if (indexNumber <= 10) {
                    NextQuestion(indexNumber);
                }
                else {
                    diaplayQuis.style.display="none";
                    oneScreen.style.display="block";
                    nameStudent.value="";
                }


              
           
        }



  //====================================NextButton==========================================//      

  brtNext.onclick=()=>{
   
      index++;
      if(questions.length>index){
          countQu.textContent = index + 1;
          NextQuestion(index);
     
      }else{
          console.log("Questions Complete");
        
        
       
      }
  
      if(questions.length -1 == index){
          
          diaplayQuis.style.display="none";
          oneScreen.style.display="block";
          nameStudent.value="";

       
      }
  }


  //=============================CheckAnswer==============================================//
  function checkForAnswer(answer){
    brtNext.style.display = 'block';
      let userAns = answer.textContent;
      let correctAns = questions[index].answer;
   
  
    
      if(userAns == correctAns){
          console.log("Right Answer","color:green");
       
          playerScore++;

          // invoke function to save name-score localstorage
          storeScore(nameStudent.value, playerScore);

          
         
        
      }else{
  
      
          console.log("Wrong Answer","color:red");
       
      }





  }     


//======================================ButtonLeaderBoard===========================================================================//  
  btnLaboard.addEventListener('click',()=>{
   oneScreen.style.display = "none";
   boxResult.style.display = "block";
   
  });



  //==================================Function LocalStorage============================================================================================================//

  function storeScore(userName, newScore) {
    localStorage.setItem("newHighScoreAdded", JSON.stringify({ userName, newScore }));
    
  }








 









