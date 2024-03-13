import { atom } from "recoil";
import usersData from "../../data/data.json";

export const commentsState = atom({
    key: "CommentsState",
    default: usersData.comments,
});