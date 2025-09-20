import { setSocioLocationId } from "./transientState.js"

const handleLocationChange = (changeEvent) => {
    if (changeEvent.target.name === "location") {
        const convertedToNumber = parseInt(changeEvent.target.value)
        setSocioLocationId(convertedToNumber)

    }

}



export const LocationChoices = async () => {

    const response = await fetch("http://localhost:8088/socioLocations")
    const locations = await response.json()

    document.addEventListener("change", handleLocationChange)


    let html = `
        <div class ="survey-input">
            <h2>What type of area do you live in?</h2>

    `

     const locationChoicesHTML = locations.map(
        (location) => {
            return `<input type ="radio" name ="location" value="${location.id}"/>${location.label}`

        }
    )
    
    html += locationChoicesHTML.join("")
    
    html += `
        </div>
    `
    return html 
}

