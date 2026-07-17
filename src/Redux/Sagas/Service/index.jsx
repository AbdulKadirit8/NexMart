
export async function createRecord(collection, payload) {
    try {
        let options = {
            method: "POST"
        };

        if (payload instanceof FormDat) {

            options.body = payload;

        } else {

            options.headers = {
                "Content-Type": "application/json"
            };

            options.body = JSON.stringify(payload);
        }
        let response = await fetch(
            `${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}`,
            options
        );

        return await response.json();

    } catch (error) {
        console.log(error);
        return [];
    }
}
export async function createMultipartRecord(collection, payload) {
    try {
        let response = await fetch(
            `${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}`,
            {
                method: 'POST',
                body: payload
            }
        )

        response = await response.json()
        return response
    } catch (error) {
        console.log(error)
        return []
    }
}
//get record function to call API 
export async function getRecord(collection) {
    try {
        let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
        response = await response.json()
        return response
    } catch (error) {
        console.log(error)
        return []
    }
}

//Update record function to call API when record has only text data
// export async function updateRecord(collection, payload){
//     try{
//         let response =await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}/${payload.id}`,{
//             method:'PUT',
//             headers:{
//                 'content-type':'application/json'
//             },
//             body: JSON.stringify(payload)
//         })
//         response=await response.json()
//         return response
//     } catch(error){
//         console.log(error)
//         return[]
//     }
// }
export async function updateRecord(collection, payload) {
    try {
        let id;
        let options = {
            method: "PUT"
        };

        if (payload instanceof FormData) {

            id = payload.get("id");
            options.body = payload;

        } else {

            id = payload.id;
            options.headers = {
                "Content-Type": "application/json"
            };
            options.body = JSON.stringify(payload);
        }
        let response = await fetch(
            `${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}/${id}`,
            options
        )

        response = await response.json()
        return response
    }
    catch (error) {
        console.log(error)
        return []
    }
}
//Update record function to call API when record has only Form data
export async function updateMultipartRecord(collection, payload) {
    try {
        let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}/${payload.get('id')}`, {
            method: 'PUT',
            headers: {
            },
            body: payload
        })
        response = await response.json()
        return response
    } catch (error) {
        console.log(error)
        return []
    }
}

//Delete record function to call API when record has only text data
export async function deleteRecord(collection, payload) {
    try {
        let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}/${payload.id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
        response = await response.json()
        return response
    } catch (error) {
        console.log(error)
        return []
    }
}