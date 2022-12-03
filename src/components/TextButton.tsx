import React from 'react'

type Props = {
    isActive: boolean,
    text: string,
    onClick: () => void,
    enabled: boolean
}

const TextButton = (props: Props) => {
  return (
    <>
    {props.isActive ? 
        <button disabled={!props.enabled} className={`text-yellow-500 ${props.enabled ? "md:hover:text-neutral-100 transition ease-in-out delay-75 duration-200": ""} `} onClick={() => props.onClick()}>{props.text}</button>
        :
        <button disabled={!props.enabled} className={`text-neutral-500 ${props.enabled ? "md:hover:text-neutral-100 transition ease-in-out delay-75 duration-200": ""}`} onClick={() => props.onClick()}>{props.text}</button>
    }
    </>
  )
}

export default TextButton