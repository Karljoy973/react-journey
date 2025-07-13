// je ne vais pas me casser la tete, je vais mettre un délais satique dans useFetch pour simuler l'asynchronisme.

import { useEffect, useState } from "react"; 

export  function useFetch (url: string, options?: any) : UseFetch  {
    const [loading, setLoading] = useState(false); 
    const [data, setData] = useState(null); 
    const [error, setError] = useState(null)
    useEffect(() => {
        setTimeout(() => {

            fetch(url, {
                'Accept': 'application/json; charset=UTF-8',
                ...options.headers,
            }).then(res => res.json()).then(data => {
                setLoading(false);
                setData(data)
            }).finally(() => {
                setLoading(false)
            })  
            .catch(err => {
                setLoading(false)
                setError(err)
            })
        }, 5000)

    }, [])
    
    return {
        loading, 
        data,
        error
    }
}

export type UseFetch = {
    loading: boolean, 
    data: {id: string, title: string,userId: string, body:string}[]| null,
    error: null | Error; 
}

