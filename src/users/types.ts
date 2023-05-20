export interface User{
    id?: string,
    username: string,
    name: string,
    password: string,
    gender:Gender, 
    role: Role,
    picture: string,
    description:string,
    accountStatus: AccountStatus,
    registerDate: Date,
    lastUpdatedDate: Date

}

export type Gender = "FEMALE" | "MALE" | "OTHER"
export type Role = "ADMIN" | "USER"
export type AccountStatus = "ACTIVE" | "DEACTIVATED" | "SUSPENDED"