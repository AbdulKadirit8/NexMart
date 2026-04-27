//Create record function to call API when record has only text data
export async function createRecord(collection, payload){
    try{
        let response =await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}`,{
            method:'POST',
            header:{
                'content-type':'application/json'
            },
            body: JSON.stringify(payload)
        })
        response=await response.json()
        return response
    } catch(error){
        console.log(error)
        return[]
    }
}

//Create record function to call API when record has only Form data i.e file field
export async function createMultipartRecord(collection, payload){
    try{
        let response =await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}`,{
            method:'POST',
            header:{
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

//get record function to call API 
export async function getRecord(collection, payload){
    try{
        let response =await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}`,{
            method:'GET',
            header:{
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
export async function updateRecord(collection, payload){
    try{
        let response =await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}/${payload.id}`,{
            method:'PUT',
            header:{
                'content-type':'application/json'
            },
            body: JSON.stringify(payload)
        })
        response=await response.json()
        return response
    } catch(error){
        console.log(error)
        return[]
    }
}

//Update record function to call API when record has only Form data
export async function updateMultipartRecord(collection, payload){
    try{
        let response =await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}/${payload.get('id')}`,{
            method:'PUT',
            header:{
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
            header:{
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