export class Student{
    constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public address: string,
    public phone: string,
    public active:boolean,
    public gradeAverage: number,
    public leavingDate?: Date,
    public subjects?: string,
    public year?: year
    ){}
}
export enum year{
    FIRST_YEAR = 1,
    SECOND_YEAR = 2,
    THIRD_YEAR = 3
}