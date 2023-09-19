import { useContext } from 'react';
import { MisdemeanourContext } from './misdemeanours';

export const CitizenIdList: React.FC = () => {
	const misdemeanourData = useContext(MisdemeanourContext);

	return <div>{misdemeanourData.citizenId}</div>;
};