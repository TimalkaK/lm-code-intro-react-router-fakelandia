import { useEffect, useState, createContext } from "react";
import { Misdemeanour } from "../../types/misdemeanours.types";
import { MisdemeanourList } from "./misdemeanourList";
import { PunishmentIdea } from "./punishmentIdea";

export const MisdemeanourContext = createContext<Array<Misdemeanour>>([{
    citizenId: 5674,
    misdemeanour: "rudeness",
    date: "19/09/2023",
}])

export const Misdemeanours : React.FC = () => {

    const [misdemeanours, setMisdemeanours] = useState<Array<Misdemeanour>>();
    const [isFetching, setIsFetching ] = useState(true);

    useEffect(() => {
        const fetchMisdemeanour = async () =>{
            try{
                const response = await fetch("http://localhost:8080/api/misdemeanours/3");
                const data = await response.json();
                setIsFetching(false)
                setMisdemeanours(data.misdemeanours);
            } catch(error){
                console.log(error);
            }
        }
        if(isFetching) {
            fetchMisdemeanour();
        }
    },[isFetching, misdemeanours]);

    console.log("mis:",misdemeanours)
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
