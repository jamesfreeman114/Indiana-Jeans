import { JeanChoices } from "./JeanChoices.js";
import { LocationChoices } from "./LocationChoices.js";
import { SubmissionButton } from "./SubmissionButton.js";

const container = document.querySelector("#container")

const render = async () => {
    const jeansHTML = JeanChoices()
    const locationsHTML = await LocationChoices()
    const buttonHTML = SubmissionButton()
    
    container.innerHTML = `
        ${jeansHTML}
        ${locationsHTML}
        ${buttonHTML}
    
    `
}


render()

