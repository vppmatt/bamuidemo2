import { User } from "./User";

export type AccessRecord = {
    id: number;
    user : User;
    time : string;
    building : string;
    status: boolean;
}

// export type ServerAccessRecord = {
//     id: number;
//     user : User;
//     time : string;
//     building : {id : number, name : string};
//     status: boolean;
// }

export type  ServerAccessRecord =  AccessRecord & {
    building : {id : number, name : string}
}