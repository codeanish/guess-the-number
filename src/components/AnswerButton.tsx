import React from 'react'

type Props = {
    number: number,
    answerScore: (answer: number) => void
}



const AnswerButton = (props: Props) => {

    return (
        <button className="w-32 self-center px-8 py-2 bg-neutral-200 rounded-lg bg-primary text-neutral-900 text-6xl text-center font-playfair drop-shadow-md hover:drop-shadow-2xl hover:bg-neutral-100 hover:text-primary  transition ease-in-out delay-75 duration-200"
            onClick={() => props.answerScore(props.number)}>{props.number}</button>
    )
}

export default AnswerButton