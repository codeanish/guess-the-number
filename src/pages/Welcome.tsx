import React, { useEffect, useState } from 'react'
import StartButton from '../components/StartButton'

type Props = {
    startGame: () => void,
    canStart: () => boolean
}

const Welcome = (props: Props) => {

  return (
    <div className="place-self-center content-center justify-center justify-items-center">
          <StartButton enabled={props.canStart()} startGame={props.startGame} text="Start"/>
    </div>
  )
}

export default Welcome