// import React from 'react'

// export default function TextValidater(e) {
//     let { name, value } = e.target
//     switch (name) {
//         case "name":
//             if (!value || value.length === 0)
//                 return name + "Field is Mendatory"

//             else if (value.length < 3 || value.length> 100)
//                 return name + " Field Length Must Be 3-100 Charectors"

//             else
//                 return ""
//         default:
//             return ""


//     }
// }

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

        default:
            return ""
    }
}