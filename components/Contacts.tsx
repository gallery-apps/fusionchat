import { useSelector } from "react-redux";
import { User } from "../redux/types";
import { selectUserId, selectUsers } from "../redux/features/state-slice";

function Contacts({ path }: { path: string }) {
  const users = useSelector(selectUsers);
  const userId = useSelector(selectUserId);
  return (
    <div className="space-y-1">
      {users.map((u: User) => {
        if (userId === u.id) return null;
        return (
          <div
            key={u.id}
            className="flex items-center bg-gray-100 p-4 rounded-lg"
          >
            <div className="w-10 h-10 bg-teal-400 text-white flex items-center justify-center rounded-full mr-2">
              {u.username.charAt(0)}
            </div>
            <a
              href={`${path}/${u.id}`}
              className="text-teal-600 font-bold text-lg hover:underline"
            >
              {u.username}
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Contacts;
