

import React from 'react'

export default function TextValidater(e) {
    let { name, value } = e.target
    

    switch (name) {
        case "name":
            if (!value || value.length === 0)
                return name + " Field is Mandatory"

            else if (value.length < 3 || value.length > 100)
                return name + " Field Length Must Be 3-100 Characters"

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