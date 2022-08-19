import Row from './Row'

function Table(props){
    let data = [
        {
            name:"Revanth",
            age:20,
            gender:"male"
          },
          {
            name:"Rahul",
            age:23,
            gender:"male"
          },
          {
            name:"veer",
            age:24,
            gender:"male"
          } 
    ]
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                {
                  data.map(function(item,indx){
                    return (
                        <Row name={item.name} age={item.age} gender={item.gender} key={indx}/>
                    )
                  })  
                }
                </tbody>
            </table>
        </div>
    )
}
export default Table;