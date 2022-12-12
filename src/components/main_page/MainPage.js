import "./Main.scss"
import { ABSTRACT_API_KEY } from "../../utils/const"
import { useEffect, useState } from "react"

function MainPage() {
    const [currentLocation, setCurrentLocation] = useState("")
    const currentTemperature = "15 °C"

    useEffect(() => {
        getGeoInfo()
    }, [])

    const getGeoInfo = () => {
        fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=${ABSTRACT_API_KEY}`)
            .then(resp => resp.json())
            .then(json => {
                console.log(json)
                setCurrentLocation(json.city)
            })
    }

    return (
        <div>
            <section>
                <article>
                    <p>Your current location:</p>
                    <p>{currentLocation}</p>
                </article>
                <article>
                    <p>Current temperature:</p>
                    <p>{currentTemperature}</p>
                </article>
            </section>
        </div>
    )
}

export default MainPage