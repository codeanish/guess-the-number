import React from 'react'
import AnswerButton from '../components/AnswerButton'

type Props = {
    secondsRemaining: number,
    score: number,
    firstNumber: number,
    secondNumber: number,
    answerOptions: number[],
    answerQuestion: (answer: number) => void
}

const Game = (props: Props) => {
  return (
    <div className="flex flex-col space-y-8">
          <h1 className="self-center text-4xl pt-8 text-gray-400">guess the number</h1>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="text-sm text-gray-400 pl-2 self-center">time</p>
              <p className="text-lg text-yellow-300 pl-2 self-center">{props.secondsRemaining}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-sm text-gray-400 pr-2 self-center">score</p>
              <p className="text-lg text-yellow-300 pr-2 self-center">{props.score}</p>
            </div>
          </div>

          <p className="self-center text-8xl text-gray-50">{props.firstNumber} + {props.secondNumber}</p>

          <ul className='flex flex-row flex-wrap pt-8 justify-center'>
            {props.answerOptions.map((answer, index) => {
              return <li className="p-4" key={index}><AnswerButton number={answer} answerScore={props.answerQuestion} /></li>
            })}
          </ul>
        </div>
  )
}

export default Game