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

		{/* <h3>Misdemeanours</h3> */}
		 {/* {misdemeanourData.map(m => {
  	console.log(m.misdemeanour);
  	return (
			<ul><li>{m.misdemeanour}</li></ul>
  )
})}  */}
	<table>
			<tr>
			<th>Citizen ID</th>
			<th>Date</th>
			<th>Misdemeanours</th>
			</tr>          
			{misdemeanourData.map(m => {
			return (
			<tr>
			<td>{m.citizenId}</td>
			<td>{m.date}</td>
			<td>{m.misdemeanour}</td>
			</tr>
			)
			})}
	</table> 

	</div>
)};


