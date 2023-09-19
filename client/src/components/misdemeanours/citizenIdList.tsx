import { useContext } from 'react';
import { MisdemeanourContext } from './misdemeanours';

export const CitizenIdList: React.FC = () => {
const misdemeanourData = useContext(MisdemeanourContext);

return(
<div>
  <h3>Citizen ID</h3>
  {JSON.stringify(misdemeanourData)}
  </div>
)};