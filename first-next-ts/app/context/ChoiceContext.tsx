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
    setAddSelection: Dispatch<SetStateAction<addonType[]>>, 
    pageChange: boolean,
    setPageChange: Dispatch<SetStateAction<boolean>>
}

const ChoiceContext = createContext<ContextType>({
    planChoice: [],
    setPlanChoice: () => {},
    planSelection: '',
    setPlanSelection: () => {},
    billingChoice: '',
    setBillingChoice: () => {},
    addSelection: [],
    setAddSelection: () => {},

    pageChange: false,
    setPageChange: () => {}
});

export default ChoiceContext;


export const ChoiceContextProvider = ({children} : {children: React.ReactNode}) => {
    const [planChoice, setPlanChoice] = useState<planType[]>([]);
    const [planSelection, setPlanSelection] = useState<string>('');
    const [billingChoice, setBillingChoice] = useState('Monthly');
    const [addSelection, setAddSelection] = useState<addonType[]>([]);

    const [pageChange, setPageChange] = useState<boolean>(false);
 
    return(
        <ChoiceContext.Provider value={{ 
            planChoice, setPlanChoice, 
            planSelection, setPlanSelection,
            billingChoice, setBillingChoice,
            addSelection, setAddSelection,
            pageChange, setPageChange }}>
            {children}
        </ChoiceContext.Provider>
    )
}
