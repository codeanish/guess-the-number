import React from 'react'

type Props = {
    startGame: () => void,
    text: string
}

const StartButton = (props: Props) => {

    return (
        <button className="self-center px-8 py-2 bg-gray-200 rounded-lg bg-primary text-gray-900 text-2xl text-center font-playfair drop-shadow-md hover:drop-shadow-2xl hover:bg-gray-100 hover:text-primary  transition ease-in-out delay-75 duration-200" 
            onClick={() => props.startGame()}>{props.text}</button>
    )
}

export default StartButton