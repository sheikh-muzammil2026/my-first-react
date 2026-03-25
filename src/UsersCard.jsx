import { use } from "react";
import UsersData from "./usersData";

export default function UsersCard({userPromises}) {

  const data =use(userPromises)
  console.log(data);
    return(
        <div className="card">
            <h3>Total {data.length} users</h3>
            {
                data.map(user => <UsersData key={user.id} user={user}></UsersData> )
            }
        </div>
    )
}