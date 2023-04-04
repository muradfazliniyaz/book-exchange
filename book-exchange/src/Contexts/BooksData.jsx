import { createContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    return (
        <GlobalContext.Provider value={{deger: "Murat KILIÇ"}}>
            {props.children}
        </GlobalContext.Provider>


    );
;}