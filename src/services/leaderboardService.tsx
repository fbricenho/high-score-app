import { getRequest, postRequest } from "./requestService";
import { User } from "types";

const getLeaderboard = () => {
  return getRequest("/leaderboard").then((response) => response.data);
};

const pushNewEntryLeaderboard = (user: User) => {
  return postRequest("/leaderboard", user).then((response) => response.data);
};

export default {
  getLeaderboard,
  pushNewEntryLeaderboard
};
