export class Student{
    constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public address: string,
    public phone: string,
    public active:boolean,
    public gradeAverage: number,
    public leavingDate?: Date
    ){}
}