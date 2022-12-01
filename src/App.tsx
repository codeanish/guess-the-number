import { useEffect, useState } from "react";
import AnswerButton from "./components/AnswerButton"

function App() {

  const [score, setScore] = useState(0)
  const [firstNumber, setFirstNumber] = useState(0)
  const [secondNumber, setSecondNumber] = useState(0)
  const [answerOptions, setAnswerOptions] = useState([0, 0, 0, 0])
  const [secondsRemaining, setSecondsRemaining] = useState(0)
  const [gameOver, setGameOver] = useState(true)
  const [firstTime, setFirstTime] = useState(true)

  useEffect(() => {
    if (secondsRemaining > 0 && gameOver == false) {
      setTimeout(() => {
        setSecondsRemaining(secondsRemaining - 1)
      }, 1000)
    } else if (secondsRemaining == 0) {
      setGameOver(true)
    }
  })

  const DecrementSecondsRemaining = () => {
    console.log("DecrementSecondsRemaining")
    if (secondsRemaining == 0) {
      console.log(secondsRemaining)
      setGameOver(true)
    }
    setSecondsRemaining(secondsRemaining - 1)
  }

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
    setSecondsRemaining(60)
    setScore(0)
    GetQuestionNumbers()
  }



  return (

    <div className="flex flex-col items-center bg-gray-700 h-screen">
      {gameOver ? firstTime ? (
        <div className="flex flex-col space-y-8">
          <h1 className="self-center text-4xl pt-8 text-gray-400">guess the number</h1>
          <button className="self-center px-8 py-2 bg-gray-200 rounded-lg bg-primary text-gray-900 text-2xl text-center font-playfair drop-shadow-md hover:drop-shadow-2xl hover:bg-gray-100 hover:text-primary  transition ease-in-out delay-75 duration-200" onClick={() => StartGame()}>Start</button>
        </div>) : (
        <div className="flex flex-col space-y-8">
          <h2 className="self-center text-4xl pt-8 text-gray-400">score <b className="text-red-700">{score}</b></h2>
          <button className="self-center px-8 py-2 bg-gray-200 rounded-lg bg-primary text-gray-900 text-xl text-center font-playfair drop-shadow-md hover:drop-shadow-2xl hover:bg-gray-100 hover:text-primary  transition ease-in-out delay-75 duration-200" onClick={() => StartGame()}>Play Again</button>
        </div>
      ) : (
        <div className="flex flex-col space-y-8">
          <h1 className="self-center text-4xl pt-8 text-gray-400">guess the number</h1>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="text-sm text-gray-400 pl-2 self-center">time</p>
              <p className="text-lg text-yellow-300 pl-2 self-center">{secondsRemaining}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-sm text-gray-400 pr-2 self-center">score</p>
              <p className="text-lg text-yellow-300 pr-2 self-center">{score}</p>
            </div>
          </div>

          <p className="self-center text-8xl text-gray-50">{firstNumber} + {secondNumber}</p>

          <ul className='flex flex-row flex-wrap pt-8 justify-center'>
            {answerOptions.map((answer, index) => {
              return <li className="p-4" key={index}><AnswerButton number={answer} answerScore={AnswerQuestion} /></li>
            })}
          </ul>
        </div>
      )}
    </div>

  )
}

export default App
