"use client"

import React, { MouseEvent, useContext, useEffect, useState } from 'react'
import ChoiceContext from '../context/ChoiceContext';

interface AddonCardType {
    title: string,
    children: string,
    price: string
}

interface AddonItemType {
    name: string,
    price: number
}

export default function AddonCard({title, children, price}: AddonCardType) {

    const [selected, setSelected] = useState(false);
    const {billingChoice, addSelection, setAddSelection} = useContext(ChoiceContext);


    useEffect(() => {
        const addOnCardList = document.querySelectorAll('.addOnCard');

        for(let i = 0; i < addOnCardList.length; i++){
            if(addSelection.some(element => element.name === 'Online service')  && addOnCardList[i].classList.contains('Online service')){
                addOnCardList[i].classList.add('selected-addon');
            }
            if(addSelection.some(element => element.name === 'Larger Storage')  && addOnCardList[i].classList.contains('Larger Storage')){
                addOnCardList[i].classList.add('selected-addon');
            }
            if(addSelection.some(element => element.name === 'Customizable profile')  && addOnCardList[i].classList.contains('Customizable profile')){
                addOnCardList[i].classList.add('selected-addon');
            }
        }
    }, []);

    function handleSelection(e: MouseEvent<HTMLElement>){
        const target = e.currentTarget as HTMLElement;

        if(target.classList.contains('service')){
            let price: number = 1;
            if(billingChoice === "Yearly"){
                price *= 10;
            }
            setAddSelection([...addSelection, {name:'Online service', price:price}]);

            removeItem({name:'Online service', price:price});
        }   
        if(target.classList.contains('storage')){
            let price: number = 2;
            if(billingChoice === "Yearly"){
                price *= 10;
            }
            setAddSelection([...addSelection, {name:'Larger Storage', price:price}]);

            removeItem({name:'Larger Storage', price:price});
        }
        if(target.classList.contains('profile')){
            let price: number = 2;
            if(billingChoice === 'Yearly'){
                price *= 10;
            }
            setAddSelection([...addSelection, {name:'Customizable profile', price:price}]);
            
            removeItem({name:'Customizable profile', price:price});
        }

        handleCheckbox();
        if(target.classList.contains('selected-addon')){
            target.classList.remove('selected-addon');
        } else{
            target.classList.add('selected-addon');
        }
        console.log(addSelection);
    }

    function handleCheckbox(){
        setSelected(!selected);
    }

    function removeItem(item: AddonItemType){
        for(let i = 0; i < addSelection.length; i++){
            if((addSelection[i].name === item.name)){
                const newSelection = addSelection.filter(addon => addon.name != item.name );
                setAddSelection(newSelection);
            }
        }
        console.log('yes yes');
    }

    return (
        <div className={`addOnCard ${title.split(' ')[1]} flex items-center p-8 border rounded-xl w-full relative hover:bg-slate-50 hover:border-indigo-600 hover:cursor-pointer`} onClick={(e: MouseEvent<HTMLElement>) => handleSelection (e)}>
            
            <input className='w-8' type="checkbox" onChange={(handleCheckbox)} checked={selected ? true : false} /> 
            
            <div className='ml-4'>
                <h2 className='font-semibold text-blue-900'>{title}</h2>
                <p className='text-slate-400'>{children}</p>
            </div>
            <p className='absolute right-8 text-indigo-600'>+${billingChoice === 'Monthly' ? price : (String(Number(price) * 10))}/{billingChoice === 'Monthly' ? 'mo':'yr'}</p>
        </div>
    )
}
