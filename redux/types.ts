export interface User  {
  id: string;
  name: string;
  username: string;
  onboarded: Boolean;
  image: string;
};

export interface UserAuthenticated extends User {
  path: string;
}
