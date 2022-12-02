import React from 'react'
import StartButton from '../components/StartButton'

type Props = {
    startGame: () => void
}

const Welcome = (props: Props) => {
  return (
    <div className="flex flex-col space-y-8">
          <h1 className="self-center text-4xl pt-8 text-gray-400">guess the number</h1>
          <StartButton startGame={props.startGame} text="Start"/>
    </div>
  )
}

export default Welcome