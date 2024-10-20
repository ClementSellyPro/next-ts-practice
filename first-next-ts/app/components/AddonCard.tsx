"use client"

import React, { MouseEvent, useContext } from 'react'
import ChoiceContext from '../context/ChoiceContext';

export default function AddonCard({title, children, price}
:{
    title:string, 
    children:string, 
    price:string
}) {

    // const [selected, setSelected] = useState(); useState
    const {billingChoice, addSelection, setAddSelection} = useContext(ChoiceContext)

    function handleSelection(e: MouseEvent<HTMLElement>){
        const target = e.currentTarget as HTMLElement;
        if(target.classList.contains('service')){
            let price: number = 1;
            if(billingChoice === "Yearly"){
                price *= 10;
            }
            setAddSelection([...addSelection, {name:'Online service', price:price}]);
        }
        if(target.classList.contains('storage')){
            let price: number = 2;
            if(billingChoice === "Yearly"){
                price *= 10;
            }
            setAddSelection([...addSelection, {name:'Larger Storage', price:price}]);
        }
        if(target.classList.contains('profile')){
            let price: number = 2;
            if(billingChoice === 'Yearly'){
                price *= 10;
            }
            setAddSelection([...addSelection, {name:'Customizable profile', price:price}]);
        }
    }

    return (
        <div className={`${title.split(' ')[1]} flex items-center p-8 border rounded-xl w-full relative hover:bg-slate-50 hover:border-indigo-600 hover:cursor-pointer`} onClick={(e: MouseEvent<HTMLElement>) => handleSelection (e)}>
            <input className='w-8' type="checkbox" />
            <div className='ml-4'>
                <h2 className='font-semibold text-blue-900'>{title}</h2>
                <p className='text-slate-400'>{children}</p>
            </div>
            <p className='absolute right-8 text-indigo-600'>+${billingChoice === 'Monthly' ? price : (String(Number(price) * 10))}/{billingChoice === 'Monthly' ? 'mo':'yr'}</p>
        </div>
    )
}
