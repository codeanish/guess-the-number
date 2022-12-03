import React from 'react'
import StartButton from '../components/StartButton'

type Props = {
    startGame: () => void,
    canStart: () => boolean,
    score: number,
    correctAnswers: number,
    incorrectAnswers: number
}

const GameOver = (props: Props) => {
  return (
    <div className="flex flex-col space-y-8">
      <div className='flex flex-row space-x-4'>
          <div className='flex flex-col items-center'>
            <h2 className="text-neutral-400">score</h2>
            <b className="text-yellow-300">{props.score}</b>
          </div>
          <div className='flex flex-col items-center'>
            <h2 className="text-neutral-400">correct</h2>
            <b className="text-green-700">{props.correctAnswers}</b>
          </div>
          <div className='flex flex-col items-center'>
            <h2 className="text-neutral-400">incorrect</h2>
            <b className="text-red-700">{props.incorrectAnswers}</b>
          </div>
      </div>
        
        
        <StartButton enabled={props.canStart()} startGame={props.startGame} text="Play Again"/>
    </div>
  )
}

export default GameOver