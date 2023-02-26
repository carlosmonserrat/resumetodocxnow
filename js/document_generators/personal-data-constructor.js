const {v4: uuidv4} = require('uuid');

const removePersonalDataEvent = new Event("remove-personal-data");
const createPersonalData = (id, placeholder, textLabel) => {
    const style = document.createElement("style")
    const label = document.createElement("label")
    const dataInput = document.createElement("input")
    const removeButton = document.createElement("button")
    const removeButtonId = `personal-remove-${uuidv4()}`

    style.innerHTML = `
        .btn-remove{
            background-color: red; 
            color:white; 
            border: none;padding: 4px ;
            position: absolute;
            bottom:0;right:-24px;
            transition:0.3s
        }
        
        .btn-remove:hover{
            opacity:0.5
        }
        
        .btn-remove:active{
            opacity:0.1
        }
    `
    dataInput.id = id
    dataInput.placeholder = placeholder

    removeButton.id = removeButtonId
    removeButton.classList.add("btn-remove")
    removeButton.innerText = "-"

    label.setAttribute("style", "font-weight:700;position:relative")
    label.innerText = textLabel
    label.appendChild(style)
    label.appendChild(dataInput)
    label.appendChild(removeButton)

    removeButton.onclick = () => {
        label.dispatchEvent(removePersonalDataEvent)
    }

    return label
}

const createPersonalDataContainer = (id, elements) => {
    const ul = document.createElement("ul")
    ul.id = id

    elements.forEach(element => {
        createAndAddElement(element, ul)
    })

    return ul
}

const createAndAddElement = (element, container) => {
    const li = document.createElement("li")
    li.appendChild(element)
    container.appendChild(li)

    element.addEventListener("remove-personal-data", () => container.removeChild(li), false)
}


module.exports.createPersonalDataContainer = createPersonalDataContainer
module.exports.createAndAddElement = createAndAddElement
module.exports.createPersonalData = createPersonalData