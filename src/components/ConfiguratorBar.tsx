import React from 'react'
import {Plus, Minus, X, Divide} from 'react-feather';
import IconButton from './IconButton';
import TextButton from './TextButton';

type Props = {
    selectedTime: number,
    setSelectedTime: (time: number) => void
}

const ConfiguratorBar = (props: Props) => {

    const HandleTimeButtonSelected = (value: number) => {
        props.setSelectedTime(value);
    }

    return (
        <div>
            <div className="hidden md:flex flex-row space-x-4 bg-neutral-800 opacity-75 pt-1 pb-1 px-2 py-2 text-sm rounded-md">
                    <IconButton icon={<Plus/>} text="add" isActive={true}/>
                    <IconButton icon={<Minus/>} text="subtract" isActive={false}/>
                    <IconButton icon={<X/>} text="multiply" isActive={false}/>
                    <IconButton icon={<Divide/>} text="divide" isActive={false}/>
                    <div className='bg-neutral-700 w-1 rounded-sm'></div>
                    <TextButton isActive={props.selectedTime == 15} text="15" onClick={() => HandleTimeButtonSelected(15)}/>
                    <TextButton isActive={props.selectedTime == 30} text="30" onClick={() => HandleTimeButtonSelected(30)}/>
                    <TextButton isActive={props.selectedTime == 60} text="60" onClick={() => HandleTimeButtonSelected(60)}/>
                    <TextButton isActive={props.selectedTime == 120} text="120" onClick={() => HandleTimeButtonSelected(120)}/>
            </div>
            <div className="md:hidden flex flex-col space-y-2 bg-neutral-800 opacity-75 pt-1 pb-1 px-2 py-2 text-sm rounded-md">
                    <div className="flex flex-row justify-evenly space-x-4">
                        <IconButton icon={<Plus/>} text="add" isActive={true}/>
                        <IconButton icon={<Minus/>} text="subtract" isActive={false}/>
                        <IconButton icon={<X/>} text="multiply" isActive={false}/>
                        <IconButton icon={<Divide/>} text="divide" isActive={false}/>
                    </div>
                    <div className='bg-neutral-700 h-1 rounded-sm'></div>
                    <div className='flex flex-row justify-evenly'>
                        <TextButton isActive={props.selectedTime == 15} text="15" onClick={() => HandleTimeButtonSelected(15)}/>
                        <TextButton isActive={props.selectedTime == 30} text="30" onClick={() => HandleTimeButtonSelected(30)}/>
                        <TextButton isActive={props.selectedTime == 60} text="60" onClick={() => HandleTimeButtonSelected(60)}/>
                        <TextButton isActive={props.selectedTime == 120} text="120" onClick={() => HandleTimeButtonSelected(120)}/>
                    </div>
            </div>
        </div>


  )
}

export default ConfiguratorBar