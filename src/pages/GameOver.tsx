import React from 'react'
import StartButton from '../components/StartButton'

type Props = {
    startGame: () => void,
    score: number
}

const GameOver = (props: Props) => {
  return (
    <div className="flex flex-col space-y-8">
        <h1 className="self-center text-4xl pt-8 text-gray-400">guess the number</h1>
        <h2 className="self-center text-4xl pt-8 text-gray-400">score <b className="text-red-700">{props.score}</b></h2>
        <StartButton startGame={props.startGame} text="Play Again"/>
    </div>
  )
}

export default GameOver