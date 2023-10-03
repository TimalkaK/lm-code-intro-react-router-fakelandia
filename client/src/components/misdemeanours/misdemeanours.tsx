import { createContext } from "react";
import { Misdemeanour } from "../../types/misdemeanours.types";
import { MisdemeanourList } from "./misdemeanourList";
import useMisdemeanours from "../../useMisdemeanours";

export const MisdemeanourContext = createContext<Array<Misdemeanour>>([{
    citizenId: 5674,
    misdemeanour: "rudeness",
    date: "19/09/2023",
}])



export const Misdemeanours : React.FC = () => {

    const {misdemeanours, isFetching} = useMisdemeanours();

    return (
        <>
        {isFetching && <p>loading</p>}
        {(!isFetching && misdemeanours) &&   
        <div className="misdemeanour-list" style={{display: "flex"}}>
            <MisdemeanourContext.Provider value={misdemeanours}>
                <MisdemeanourList/>
            </MisdemeanourContext.Provider>
        </div>}
        </>
    )
}
