import usersData from "../data/data.json";

function useCurrentuser(username: string) {
  return {
    isCurrentUser: username == usersData.currentUser.username,
  }
}

export default useCurrentuser