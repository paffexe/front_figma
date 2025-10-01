import { memo, useEffect, useState } from "react";
import api from "../api/fetchItems";
// import Users from "./Users";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
};

const Items = () => {
  const getUsers = () => api.get("users");
  const [users, setUsers] = useState<User[]>([]);


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await getUsers();
        // console.log(res.data.users);
        setUsers(res.data.users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <div>
        {users.slice(0, 10).map((p) => (
          <div key={p.id} className="flex items-center justify-center gap-3">
            <h3>{p.id}</h3>

            <h3>{p.firstName}</h3>
            <h3>{p.lastName}</h3>
            <h3>{p.email}</h3>
          </div>
        ))}
      </div>
      {/* <Users data={users} /> */}
      {/* <div className="flex gap-5">
        <span>{count}</span>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{ border: "solid 1px black" }}
        />
        <button
          onClick={() => setValue("") }
          className="bg-slate-700"
        >
          Reset
        </button>
        <button
          onClick={() => setCount(Number(value) ?  + count : 10 + count )}
          className="bg-green-700"
        >
          Inc
        </button>
        <button onClick={() => setCount(count - 1)} className="bg-blue-800">
          Dec
        </button>
        <button onClick={() => setCount(0)} className="bg-red-800">
          Reset
        </button>
      </div> */}
    </div>
  );
};

export default memo(Items);
