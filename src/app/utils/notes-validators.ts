import { AbstractControl } from "@angular/forms";

export class NotesValidator {
  static lowercaseOnly(control: AbstractControl) {
    if (!control.value) {
      return null; // null means no error
    } else {
      if (/[A-Z]/.test(control.value)) {
          // returns error of type lowercaseonly
          // here lowercaseonly is a unique key to indentify this error
          return { lowercaseonly:true };
        } else {
            return null; // null means no error
      }
    }
  }
}
