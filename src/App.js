import './style.css';
import './score.css'
import Final from './Final'
import React,{ useState } from 'react';

     
 function App(){
 
  const queti=[
    {
        quetions: "What is the default value of key prop in React lists?",
        options: ["null", "undefined","0", "There is no default value"],
        correctAnswer:"There is no default value",
    },
    {
        quetions: " What is the primary purpose of Node.js?",
        options: ["To create mobile applications","To run JavaScript on the server-side","To design websites","To manage databases"],
        correctAnswer: "To run JavaScript on the server-side",
    },
    {
        quetions: "What is full form of DOM ?",
        options: ["Document object method","Document object model","Document option model","None of the above"],
        correctAnswer: "Document object model",
    },
    {
        quetions: "Can you use JavaScript expressions inside JSX? If so, how?",
        options:["Yes, by enclosing the expression in curly braces { }","Yes, by using parentheses () around the expression","No, JavaScript expressions cannot be used inside JSX","Yes, by using double square brackets [[ ]]"],
        correctAnswer: "Yes, by enclosing the expression in curly braces { }",
    },
    {
        quetions: "Which one of these is a JavaScript framework?",
        options: ["Django","Flask", "React", "Laravel"],
        correctAnswer: "React",
    }
  ]

  const javaQuetions=[
    {
      quetions: "Which of the following will compile and run correctly?",
      options: ["int i = 10.5;","float f = 10;","long l = 10.5;","double d = 10.5;"],
      correctAnswer: "double d = 10.5;",
    },
    {
      quetions: "Which of the following methods are part of the java.lang.Object class?",
      options: ["clone()","notify()","wait()","All of the above"],
      correctAnswer: "All of the above",
    },
    {
      quetions: "Which of the following interfaces does the HashMap implement?",
      options: ["Map","List","Set","Queue"],
      correctAnswer: "Map",
    },
    {
      quetions: "Which of the following is a characteristic of an abstract class in Java?",
      options: ["It can have a constructor","It can have static methods","It can have non-abstract methods","All of the above"],
      correctAnswer: "All of the above",
    },
    {
      quetions: "Which of the following statements is true about methods in Java?",
      options: ["A method must always return a value","A method can have no parameters","A method can only be called once.","A method cannot have a return type"],
      correctAnswer: "A method can have no parameters",
    },
  ]
    const htmlQuetions=[
      {
        quetions: "What is the purpose of the <noscript> tag in HTML?",
        options: ["It contains content for browsers that do not support JavaScript","It defines a script that will not be executed","It is used to handle JavaScript errors","It loads JavaScript asynchronously"],
        correctAnswer: "double d = 10.5;",
      },
      {
        quetions: "Which of the following methods are part of the java.lang.Object class?",
        options: ["clone()","notify()","wait()","All of the above"],
        correctAnswer: "It contains content for browsers that do not support JavaScript",
      },
      {
        quetions: "Which of the following is not a valid value for the target attribute in the <a> tag?",
        options: ["_black","_self","_parent","_new"],
        correctAnswer: "_new",
      },
      {
        quetions: "What is the <!DOCTYPE html> declaration used for in an HTML document?",
        options: ["It specifies the HTML version being used","It indicates that the document is an HTML document","It defines the root element of the document","It tells the browser to use strict mode"],
        correctAnswer: "It specifies the HTML version being used",
      },
      {
        quetions: "What is the correct syntax for embedding a CSS stylesheet in an HTML document?",
        options: ["<style src=style.css>","<stylesheet src=style.css>","<link rel=stylesheet href=style.css>","<css href=style.css>"],
        correctAnswer: "<link rel=stylesheet href=style.css>",
      },
    
  ]

  const sqlQuetions=[
    {
      quetions: "Which clause is used to filter aggregated data in SQL?",
      options: ["WHERE","HAVING","GROUP BY","FILTER"],
      correctAnswer: "HAVING",
    },
    {
      quetions: "What does the TRUNCATE command do?",
      options: ["Deletes all rows in a table and frees space","Deletes all rows in a table but keeps space","Removes the table structure","Deletes selected rows only"],
      correctAnswer: "Deletes all rows in a table and frees space",
    },
    {
      quetions: " What is the default sorting order in SQL?",
      options: ["Ascending","Descending","Random","Undefined"],
      correctAnswer: "Ascending",
    },
    {
      quetions: "What is a FOREIGN KEY?",
      options: ["A unique identifier for a row in a table","A key that establishes a relationship between two tables","A key that allows null values","A key that prevents duplicate entries"],
      correctAnswer: "A key that establishes a relationship between two tables",
    },
    {
      quetions: "What does the NVL function do in SQL?",
      options: ["Finds the next value in a sequence","Replaces NULL with a specified value","Finds null values in a table","Returns an error"],
      correctAnswer: "Replaces NULL with a specified value",
    },
  
]

  const [quetionz, setQutionz] = useState(queti)
  const [count, setCount]=useState(0)
  const [score, setScore]=useState(0)
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizType, setQuizType] = useState("React Quiz")

 
  
  function checkAns(index){
    const selectedAnswer =  quetionz[count].options[index];
    const correctAnswer = quetionz[count].correctAnswer;

    if(selectedAnswer === correctAnswer){
      setScore(prevScore => prevScore + 1);
    }
  };
  const Next = (index) => {
    checkAns(index);
    setCount(prevCount => prevCount + 1);
   
  }
  const Prev = () => {
    setCount(prevCount => prevCount - 1);
  };

  const react = () => {
    setQutionz(queti);
    setScore(0)
    setCount(0)
    setQuizType("React Quiz")
  }

  const showJavaQuetions = () => {
    setQutionz(javaQuetions);
    setScore(0)
    setCount(0)
    setQuizType("Java Quiz")
  }

  const showHtmlQuetions = () =>{
    setQutionz(htmlQuetions);
    setScore(0)
    setCount(0)
    setQuizType("HTML Quiz")
  }

 const showSqlQuetions = ()=> {
  setQutionz(sqlQuetions);
  setScore(0)
  setCount(0)
  setQuizType("SQL Quiz")
 }
 
 const getQuizTitle = () => quizType;

  if(count<=4){
    return(
   <>     
   <div id="header">
   <h1>Quiz Application </h1>
   <div className="message-container">
   <p id="checkScore">Check Score Here</p>
   <div className="message">{getQuizTitle()} Score : {score}</div>
   </div>
   </div>
   <div id="main">
      <div id="side-bar">
        <h2 id="sel">Select Quiz!</h2>
        <button id="butt" onClick={react}>React Quiz</button>
        <button id="butt" onClick={showJavaQuetions}>Java Quiz</button>
        <button id="butt" onClick={showHtmlQuetions}>Html Quiz</button>
        <button id="butt" onClick={showSqlQuetions}>SQL Quiz</button>

      </div>
     
     <div id="container">
      <div id="child">
        <h3>Quetions: {count + 1} / 5</h3> 
        <h2 id="quiz">{getQuizTitle()}</h2>
         <h2 id="h">{count+1}.{quetionz[count].quetions}</h2>
         <h3>
          {quetionz[count].options.map((r, index) =>
          <li key={index} className='list' onClick={()=>{ Next(index) }} id={index}>{r}</li>)}
          </h3>
         
         <button id="dec" onClick={Prev} disabled={count === 0} >Prev</button>
         <button id="dec" onClick={() => Next(0)} disabled={count === 4}>Next</button>
      </div>   
     </div>
   </div>
    </>
    );
}
else{
  return(
    <>
    <div className='final'>
    <Final/>
    
    <b id="over">Your Quiz is Over</b>
    <div className='score'>
    <span id="answer">Your {getQuizTitle()} Score is : {score}</span>
    </div>
    <a href="">Retry?</a>
    <br/><br/>
    <h3>(OR)</h3>
    <div id="choose">
        <button id="butt" onClick={react}>React Quiz</button>
        <button id="butt" onClick={showJavaQuetions}>Java Quiz</button>
        <button id="butt" onClick={showHtmlQuetions}>Html Quiz</button>
        <button id="butt" onClick={showSqlQuetions}>SQL Quiz</button>
      </div>
    </div>
    </>
  );
}
 }
export default App;