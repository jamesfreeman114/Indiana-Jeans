import { saveSurveySubmission } from "./transientState.js"

const handleSurveySubmission = (clickEvent) => {
    if (clickEvent.target.id === "submission-button") {
        saveSurveySubmission()
    }

}

export const SubmissionButton = () => {
    document.addEventListener("click", handleSurveySubmission)

    return `<button id='submission-button'>Save Submission</button>`
}