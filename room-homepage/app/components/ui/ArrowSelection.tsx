"use client"

import Image from 'next/image'
import React, { useState } from 'react'

import ArrowLeft from '@/public/images/icon-angle-left.svg';
import ArrowRight from '@/public/images/icon-angle-right.svg';

// interface PropsType {
//   selection: number, 
//   setSelection: React.Dispatch<React.SetStateAction<number>>
// }
// {selection, setSelection}:
function ArrowSelection() {

  const [selection, setSelection] = useState(1);

  function handleChangeSelectionUp(){
    let newSelection = selection;

    if(selection === 3){
      setSelection(1);
    }else{
      newSelection += 1;
      setSelection(newSelection)
    }
    console.log(selection)
  }

  function handleChangeSelectionDown(){
    let newSelection = selection;

    if(selection === 1){
      setSelection(3);
    }else{
      newSelection -= 1;
      setSelection(newSelection)
    }
    console.log(selection)
  }

  return (
    <div className='flex bg-gray-900 hover:cursor-pointer absolute bottom-0 md:left-0 right-0 md:right-auto'>
            <div onClick={handleChangeSelectionDown} className='md:py-7 md:px-9 py-5 px-7 hover:bg-gray-800'>
                <Image src={ArrowLeft} alt='Arrow left' height={10} width={10} />
            </div>
            <div onClick={handleChangeSelectionUp} className='md:py-7 md:px-9 py-5 px-7 hover:bg-gray-800'>
                <Image src={ArrowRight} alt='Arrow right' height={10} width={10} />
            </div>
        </div>
  )
}

export default ArrowSelection