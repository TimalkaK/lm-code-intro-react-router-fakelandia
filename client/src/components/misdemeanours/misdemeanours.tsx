import { useEffect, useState, createContext } from "react";
import { Misdemeanour } from "../../types/misdemeanours.types";
import { CitizenIdList } from "./citizenIdList";
import { DateList } from "./dateList";
import { MisdemeanourList } from "./misdemeanourList";

export const MisdemeanourContext = createContext<Misdemeanour>({
    citizenId: 1330,
    misdemeanour: "rudeness",
    date: '19/09/2023'
})

export const Misdemeanours : React.FC = () => {

    const [misdemeanour, setMisdemeanour] = useState<Misdemeanour>({
        citizenId : 1330,
        misdemeanour: "rudeness",
        date: '19/09/2023'
    });

    useEffect(() => {
        const fetchMisdemeanour = async () =>{
            try{
                const response = await fetch("http://localhost:8080/api/misdemeanours/3");
                const data = await response.json();
                setMisdemeanour(data);
            }catch(error){
                console.log(error);
            }
        }
        fetchMisdemeanour();
    },[misdemeanour]);


    return (
        <div className="misdemeanour-container" style={{display: "flex"}}>
            <MisdemeanourContext.Provider value={misdemeanour}>
            <CitizenIdList />
            <DateList />
            <MisdemeanourList />
            </MisdemeanourContext.Provider>
        </div>
    )
}


