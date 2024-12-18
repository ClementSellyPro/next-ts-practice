"use client"

import Link from 'next/link';
import React, { useContext } from 'react';
import Button from '../components/Button';
import Title from '../components/Title';
import PlanCard from '../components/PlanCard';
import arcadeIcon from '@/app/asset/images/icon-arcade.svg';
import advancedIcon from '@/app/asset/images/icon-advanced.svg';
import proIcon from '@/app/asset/images/icon-pro.svg';
import ChoiceContext from '../context/ChoiceContext';

export default function Plan() {

  const {billingChoice, setBillingChoice, planChoice, setPlanChoice, addSelection, setAddSelection} = useContext(ChoiceContext);

  function multiplication(item: {name:string, price:number}){
    return {name:item.name, price:(item.price * 10)}
  }
  function division(item: {name:string, price:number}){
    return {name:item.name, price:(item.price / 10)}
  }

  // toggle the billing and adapt the price stored yet whitin the states
  function toggleBillingChoice(){
    if(addSelection.length > 0){

      if(billingChoice === 'Monthly' && planChoice[0]?.price < 80 && addSelection[0]?.price < 5){
        // toggle the billing choice to yearly
        setBillingChoice('Yearly');
        // change the price plan for the yearly pricing
        const newPrice = planChoice[0]?.price * 10;
        const currentName = planChoice[0]?.name;
        setPlanChoice([{name: currentName, price: newPrice}])
        // change the price add for the yearly pricing
        const addons = addSelection.map(multiplication)
        setAddSelection(addons);
      }else{  
        // toggle the billing choice to monthly
        setBillingChoice('Monthly');
        // change the price plan for the monthly pricing
        const newPrice = planChoice[0]?.price / 10;
        const currentName = planChoice[0]?.name;
        setPlanChoice([{name: currentName, price: newPrice}])
        // change the price add for the monthly pricing
        const addons = addSelection.map(division)
        setAddSelection(addons);
      }

    
    }else{
      if(billingChoice === 'Monthly'){
        setBillingChoice('Yearly');
      }else{
        setBillingChoice('Monthly');
      }
    }
  }

  return (
    <div className="relative mx-16 w-full py-5">
        
        <Title title={'Plan'}>
            You have the option of monthly or yearly billing
        </Title>

        {/* cards section */}
        <div className='flex justify-between'>
            <PlanCard billingChoice={billingChoice} icon={arcadeIcon} name={'Arcade'} price={9} />
            <PlanCard billingChoice={billingChoice} icon={advancedIcon} name={'Advanced'} price={12} />
            <PlanCard billingChoice={billingChoice} icon={proIcon} name={'Pro'} price={15} />
        </div>

        {/* toggle section */}
        <div className='flex justify-center gap-5 py-3 bg-slate-100 rounded-xl mt-8 font-bold text-slate-500'>
            <p className={billingChoice === 'Monthly' ? 'text-indigo-800':''}>Monthly</p>

            <label className="inline-flex items-center cursor-pointer">
              <input onChange={toggleBillingChoice} type="checkbox" value="" className="sr-only peer" checked={billingChoice === 'Monthly' ? false : true} />
              <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>

            <p className={billingChoice === 'Yearly' ? 'text-indigo-800':''}>Yearly</p>
        </div>

        {/* buttons section */}
        <Link href='/' className="absolute left-0 bottom-5 text-blue-900 font-bold hover:text-blue-700">
            Go Back
        </Link>
        <Link href='/addon' className="absolute right-0 bottom-5">
          <Button>
            Next Step
          </Button>
        </Link>
    </div>
  )
}
