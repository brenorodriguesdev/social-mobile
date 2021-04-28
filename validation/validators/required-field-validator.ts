import { Validator } from "../contracts/validator";

export class RequiredFieldValidator implements Validator {
    constructor(private readonly fieldName: string) { }
    validate(data: any): Error | void {
        if (!data[this.fieldName]) {
            return new Error(`${this.fieldName} é um campo obrigatório!`)
        }
    }
}