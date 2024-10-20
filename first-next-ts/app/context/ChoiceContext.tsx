'use client'

import { createContext, Dispatch, SetStateAction, useState } from "react";

interface addonType {
    name: string,
    price: number
}

interface planType {
    name: string,
    price: number
}

interface ContextType {
    planChoice: planType[],
    setPlanChoice: Dispatch<SetStateAction<planType[]>>,
    planSelection: string,
    setPlanSelection: Dispatch<SetStateAction<string>>,
    billingChoice: string,
    setBillingChoice: Dispatch<SetStateAction<string>>,
    addSelection: addonType[],
    setAddSelection: Dispatch<SetStateAction<addonType[]>>
}

const ChoiceContext = createContext<ContextType>({
    planChoice: [],
    setPlanChoice: () => {},
    planSelection: '',
    setPlanSelection: () => {},
    billingChoice: '',
    setBillingChoice: () => {},
    addSelection: [],
    setAddSelection: () => {}
});

export default ChoiceContext;


export const ChoiceContextProvider = ({children} : {children: React.ReactNode}) => {
    const [planChoice, setPlanChoice] = useState<planType[]>([]);
    const [planSelection, setPlanSelection] = useState<string>('');
    const [billingChoice, setBillingChoice] = useState('Monthly');
    const [addSelection, setAddSelection] = useState<addonType[]>([])
 
    return(
        <ChoiceContext.Provider value={{ 
            planChoice, setPlanChoice, 
            planSelection, setPlanSelection,
            billingChoice, setBillingChoice,
            addSelection, setAddSelection }}>
            {children}
        </ChoiceContext.Provider>
    )
}
