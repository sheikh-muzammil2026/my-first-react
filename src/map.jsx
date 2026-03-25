export default function Dynamic() {

    const names = ["sakib", "josim", "karim", "rofik", "borkot"];

    return (
           <ul>
            {
                names.map(name=> <li key={name}>{name}</li> )
            }
            </ul>
            
       
    )
}