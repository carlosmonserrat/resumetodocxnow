//
// import LetterHead from '../img/me.jpg';
const fullNameInput = document.getElementById("fullName")
const profileImageUpload = document.getElementById("profileImageUpload")

const table = new docx.Table({
    rows: [
        new docx.TableRow({
            children: [
                new docx.TableCell({
                    children: [new docx.Paragraph("Hello")],
                }),
                new docx.TableCell({
                    children: [],
                }),
            ],
        }),
        new docx.TableRow({
            children: [
                new docx.TableCell({
                    children: [],
                }),
                new docx.TableCell({
                    children: [new docx.Paragraph("World")],
                }),
            ],
        })
    ],
});

const uploadImage = () => {
    let imageFileReader = new FileReader();
    imageFileReader.readAsDataURL(profileImageUpload.files[0]);
    console.log(profileImageUpload.files)
    return profileImageUpload.files[0]
}
const createImage = (imageData) => {
    return new docx.Paragraph({
        children: [
            new docx.ImageRun({
                data: imageData,
                transformation: {
                    width: 200,
                    height: 100
                }
            })
        ]
    })
}

const generate = (fullName) => {
    const imageData = uploadImage()
    const imageDoc = createImage(imageData)
    const doc = new docx.Document({
        sections: [
            {
                properties: {},
                children: [
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun(`Hello ${fullName}`),
                            new docx.TextRun({
                                text: "Foo Bar",
                                bold: true
                            }),
                            new docx.TextRun({
                                text: "\tGithub is the best",
                                bold: true
                            })
                        ]
                    }),
                    table,
                    imageDoc
                ]
            }
        ]
    });

    docx.Packer.toBlob(doc).then((blob) => {
        saveAs(blob, "example.docx");
        console.log("Document created successfully");
    });
}

const generateFromTemplateButton = document.getElementById("createFromTemplate")
generateFromTemplateButton.onclick = () => {
    generate(fullNameInput.value)
}
