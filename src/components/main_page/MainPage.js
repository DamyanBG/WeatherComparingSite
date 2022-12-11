import "./Main.scss"

function MainPage() {
    const currentLocation = "Dobrich"
    const currentTemperature = "15 °C"

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