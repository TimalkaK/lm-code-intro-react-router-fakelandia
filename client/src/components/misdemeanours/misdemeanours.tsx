import { useEffect, useState, createContext } from "react";
import { Misdemeanour } from "../../types/misdemeanours.types";
import { CitizenIdList } from "./citizenIdList";
import { MisdemeanourList } from "./misdemeanourList";
import { DateList } from "./dateList";

export const MisdemeanourContext = createContext<Misdemeanour>({
    citizenId: 5674,
    misdemeanour: "rudeness",
    date: "19/09/2023"
})

export const Misdemeanours : React.FC = () => {

    const [misdemeanours, setMisdemeanours] = useState<Misdemeanour>({
        citizenId: 5674,
        misdemeanour: "rudeness",
        date: "19/09/2023"
    });

    useEffect(() => {
        const fetchMisdemeanour = async () =>{
            try{
                const response = await fetch("http://localhost:8080/api/misdemeanours/3");
                const data = await response.json();
                setMisdemeanours(data);
                console.log(misdemeanours);
            }catch(error){
                console.log(error);
            }
        }
        fetchMisdemeanour();
    },[]);


    return (
        <div className="misdemeanour-list" style={{display: "flex"}}>
            <MisdemeanourContext.Provider value={misdemeanours}>
            <CitizenIdList />
            <DateList />
            <MisdemeanourList />     
            </MisdemeanourContext.Provider>
        </div>
    )
}
