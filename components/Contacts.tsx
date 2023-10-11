import { User } from "@/lib/actions/user.actions";

function Contacts({ users, path }: { users: User[]; path: string }) {
  return (
    <div className="space-y-4">
      {users.map((user: User) => {
        let currentUser: User = {
          id: user.id,
          username: user.username,
          name: user.name,
          image: user.image,
          path: user.path,
        };
        return (
          <div key={user.id} className="flex items-center bg-gray-200 p-4 rounded-lg">
            <div className="w-10 h-10 bg-teal-500 text-white flex items-center justify-center rounded-full mr-4">
              {user.username.charAt(0)}
            </div>
            <a href={`${path}/${currentUser.id}`} className="text-teal-500 font-bold text-lg">
              {currentUser.username}
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Contacts;
