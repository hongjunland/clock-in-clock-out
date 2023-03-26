import { userData } from "../dummy/dummyData";

async function fetchUser() {
  await new Promise((re) => setTimeout(re, 100));
  const user = userData;
  return user;
}
export const userAPI = {
  fetchUser,
};
