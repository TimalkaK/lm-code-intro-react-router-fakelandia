export interface ValuesListProp{
  citizenID: number | null;
  date: string;
  misdemeanour: string;
}

export const ValuesList: React.FC<ValuesListProp> = (props) => {
  return(
    <tr>
    <td>{props.citizenID}</td>
    <td>{props.date}</td>
    <td>{props.misdemeanour}</td>
    <td><img alt='random punishment idea' src="https://picsum.photos/120/120"></img></td>
    </tr>
    )
  };