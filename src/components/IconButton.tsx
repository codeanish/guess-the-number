import React from 'react'

type Props = {
    icon: React.ReactNode,
    text: string,
    isActive: boolean,
    onClick: (toggle: boolean) => void,
    enabled: boolean
}

const IconButton = (props: Props) => {
  return (
    <button disabled={!props.enabled} onClick={() => props.onClick(!props.isActive)}>
        {props.isActive ? 
        <div className='flex flex-row items-center text-yellow-500 hover:text-neutral-100 transition ease-in-out delay-75 duration-200'>
            <div>{props.icon}</div>
            <div className='text-xs'>{props.text}</div>
        </div>
        :
        <div className='flex flex-row items-center text-neutral-500 hover:text-neutral-100 transition ease-in-out delay-75 duration-200'>
            <div>{props.icon}</div>
            <div className='text-xs'>{props.text}</div>
        </div>
    }
        </button>
  )
}

export default IconButton