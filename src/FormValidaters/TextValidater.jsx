

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