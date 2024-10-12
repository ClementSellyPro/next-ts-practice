'use client'

import { createContext, Dispatch, SetStateAction, useState } from "react";

interface ContextType {
    planChoice: string,
    setPlanChoice: Dispatch<SetStateAction<string>>
}

const ChoiceContext = createContext<ContextType>({
    planChoice: '',
    setPlanChoice: () => {}
});

export default ChoiceContext;


export const ChoiceContextProvider = ({children} : {children: React.ReactNode}) => {
    const [planChoice, setPlanChoice] = useState<string>('');

    return(
        <ChoiceContext.Provider value={{ planChoice, setPlanChoice }}>
            {children}
        </ChoiceContext.Provider>
    )
}
