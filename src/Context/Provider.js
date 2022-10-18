import React, { createContext } from 'react';
import useSupplier from '../Hook/useSupplier';

export const TextContext = createContext();

const TextProvider = ({children}) => {
    const allContext = useSupplier();
    return (
        <TextContext.Provider value={allContext}> 
            {children}
        </TextContext.Provider>
    );
};

export default TextProvider;