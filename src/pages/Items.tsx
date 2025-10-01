import { memo, useEffect, useState } from "react";
import api from "../api/fetchItems";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
};

const Items = () => {
  const getUsers = () => api.get("users");
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await getUsers();
        setUsers(res.data.users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <section className="px-4 sm:px-8 lg:px-16 py-12 sm:py-20">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="mb-12 text-3xl sm:text-4xl font-semibold text-white">
          Users
        </h2>

        <div className="grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-[30px]">
          {users.slice(0, 12).map((user) => (
            <div
              key={user.id}
              className="relative flex w-full max-w-[315px] h-[100px] items-center gap-4 rounded-3xl bg-[#3B3B3B] px-4 py-3 
                 sm:h-[238px] sm:max-w-[240px] sm:flex-col sm:justify-center sm:gap-0 sm:p-6"
            >
              <div
                className="absolute left-3 top-3 flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#2B2B2B] text-[11px] text-white/60 
                      sm:left-5 sm:top-5 sm:h-[30px] sm:w-[30px] sm:text-sm"
              >
                {user.id}
              </div>

              <div
                className="h-[60px] w-[60px] flex-shrink-0 overflow-hidden rounded-full 
                      sm:mb-5 sm:h-[120px] sm:w-[120px]"
              >
                <img
                  src={user.image}
                  alt={`${user.firstName} ${user.lastName}`}
                  className="h-full w-full object-cover"
                />
              </div>

              <div
                className="flex flex-1 flex-col justify-center 
                      sm:items-center sm:text-center"
              >
                <h3 className="mb-1 text-base font-semibold text-white sm:mb-2 sm:text-xl">
                  {user.firstName} {user.lastName}
                </h3>
                <p className="text-xs text-white/60 sm:text-sm break-all">
                  <span className="text-white/40">Email: </span>
                  <span className="text-white/80">{user.email}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Items);
