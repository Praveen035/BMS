import { BaseModel } from "src/app/common/models/base-model";

export class Employee extends BaseModel {
    employeeId: string;
    employeeName: string;
    department: string;
    emailId: string;
    employeeDoj: Date;
}
