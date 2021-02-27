export const client = {
    get: async (url) => {
        let data
        try{
            const res = await fetch("http://localhost:5000/tasks")
            data = await res.json()
            if (res.ok){
                return data
            }
            throw new Error(res.statusText)
        } catch (err){
            return Promise.reject(err.message ?  err.message : data)
        }
    },
    post: async (url,json) => {
        let data        
        try{
            const res = await fetch(url,
            {
                method: 'POST',
                body: JSON.stringify({ ...json }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                }
            })
            data = await res.json()
            if( res.ok ){
                return data
            }

            throw new Error (res.statusText)

        }catch (err){
            return Promise.reject(err.message ? err.message : data)
        }
    },

    put: async (url,json) => {
        let data        
        try{
            const res = await fetch(url,
            {
                method: 'PUT',
                body: JSON.stringify({ ...json }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                }
            })
            data = await res.json()
            if( res.ok ){
                return data
            }

            throw new Error (res.statusText)

        }catch (err){
            return Promise.reject(err.message ? err.message : data)
        }
    },
    delete: async (url) => {
        let data        
        try{
            const res = await fetch(url,
            {
                method: 'DELETE',                
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                }
            })
            data = await res.json()
            if( res.ok ){
                return data
            }

            throw new Error (res.statusText)

        }catch (err){
            return Promise.reject(err.message ? err.message : data)
        }
    }
}

