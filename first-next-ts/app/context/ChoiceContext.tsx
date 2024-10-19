'use client'

import { createContext, Dispatch, SetStateAction, useState } from "react";

interface ContextType {
    planChoice: string,
    setPlanChoice: Dispatch<SetStateAction<string>>,
    planSelection: string,
    setPlanSelection: Dispatch<SetStateAction<string>>,
    billingChoice: string,
    setBillingChoice: Dispatch<SetStateAction<string>>,
    addSelection: string[],
    setAddSelection: Dispatch<SetStateAction<string[]>>
}

const ChoiceContext = createContext<ContextType>({
    planChoice: '',
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
    const [planChoice, setPlanChoice] = useState<string>('');
    const [planSelection, setPlanSelection] = useState<string>('');
    const [billingChoice, setBillingChoice] = useState('Monthly');
    const [addSelection, setAddSelection] = useState<string[]>([])
 
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
