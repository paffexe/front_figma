import { memo } from "react";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
};

type UserProps = {
  data: User[];
};

const Users = (props: UserProps) => {
  const { data } = props;
  return (
    <div className="flex items-center justify-center bg-amber-500 flex-col">
      <h3 className="bg-blue-400 w-full text-center">Props users</h3 >
      {data?.map((p) => (
        <span key={p.id}>{p.lastName}</span>
      ))}
    </div>
  );
};

export default memo(Users);
