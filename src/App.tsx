import { useEffect, useState } from "react";
import AnswerButton from "./components/AnswerButton"
import ConfiguratorBar from "./components/ConfiguratorBar";
import StartButton from "./components/StartButton";
import Game from "./pages/Game";
import GameOver from "./pages/GameOver";
import Welcome from "./pages/Welcome";

function App() {

  const [score, setScore] = useState(0)
  const [firstNumber, setFirstNumber] = useState(0)
  const [secondNumber, setSecondNumber] = useState(0)
  const [answerOptions, setAnswerOptions] = useState([0, 0, 0, 0])
  const [secondsRemaining, setSecondsRemaining] = useState(0)
  const [gameOver, setGameOver] = useState(true)
  const [firstTime, setFirstTime] = useState(true)
  const [selectedTime, setSelectedTime] = useState(60);

  useEffect(() => {
    if (secondsRemaining > 0 && gameOver == false) {
      setTimeout(() => {
        setSecondsRemaining(secondsRemaining - 1)
      }, 1000)
    } else if (secondsRemaining == 0) {
      setGameOver(true)
    }
  })

  const GetQuestionNumbers = () => {
    // Get two random numbers between 1 and 10
    let first = Math.floor(Math.random() * 10)
    let second = Math.floor(Math.random() * 10)
    // Work out the answer
    let answer = first + second

    setFirstNumber(first)
    setSecondNumber(second)
    GetUniqueAnswerOptions(answer);
    setAnswerOptions(GetUniqueAnswerOptions(answer))
  }

  const GetUniqueAnswerOptions = (answer: number) => {
    // let optionsArray = [...Array(Math.max(answer * 2 + 1, 10)).keys()]
    let optionsArray = Array.from({ length: Math.max(answer * 2, 10) }, (_, i) => i + 1)

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
    if (firstNumber + secondNumber == answer) {
      return true;
    }
    return false;
  }

  const AnswerQuestion = (answer: number) => {
    if (IsAnswerCorrect(answer)) {
      IncrementScore()
    } else {
      DecrementScore()
    }
    GetQuestionNumbers()
  }

  const StartGame = () => {
    setGameOver(false)
    setFirstTime(false)
    setSecondsRemaining(selectedTime)
    setScore(0)
    GetQuestionNumbers()
  }

  return (
    <div className="flex flex-col items-center bg-neutral-700 h-screen space-y-8">
      <h1 className="self-center text-4xl pt-8 text-neutral-400">guess the number</h1>
      <ConfiguratorBar selectedTime={selectedTime} setSelectedTime={setSelectedTime}/>
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
          secondsRemaining={secondsRemaining}/>
      )}
    </div>

  )
}

export default App
