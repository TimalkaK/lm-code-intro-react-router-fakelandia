import { useContext } from 'react';
import { MisdemeanourContext } from './misdemeanours';

export const DateList: React.FC = () => {
	const misdemeanourData = useContext(MisdemeanourContext);

	return <div>{misdemeanourData.date}</div>;
};