import { fetchUsers } from "../../../actions/userAction_43";
import DeleteButton_43 from "./DeleteButton_43";

const UserList_43 = async () => {
  const users = await fetchUsers();
  console.log(users);
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.email}
          <DeleteButton_43 id={user.id} />
        </li>
      ))}
    </ul>
  );
};

export default UserList_43;
