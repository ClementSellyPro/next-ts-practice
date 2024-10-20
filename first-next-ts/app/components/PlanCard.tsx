'use client'

import Image from 'next/image';
import React, { MouseEvent, useContext, useEffect, useMemo, useState } from 'react';
import ChoiceContext from '../context/ChoiceContext';

interface PlanCardType {
  icon:string, 
  name:string, 
  price:number, 
  billingChoice:string
}

export default function PlanCard({icon, name, price, billingChoice}: PlanCardType) {

  const { planChoice, setPlanChoice } = useContext(ChoiceContext);
  const [ planChoiceList, setPlanChoiceList ] = useState<NodeListOf<Element> | null>(null);

  const displayPrice = useMemo(() => {
    if(billingChoice === 'Monthly'){
      return price;
    }
    if(billingChoice === 'Yearly'){
      return price * 10;
    }
  
  }, [billingChoice]);

  // reset selected plan card style
  function resetSelectedChoice() {
    for(let i = 0; i < planChoiceList!.length; i++){
      if(planChoiceList![i].classList.contains('selectedChoice')){
        planChoiceList![i].classList.remove('selectedChoice');
      }
    }
  }

  // add style to selected card and add to the state planChoice
  function handlePlanSelection(e: MouseEvent<HTMLElement>){
    const target = e.currentTarget;
    if(target.classList.contains('Arcade')){
      let price: number = 9;
      if(billingChoice === 'Yearly'){
        price *= 10;
      }
      setPlanChoice([{name:'Arcade', price:price}]);
      resetSelectedChoice();
      target.classList.add('selectedChoice');
      console.log(planChoice);
    }
    if(target.classList.contains('Advanced')){
      let price: number = 12;
      if(billingChoice === 'Yearly'){
        price *= 10;
      }
      setPlanChoice([{name:'Advanced', price:price}]);
      resetSelectedChoice();
      target.classList.add('selectedChoice');
      console.log(planChoice);
    }
    if(target.classList.contains('Pro')){
      let price: number = 15;
      if(billingChoice === 'Yearly'){
        price *= 10;
      }
      setPlanChoice([{name:'Pro', price:price}]);
      resetSelectedChoice();
      target.classList.add('selectedChoice');
      console.log(planChoice);
    }
  }

  useEffect(() => {
    setPlanChoiceList(document.querySelectorAll<Element>('.PlanCard'));
  }, []);

  return (
    <div className={`PlanCard flex flex-col gap-16 border p-6 w-44 mt-12 rounded-xl
    hover:cursor-pointer hover:border-indigo-700 ${name}
    `} onClick={(e: MouseEvent<HTMLElement>) => handlePlanSelection(e)}>
        <div>
          <Image src={icon} alt='Plan' />
        </div>
        <div>
            <p className='font-bold text-indigo-800'>{name}</p>
            <p className='text-sm text-slate-400'>${displayPrice}/{billingChoice === 'Monthly' ? 'mo' : 'yr'}</p>
            {billingChoice === 'Monthly' ? '' : <p className='text-sm text-indigo-700'>2 months free</p>}
        </div>
    </div>
  )
}
