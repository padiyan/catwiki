import { useContext, useEffect } from "react";
import { ErrorContext } from "../../context/error";
import "./Error.css"

export default function Error () {
    const { error, setError } = useContext(ErrorContext);
    useEffect(() => {
        const timeoutHandler = setTimeout(() => {
            setError(false)
        }, 2000)
        return () => clearTimeout(timeoutHandler)
    }, [error])
    return (
        <>
            {error &&  <div className="error"><p>{error} Please try later</p></div>}
        </>
    )
}