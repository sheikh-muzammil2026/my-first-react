export default function UsersData({ user }) {
    return(
        <div className="card">
            <h4>Name: {user.name}</h4>
            <p>ID: {user.id} </p>
            <p>Email: {user.email}</p>
            <p>Address: </p>
            <p>Phone: {user.phone} </p>
            <p>Website: {user.website} </p>
        </div>
    )
}