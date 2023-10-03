import { useContext, useState } from 'react';
import { MisdemeanourContext } from './misdemeanours';
import { Misdemeanour } from "../../types/misdemeanours.types";
import { ValuesList } from './valuesList';


export const MisdemeanourList: React.FC = () => {
	const misdemeanourData = useContext(MisdemeanourContext);

	const [filteredList, setFilteredList] = useState<Array<Misdemeanour>>(misdemeanourData);

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) =>{
		let value = event.target.value;
		if (value === "rudeness" || value === "vegetables" || value === "lift" || value === "united"){
			const filter = misdemeanourData.filter(m => {
				return m.misdemeanour === value;
			})
			setFilteredList(filter);
	}else{
			setFilteredList(misdemeanourData);
	}}


	return (
	<div>
	<table>
		<tbody>
			<tr>
			<td></td>
			<td></td>
			<td>
			<select name="misdemeanourFilter" id="misdemeanourFilter" defaultValue="Filter" onChange={handleChange}>
				<option value="Filter">Filter</option>
				<option value="ViewAll">View All</option>
				<option value="rudeness">Rudeness</option>
				<option value="vegetables">Vegetables</option>
				<option value="lift">Lift</option>
				<option value="united">United</option>
			</select>
			</td>
			<td></td>
			</tr>
			<tr>
			<th>Citizen ID</th>
			<th>Date</th>
			<th>Misdemeanours</th>
			<th>Punishment Idea</th>
			</tr>  
			{filteredList.map(f => {
				return(<ValuesList key={f.citizenId} citizenID={f.citizenId} date={f.date} misdemeanour={f.misdemeanour}/>)
			})}
			</tbody>
	</table> 

	</div>
)}