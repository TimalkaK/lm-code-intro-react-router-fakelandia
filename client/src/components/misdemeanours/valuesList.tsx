export interface ValuesListProps{
  citizenID: number;
  date: string;
  misdemeanour: string;
}

export const ValuesList: React.FC<ValuesListProps> = (props) => {
  return(
    <tr>
    <td>{props.citizenID}</td>
    <td>{props.date}</td>
    <td>{props.misdemeanour}</td>
    <td><img alt='random punishment idea' src="https://picsum.photos/120/120"></img></td>
    </tr>
    )
  };