import { useEffect, useState } from "react";
import ConfiguratorBar from "./components/ConfiguratorBar";
import Game from "./pages/Game";
import GameOver from "./pages/GameOver";
import Welcome from "./pages/Welcome";
import Operation from "./types/Operation";

function App() {

  const [score, setScore] = useState(0)
  const [firstNumber, setFirstNumber] = useState(0)
  const [secondNumber, setSecondNumber] = useState(0)
  const [answerOptions, setAnswerOptions] = useState([0, 0, 0, 0])
  const [secondsRemaining, setSecondsRemaining] = useState(0)
  const [gameOver, setGameOver] = useState(true)
  const [firstTime, setFirstTime] = useState(true)
  const [selectedTime, setSelectedTime] = useState(60);
  const [addActive, setAddActive] = useState(true);
  const [minusActive, setMinusActive] = useState(false);
  const [xActive, setXActive] = useState(false);
  const [divideActive, setDivideActive] = useState(false);
  const [operation, setOperation] = useState<Operation>(Operation.Add);

  useEffect(() => {
    if (secondsRemaining > 0 && gameOver == false) {
      setTimeout(() => {
        setSecondsRemaining(secondsRemaining - 1)
      }, 1000)
    } else if (secondsRemaining == 0) {
      setGameOver(true)
    }
  })

  const GetQuestionNumbers = (questionOperation: Operation) => {
    // Get two random numbers between 1 and 10
    if(questionOperation === Operation.Add){
      let first = Math.floor(Math.random() * 10)
      let second = Math.floor(Math.random() * 10)

      // Work out the answer
      let answer = first + second
      setFirstNumber(first)
      setSecondNumber(second)
      GetUniqueAnswerOptions(answer);
      setAnswerOptions(GetUniqueAnswerOptions(answer))
    }
    if(questionOperation === Operation.Subtract){
      let first = Math.floor(Math.random() * 10)
      let second = Math.floor(Math.random() * 10)
      
      // Work out the answer
      let answer = first - second
      setFirstNumber(first)
      setSecondNumber(second)
      GetUniqueAnswerOptions(answer);
      setAnswerOptions(GetUniqueAnswerOptions(answer))
    }
    if(questionOperation === Operation.Multiply){
      let first = Math.floor(Math.random() * 10)
      let second = Math.floor(Math.random() * 10)
      
      // Work out the answer
      let answer = first * second
      setFirstNumber(first)
      setSecondNumber(second)
      GetUniqueAnswerOptions(answer);
      setAnswerOptions(GetUniqueAnswerOptions(answer))
    }
    if(questionOperation === Operation.Divide){

      // Want to see 12/4 = 3
      // Using Math.floor + 1 here to ensure I get random numbers between 1-10
      let answer = Math.floor(Math.random() * 10) + 1
      let second = Math.floor(Math.random() * 10) + 1
      let first = answer * second
      
      // Work out the answer
      // let answer = first * second
      setFirstNumber(first)
      setSecondNumber(second)
      GetUniqueAnswerOptions(answer);
      setAnswerOptions(GetUniqueAnswerOptions(answer))
    }

  }

  const GetUniqueAnswerOptions = (answer: number) => {
    let optionsArray = Array.from({ length: Math.max(answer * 2, 10) }, (_, i) => i + 1)
    console.log(optionsArray)
    // Find and remove the answer from the array
    let answerIndex = optionsArray.indexOf(answer)
    optionsArray.splice(answerIndex, 1)

    // Shuffle the array
    optionsArray.sort(() => Math.random() - 0.5)
    let answersArray = optionsArray.slice(0, 3)

    // Add the answer back in
    answersArray.push(answer)

    // Shuffle the array again
    answersArray.sort(() => Math.random() - 0.5)
    return answersArray
  }

  const IncrementScore = () => {
    setScore(score + 1)
  }

  const DecrementScore = () => {
    setScore(score - 1)
  }

  const IsAnswerCorrect = (answer: number): boolean => {
    if (operation === Operation.Add){
      if (firstNumber + secondNumber == answer) {
        return true;
      }
    }
    if (operation === Operation.Subtract){
      if (firstNumber - secondNumber == answer) {
        return true;
      }
    }
    if (operation === Operation.Multiply){
      if (firstNumber * secondNumber == answer) {
        return true;
      }
    }
    if (operation === Operation.Divide){
      if (firstNumber / secondNumber == answer) {
        return true;
      }
    }
    return false;
  }

  const AnswerQuestion = (answer: number) => {
    if (IsAnswerCorrect(answer)) {
      IncrementScore()
    } else {
      DecrementScore()
    }
    let operation = GetRandomOperation()
    setOperation(operation)
    GetQuestionNumbers(operation)
  }

  const GetRandomOperation = () : Operation => {
    let options = []
    if (addActive){
      options.push(Operation.Add)
    }
    if (minusActive){
      options.push(Operation.Subtract)
    }
    if (xActive){
      options.push(Operation.Multiply)
    }
    if (divideActive){
      options.push(Operation.Divide)
    }
    const randomOperation = options[Math.floor(Math.random() * options.length)]
    return randomOperation
  }

  const StartGame = () => {
    setGameOver(false)
    setFirstTime(false)
    setSecondsRemaining(selectedTime)
    setScore(0)
    let operation = GetRandomOperation()
    setOperation(operation)
    GetQuestionNumbers(operation)
  }

  return (
    <div className="flex flex-col items-center bg-neutral-700 h-screen space-y-8">
      <h1 className="self-center text-4xl pt-8 text-neutral-400">guess the number</h1>
      <ConfiguratorBar selectedTime={selectedTime} setSelectedTime={setSelectedTime} 
        addActive={addActive} toggleAddActive={setAddActive} 
        minusActive={minusActive} toggleMinusActive={setMinusActive} 
        xActive={xActive} toggleXActive={setXActive} 
        divideActive={divideActive} toggleDivideActive={setDivideActive}
        gameActive={!gameOver}/>
      {gameOver ? firstTime ? (
        <Welcome startGame={StartGame} />
        ) : (
          <GameOver startGame={StartGame} score={score}/>
      ) : (
        <Game answerOptions={answerOptions} 
          answerQuestion={AnswerQuestion} 
          firstNumber={firstNumber} 
          secondNumber={secondNumber} 
          score={score} 
          secondsRemaining={secondsRemaining}
          operation={operation}/>
      )}
    </div>

  )
}

export default App
