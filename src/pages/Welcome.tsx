import React from 'react'
import StartButton from '../components/StartButton'

type Props = {
    startGame: () => void
}

const Welcome = (props: Props) => {
  return (
    <div className="place-self-center content-center justify-center justify-items-center">
          <StartButton startGame={props.startGame} text="Start"/>
    </div>
  )
}

export default Welcome