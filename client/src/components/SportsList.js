import { useEffect, useState } from "react";

const SportsList = () => {

    const [sports, setSports] = useState([])
    useEffect(() => {
        fetch('/sports')
            .then(res => res.json())
            .then((data) => {
            console.log(data);
            setSports(data)
        })
    }, [])
    

    return (
        <h1>Yup. Sports</h1>
    )
}

export default SportsList