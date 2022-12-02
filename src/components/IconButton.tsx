import React from 'react'

type Props = {
    icon: React.ReactNode,
    text: string,
    isActive: boolean
}

const IconButton = (props: Props) => {
  return (
    <button>
        {props.isActive ? 
        <div className='flex flex-row items-center text-yellow-500'>
            <div>{props.icon}</div>
            <div className='text-xs'>{props.text}</div>
        </div>
        :
        <div className='flex flex-row items-center text-neutral-500'>
            <div>{props.icon}</div>
            <div className='text-xs'>{props.text}</div>
        </div>
    }
        </button>
  )
}

export default IconButton