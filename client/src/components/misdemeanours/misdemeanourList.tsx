import { useContext } from 'react';
import { MisdemeanourContext } from './misdemeanours';

export const MisdemeanourList: React.FC = () => {
	const misdemeanourData = useContext(MisdemeanourContext);

	return (
	<div>
		{misdemeanourData.misdemeanour}
		<select name="misdemeanourFilter" id="misdemeanourFilter">
    <option value="Filter" selected>Filter</option>
    <option value="View1">View 1</option>
		<option value="ViewAll">View All</option>
		</select>
		</div>
)};