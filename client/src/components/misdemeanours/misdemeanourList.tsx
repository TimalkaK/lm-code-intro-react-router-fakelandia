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

	<table>
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


