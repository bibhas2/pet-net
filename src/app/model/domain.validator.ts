import { AbstractControl } from '@angular/forms';

export function validateDomain(bannedDomains: string[]) {
    return function (control: AbstractControl) {
        if (control.value == undefined) {
            return null
        }

        let value = control.value as string

        if (bannedDomains.find(d => value.toLowerCase().endsWith(d))) {
            //Invalid
            return { valid: false, message: "Invalid domain" }
        } else {
            //Valid
            return null
        }
    }
}