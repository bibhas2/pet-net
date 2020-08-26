import { AbstractControl } from '@angular/forms';

export function validateDomain(bannedDomains: string[]) {
    return function (control: AbstractControl) {
        if (control.value == undefined) {
            return null
        }

        let value = control.value as string

        if (bannedDomains.find(d => value.toLowerCase().endsWith(d))) {
            //Invalid
            let message = "The following domains not allowed: " + bannedDomains.join()

            return { invalidDomain: true, errorMessage: message }
        } else {
            //Valid
            return null
        }
    }
}