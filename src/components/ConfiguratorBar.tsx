import React from 'react'
import {Plus, Minus, X, Divide} from 'react-feather';
import IconButton from './IconButton';
import TextButton from './TextButton';

type Props = {
    selectedTime: number,
    setSelectedTime: (time: number) => void,
    addActive: boolean,
    toggleAddActive: (toggle: boolean) => void,
    minusActive: boolean,
    toggleMinusActive: (toggle: boolean) => void,
    xActive: boolean,
    toggleXActive: (toggle: boolean) => void,
    divideActive: boolean,
    toggleDivideActive: (toggle: boolean) => void,
    gameActive: boolean
}

const ConfiguratorBar = (props: Props) => {

    const HandleTimeButtonSelected = (value: number) => {
        props.setSelectedTime(value);
    }

    return (
        <div>
            <div className="hidden md:flex flex-row space-x-4 bg-neutral-800 opacity-75 pt-1 pb-1 px-2 py-2 text-sm rounded-md">
                    <IconButton enabled={!props.gameActive} icon={<Plus/>} text="add" isActive={props.addActive} onClick={props.toggleAddActive}/>
                    <IconButton enabled={!props.gameActive} icon={<Minus/>} text="subtract" isActive={props.minusActive} onClick={props.toggleMinusActive}/>
                    <IconButton enabled={!props.gameActive} icon={<X/>} text="multiply" isActive={props.xActive} onClick={props.toggleXActive}/>
                    <IconButton enabled={!props.gameActive} icon={<Divide/>} text="divide" isActive={props.divideActive} onClick={props.toggleDivideActive}/>
                    <div className='bg-neutral-700 w-1 rounded-sm'></div>
                    <TextButton isActive={props.selectedTime == 15} text="15" onClick={() => HandleTimeButtonSelected(15)}/>
                    <TextButton isActive={props.selectedTime == 30} text="30" onClick={() => HandleTimeButtonSelected(30)}/>
                    <TextButton isActive={props.selectedTime == 60} text="60" onClick={() => HandleTimeButtonSelected(60)}/>
                    <TextButton isActive={props.selectedTime == 120} text="120" onClick={() => HandleTimeButtonSelected(120)}/>
            </div>
            <div className="md:hidden flex flex-col space-y-2 bg-neutral-800 opacity-75 pt-1 pb-1 px-2 py-2 text-sm rounded-md">
                    <div className="flex flex-row justify-evenly space-x-4">
                        <IconButton enabled={!props.gameActive} icon={<Plus/>} text="add" isActive={props.addActive} onClick={props.toggleAddActive}/>
                        <IconButton enabled={!props.gameActive} icon={<Minus/>} text="subtract" isActive={props.minusActive} onClick={props.toggleMinusActive}/>
                        <IconButton enabled={!props.gameActive} icon={<X/>} text="multiply" isActive={props.xActive} onClick={props.toggleXActive}/>
                        <IconButton enabled={!props.gameActive} icon={<Divide/>} text="divide" isActive={props.divideActive} onClick={props.toggleDivideActive}/>
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