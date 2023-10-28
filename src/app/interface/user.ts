export interface User {
    id: number;
    firstName: string;
    lastName: string;
    roleID: number;
    email:string;
    password:string;
    balance?:number
}
