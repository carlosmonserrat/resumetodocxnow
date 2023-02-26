const basicResumeGenerator = require('./js/document_generators/basic-resume-generator.js')
const personalData = require("./js/document_generators/personal-data-constructor");

const generateFromTemplateButton = document.getElementById("createFromTemplate")

const imgProfile = document.getElementById('profileImage')
const personalDataContainer = document.getElementById('personalData')
const personalDataNew = document.getElementById('personalDataNew')
const morePersonalDataButton = document.getElementById('morePersonalData')

const profilePicture = localStorage.getItem("profilePicture");
const {v4: uuidv4} = require('uuid');

imgProfile.src = profilePicture;

imgProfile.onclick = () => {
    const reader = new FileReader();
    const inputFile = document.createElement("input")
    inputFile.type = "file"

    inputFile.onchange = () => {
        const reader = new FileReader();

        reader.onload = (e) => {
            localStorage.setItem("profilePicture", e.target.result)
            imgProfile.src = e.target.result
        }

        reader.readAsDataURL(inputFile.files[0])
    }

    inputFile.click()
}


generateFromTemplateButton.onclick = () => {
    basicResumeGenerator.generate(profilePicture)
}

personalDataContainer.appendChild(
    personalData.createPersonalDataContainer(
        "personalDataElements",
        [
            personalData.createPersonalData("name", "Joan Doe", "Full name"),
            personalData.createPersonalData("citizenship", "Gotham citizen", "Citizenship"),
            personalData.createPersonalData("currentLocation", "Arkham Asylum", "Current location"),
            personalData.createPersonalData("telegram", "@YourTelegram", "Telegram"),
            personalData.createPersonalData("email", "your@email.com", "E-mail"),
            personalData.createPersonalData("phone", "+799999999", "Phone number"),
            personalData.createPersonalData("github", "github/your-repo", "Github repositories"),
            personalData.createPersonalData("website", "personal-site.com", "Personal website")
        ]
    )
)

morePersonalDataButton.onclick = () => {
    const personalDataElements = document.getElementById("personalDataElements")
    const customId = `personal-${personalDataNew.value}-${uuidv4()}`
    personalData.createAndAddElement(
        personalData.createPersonalData(customId, "new custom", personalDataNew.value),
        personalDataElements
    )
    personalDataNew.value = ""
}

