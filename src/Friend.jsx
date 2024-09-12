

export default function Friend({friend}){
    const{name,email} = friend;
   const style ={
    margin: '15px',
    padding : '15px',
    border:'2px solid greenyellow',
    borderRadius: '10px'
   }
    return(
        <div style={style}>
            <h3>Name: {name}</h3>
            <h3>Email: {email}</h3>
        </div>
    )
}