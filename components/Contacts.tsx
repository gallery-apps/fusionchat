import { User } from "@prisma/client";

function Contacts({ users, path, userId, username }: { users: User[]; path: string; userId: string, username: string }) {
  return (
    <div className="space-y-4">
      {users.map((currentUser: User) => {
        if (currentUser.id === userId) return null;
    
        return (
          <div key={userId} className="flex items-center bg-gray-200 p-4 rounded-lg">
            <div className="w-10 h-10 bg-teal-500 text-white flex items-center justify-center rounded-full mr-4">
              {username.charAt(0)}
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
