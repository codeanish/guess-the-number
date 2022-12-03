import React from 'react'
import AnswerButton from '../components/AnswerButton'
import {Plus, Minus, X, Divide} from 'react-feather';
import Operation from '../types/Operation';

type Props = {
    secondsRemaining: number,
    score: number,
    firstNumber: number,
    secondNumber: number,
    answerOptions: number[],
    answerQuestion: (answer: number) => void,
    operation: Operation
}


const Game = (props: Props) => {

  const GetOperatorIcon = (operation: Operation) : JSX.Element =>  {
    switch(operation){
      case Operation.Add:
        return <Plus/>
      case Operation.Subtract:
        return <Minus/>
      case Operation.Multiply:
        return <X/>
      case Operation.Divide:
        return <Divide/>
    }
  }

  return (
    <div className="flex flex-col space-y-8">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="text-sm text-neutral-400 pl-2 self-center">time</p>
              <p className="text-lg text-yellow-300 pl-2 self-center">{props.secondsRemaining}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-sm text-neutral-400 pr-2 self-center">score</p>
              <p className="text-lg text-yellow-300 pr-2 self-center">{props.score}</p>
            </div>
          </div>
          <div className="flex flex-row items-center self-center text-8xl text-neutral-50 space-x-4">
            <div>{props.firstNumber}</div>
            {
              GetOperatorIcon(props.operation)
            }
            <div>{props.secondNumber}</div>
          </div>

          <ul className='flex flex-row flex-wrap pt-8 justify-center'>
            {props.answerOptions.map((answer, index) => {
              return <li className="p-4" key={index}><AnswerButton number={answer} answerScore={props.answerQuestion} /></li>
            })}
          </ul>
        </div>
  )
}

export default Game