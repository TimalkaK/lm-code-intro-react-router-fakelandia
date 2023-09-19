import { useContext } from 'react';
import { MisdemeanourContext } from './misdemeanours';

export const PunishmentIdea: React.FC = () => {
const misdemeanourData = useContext(MisdemeanourContext);


return(
  <div>
    <h3>Punishment Idea</h3>
    <img alt='random punishment idea' src='https://picsum.photos/120/120'></img>
    </div>
  )};