import { useEffect, useState, createContext } from "react";
import { Misdemeanour } from "../../types/misdemeanours.types";
import { CitizenIdList } from "./citizenIdList";
import { MisdemeanourList } from "./misdemeanourList";
import { DateList } from "./dateList";
import { PunishmentIdea } from "./punishmentIdea";

export const MisdemeanourContext = createContext<Array<Misdemeanour>>([{
    citizenId: 5674,
    misdemeanour: "rudeness",
    date: "19/09/2023"
}])

export const Misdemeanours : React.FC = () => {

    const [misdemeanours, setMisdemeanours] = useState<Array<Misdemeanour> | []>([]);

    useEffect(() => {
        const fetchMisdemeanour = async () =>{
            try{
                const response = await fetch("http://localhost:8080/api/misdemeanours/3");
                const data = await response.json();
                console.log('Hello: ' + JSON.stringify(data.));
                setMisdemeanours(data);
                console.log('Misdemeanours: ' + misdemeanours);
            }catch(error){
                console.log(error);
            }
        }
        fetchMisdemeanour();
    },[]);


    return (
        <div className="misdemeanour-list" style={{display: "flex"}}>
            {/* <MisdemeanourContext.Provider value={misdemeanours}> */}
            <CitizenIdList />
            <DateList />
            <MisdemeanourList />     
            <PunishmentIdea />
            {/* </MisdemeanourContext.Provider> */}
        </div>
    )
}
