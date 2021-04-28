import validator from "validator";
import { Validator } from "../contracts/validator";

export class EmailValidator implements Validator {
    constructor(private readonly fieldName: string) { }
    validate(data: any): Error | void {
        const isValid = validator.isEmail(data[this.fieldName])
        if (!isValid) {
            return new Error(`${this.fieldName} é um campo inválido!`)
        }
    }
}