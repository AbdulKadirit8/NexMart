import PasswordValidator from "password-validator"
// Create a schema
var schema = new PasswordValidator();

// Add properties to it
schema
    .is().min(8)                                    // Minimum length 8
    .is().max(100)                                  // Maximum length 100
    .has().uppercase(1)                             // Must have at least 1 uppercase letters
    .has().lowercase(1)                             // Must have at least 1 lowercase letters
    .has().digits(1)                                // Must have at least 1 digits
    .has().symbols(1)                               // Must have at least 1 special symbole
    .has().not().spaces()                           // Should not have spaces
    .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values

export default function TextValidater(e) {
    let { name, value } = e.target


    switch (name) {
        case "name":
        case "username":
            if (!value || value.length === 0)
                return name + " Field is Mandatory"

            else if (value.length < 3 || value.length > 100)
                return name + " Field Length Must Be 3-100 Characters"

            else
                return ""

        case "email":
            if (!value || value.length === 0)
                return name + " Field is Mandatory"

            else if (value.length < 13 || value.length > 100)
                return name + " Field Length Must Have at least 13 Charactors"

            else
                return ""

        case "password":
            if (!value || value.length === 0)
                return name + " Field is Mandatory"

            else if (!schema.validate(value))
                return schema.validate(value, { details: true }).map(x => x.message.replaceAll("string", "password")).join("|")
            else
                return ""

        case "phone":
            if (!value || value.length === 0)
                return name + " Field is Mandatory"

            else if (value.length < 10 || value.length > 10)
                return name + " Field Length Must Be 10 Characters"
            else if (!(["6", "7", "8", "9"].includes(value[0])))
                return "Invalid Phone Number"

            else
                return ""

        case "basePrice":
            if (!value || value.length === 0)
                return name + " Field is Mandatory"

            else if (parseInt(value) < 1)
                return "Price must be 1 or more then 1"

            else
                return ""

        case "discount":
            if (!value || value.length === 0)
                return name + " Field is Mandatory"

            else if (parseInt(value) < 0 || parseInt(value) > 100)
                return "Discount must be in range 0% to 100%"

            else
                return ""

        case "stockQuantity":

            if (!value || value.length === 0)
                return name + " Field is Mandator"

            else if (parseInt(value) < 0)
                return "StockQuantity must be between 0 to 100"

            else
                return ""

        case "description":
        case "answer":
            if (!value || value.length === 0)
                return name + " Field is Mandatory"

            else if (value.length < 50)
                return name + " Field Length Must Be 50 Characters or more"

            else
                return ""



        case "question":
            if (!value || value.length === 0)
                return name + " Field is Mandatory"

            else if (value.length < 20)
                return name + " Field Length Must Be 20 Characters or more"

            else
                return ""

        default:
            return ""
    }
}