const transientState = {
    ownsBlueJeans: null,
    socioLocationId: 0
}

export const setOwnsBlueJeans = (chosenOwnership) => {
    transientState.ownsBlueJeans = chosenOwnership

}

export const setSocioLocationId = (chosenLocation) => {
    transientState.socioLocationId = chosenLocation
}

export const saveSurveySubmission = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    if  (transientState.ownsBlueJeans !== null && 
         transientState.socioLocationId >= 1) {
            const response = await fetch("http://localhost:8088/submissions", postOptions)
            const newSubmissionEvent = new CustomEvent("newSubmissionCreated")
            document.dispatchEvent(newSubmissionEvent)
        }
    else {window.alert("You need to complete the form!")}    
}

