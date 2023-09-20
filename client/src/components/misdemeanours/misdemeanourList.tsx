import { useContext } from 'react';
import { MisdemeanourContext } from './misdemeanours';

export const MisdemeanourList: React.FC = () => {
	const misdemeanourData = useContext(MisdemeanourContext);

	return (
	<div>
		<select name="misdemeanourFilter" id="misdemeanourFilter">
    <option value="Filter" selected>Filter</option>
    <option value="View">View 1</option>
		<option value="ViewAll">View All</option>
		</select>
		<h3>Misdemeanours</h3>
		<ul><li>{JSON.stringify(misdemeanourData)}</li></ul>
		</div>
)};


