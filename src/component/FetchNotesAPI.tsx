import { useEffect, useState } from "react";

const FetchNotesAPI = ({url}: FetchNotesAPIProps) => {
    // je vais revenir dessus après le chapitre sur les requêtes https 
    //je vais aussi devoir injecter react router 
    const [data, setData] = useState([] as any[])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(url, {
            method: "GET",
            headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
        }).then(res => {
            if (!res.ok) throw new Error('Unable to fetch data')
            return res;
        }).then(async res => {
            const _data = await res.json()
            setData(_data)
            console.log(_data)
        }
        )
            .catch(error => {
                setError(error)
                console.error(error)
            })
            .finally(() => setIsLoading(false))

    }, [])


    return (<>{!isLoading && !error && data.map(element => <p key={element}> {element.priorité}</p>)}</> );
}

type FetchNotesAPIProps = {
    url: string
}
 
export default FetchNotesAPI;