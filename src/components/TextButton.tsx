import React from 'react'

type Props = {
    isActive: boolean,
    text: string,
    onClick: () => void
}

const TextButton = (props: Props) => {
  return (
    <>
    {props.isActive ? 
        <button className='text-yellow-500 hover:text-neutral-100 transition ease-in-out delay-75 duration-200' onClick={() => props.onClick()}>{props.text}</button>
        :
        <button className='text-neutral-500 hover:text-neutral-100 transition ease-in-out delay-75 duration-200' onClick={() => props.onClick()}>{props.text}</button>
    }
    </>
  )
}

export default TextButton