const basicResumeGenerator = require('./js/document_generators/basic-resume-generator.js')
const generateFromTemplateButton = document.getElementById("createFromTemplate")

const fullNameInput = document.getElementById("fullName")
const profileImageUpload = document.getElementById("profileImageUpload")

const persist = (name, data) => {
    const storedData = localStorage.getItem(name);

    if (storedData == null) {
        localStorage.setItem(name, data);
        return data
    } else {
        return storedData
    }
}

let profilePictureData = (persist("profilePicture", profileImageUpload.files[0]))
profileImageUpload.files[0] = profilePictureData

generateFromTemplateButton.onclick = () => {
    basicResumeGenerator.generate(profileImageUpload.files[0])
}

