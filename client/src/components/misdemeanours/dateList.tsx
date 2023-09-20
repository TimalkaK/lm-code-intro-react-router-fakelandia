import { useContext } from 'react';
import { MisdemeanourContext } from './misdemeanours';

export const DateList: React.FC = () => {
	const misdemeanourData = useContext(MisdemeanourContext);
return(
	<div>
		<h3>Date</h3>
		<ul><li>{JSON.stringify(misdemeanourData)}</li></ul>
		</div>
	)};