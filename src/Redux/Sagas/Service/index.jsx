//Create record function to call API when record has only text data
// export async function createRecord(collection, payload){
//     try{
//         let response =await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}`,{
//             method:'POST',
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
// export async function createRecord(collection, payload) {
//     try {

//         let formData = new FormData();

//         formData.append("name", payload.name);
//         formData.append("pic", payload.pic);
//         formData.append("status", payload.status);

//         let response = await fetch(
//             `${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}`,
//             {
//                 method: "POST",
//                 body: formData
//             }
//         );

//         response = await response.json();

//         return response;

//     } catch (error) {
//         console.log(error);
//         return [];
//     }
// }
//Create record function to call API when record has only Form data i.e file field
// export async function createMultipartRecord(collection, payload){
//     try{
//         let response =await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}`,{
//             method:'POST',
//             headers:{
//             },
//             body: payload
//         })
//         response=await response.json()
//         return response
//     } catch(error){
//         console.log(error)
//         return[]
//     }
// }
export async function createRecord(collection, payload) {
    try {

        let response = await fetch(
            `${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}`,
            {
                method: "POST",
                body: payload
            }
        );

        return await response.json();

    } catch (error) {
        console.log(error);
        return [];
    }
}
export async function createMultipartRecord(collection, payload){
    try{
        console.log("API Call Chali");
        console.log(collection);
        console.log(payload);

        let response = await fetch(
            `${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}`,
            {
                method:'POST',
                body: payload
            }
        )

        response = await response.json()
        return response
    } catch(error){
        console.log(error)
        return []
    }
}
//get record function to call API 
export async function getRecord(collection){
    try{
        let response =await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}`,{
            method:'GET',
            headers:{
                'content-type':'application/json'
            }            
        })
        response=await response.json()
        return response
    } catch(error){
        console.log(error)
        return[]
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
        let response = await fetch(
            `${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}/${payload.get("id")}`,
            {
                method: 'PUT',
                body: payload
            }
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
export async function updateMultipartRecord(collection, payload){
    try{
        let response =await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}/${payload.get('id')}`,{
            method:'PUT',
            headers:{
            },
            body: payload
        })
        response=await response.json()
        return response
    } catch(error){
        console.log(error)
        return[]
    }
}

//Delete record function to call API when record has only text data
export async function deleteRecord(collection, payload){
    try{
        let response =await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}/${payload.id}`,{
            method:'DELETE',
            headers:{
                'content-type':'application/json'
            }
        })
        response=await response.json()
        return response
    } catch(error){
        console.log(error)
        return[]
    }
}