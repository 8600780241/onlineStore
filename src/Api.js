import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Main from "./Main"
const Api = () => {
    const [dat, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:1337/api/online-gaming-sells')
            .then((sell) => {
                setData(sell.data.data)
                console.log(sell.data.data)
            })
            .catch((e) => {
                console.log("error", e)
            })
    }, [])

    return <>
        <section><h1><b>Game Seller</b></h1>
            {
                dat.map((i, ke) => {
                    return <Main i={i.attributes} key={ke} />
                }
                )
            }
        </section>
    </>

}
export default Api