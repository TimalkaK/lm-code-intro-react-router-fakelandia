import { SelectHTMLAttributes, useContext } from 'react';
import { MisdemeanourContext } from './misdemeanours';


export const MisdemeanourList: React.FC = () => {
	const misdemeanourData = useContext(MisdemeanourContext);

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) =>{
		let value = event.target.value;
		if (value === "rudeness" || value === "vegetables" || value === "lift" || value === "united"){
			console.log("a misdemeanour");
			// filter the array
			const filter = misdemeanourData.filter(m => {
				return m.misdemeanour === value;
			})
			console.log(filter);

		}else{
			console.log(value);
		}
	}


	return (
	<div>
	<table>
			<tr>
			<td></td>
			<td></td>
			<select name="misdemeanourFilter" id="misdemeanourFilter" defaultValue="Filter" onChange={handleChange}>
				<option value="Filter">Filter</option>
				<option value="ViewAll">View All</option>
				<option value="rudeness">Rudeness</option>
				<option value="vegetables">Vegetables</option>
				<option value="lift">Lift</option>
				<option value="united">United</option>
			</select>
			<td></td>
			</tr>
			<tr>
			<th>Citizen ID</th>
			<th>Date</th>
			<th>Misdemeanours</th>
			<th>Punishment Idea</th>
			</tr>          
			{misdemeanourData.map(m => {
			return (
			<tr>
			<td>{m.citizenId}</td>
			<td>{m.date}</td>
			<td>{m.misdemeanour}</td>
			<td><img alt='random punishment idea' src="https://picsum.photos/120/120"></img></td>
			</tr>
			)
			})}
	</table> 

	</div>
)};


