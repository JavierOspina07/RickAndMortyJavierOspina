import axios from "axios"
import { useState } from "react"

const useFetch = () => {

    const [infoApi, setInfoApi] = useState()
    const [hasError, setHasError] = useState(false)
    const [isLoading, setisLoading] = useState(true)

    const getApi = () => {
        setisLoading(true)
        axios.get(url)
            .then(res => {
                setInfoApi(res.data)
                setHasError(false)
            })
            .catch(err => {
                console.log(err)
                setHasError(true)
            })
            .finally(() => setisLoading(false))
    }

    return [infoApi, getApi, hasError, isLoading]
}

export default useFetch