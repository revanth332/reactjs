function Row(props){
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.age}</td>
            <td>{props.gender}</td>
        </tr>
    )
}
export default Row;