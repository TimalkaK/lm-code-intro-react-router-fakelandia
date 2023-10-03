import { useState, useEffect} from "react";
import { Misdemeanour } from "./types/misdemeanours.types";

const useMisdemeanours = () => {

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

    return {misdemeanours, isFetching}

}

export default useMisdemeanours;