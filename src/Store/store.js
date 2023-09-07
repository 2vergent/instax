import { atom} from "recoil";

const userName = atom({
    key: 'userName',
    default: {}
});

const userID = atom({
    key: 'userID',
    default: {}
});

export {userName, userID};