import React from 'react'
import StartButton from '../components/StartButton'

type Props = {
    startGame: () => void,
    score: number
}

const GameOver = (props: Props) => {
  return (
    <div className="flex flex-col space-y-8">
        <h2 className="self-center text-4xl pt-8 text-neutral-400">score <b className="text-yellow-300">{props.score}</b></h2>
        <StartButton startGame={props.startGame} text="Play Again"/>
    </div>
  )
}

export default GameOver