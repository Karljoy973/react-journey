import { useEffect, useRef} from 'react'

export function useDocumentTitle(title: string | null) {
    const titleRef = useRef(document.title)
    useEffect(() => {
        if (!!title) document.title = title;
        else document.title = titleRef.current; 
    }, [title])
    useEffect(() => {
        const originalTitle = document.title ?? titleRef.current; 
        return () => {titleRef.current}
}, [])
}