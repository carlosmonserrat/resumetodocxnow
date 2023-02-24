const documentFactory = require('./document-generator.js');
const docx = require("docx");
const generate = (resumePhoto) => {
    const resumeImage =
        new docx.Paragraph({
            children: [
                new docx.ImageRun({
                    data: resumePhoto,
                    transformation: {
                        width: 200,
                        height: 200
                    }
                })
            ]
        })

    const name =
        new docx.Paragraph({
            children: [
                new docx.TextRun({
                    text: "Carlos Andres Monserrat Rojas Rojas",
                    color: "#454545",
                    font: "Calibri",
                    size: 48
                })
            ]
        })

    const workTitle =
        new docx.Paragraph({
            children: [
                new docx.TextRun({
                    text: "Msc. Software Engineering",
                    color: "#828282",
                    font: "Calibri",
                    size: 24
                })
            ]
        })

    const aboutMe =
        new docx.Paragraph({
            children: [
                new docx.TextRun({
                    text: "ABOUT ME \n",
                    color: "#828282",
                    font: "Calibri",
                    size: 24,
                    bold: true
                })
            ]
        })

    const aboutMeDescription = new docx.Paragraph({
        children: [
            new docx.TextRun({
                text: "I'm a software engineer with more than 10 years of experience in backend and frontend development. I am used to working in teams using agile practices",
                color: "#828282",
                font: "Calibri",
                size: 22
            })
        ]
    })

    const profile =
        new docx.Paragraph({
            children: [
                new docx.TextRun({
                    text: "Full Name: Carlos Andres Monserrat Rojas Rojas\n" +
                        "Current Location: Innopolis, Russia, 420500\n" +
                        "Telegram: @candresmon\n" +
                        "E-mail: inf.carlos@outlook.com\n" +
                        "Phone number: 79950086572Github Repository: https://github.com/carlosmonserrat\n" +
                        "Site: https://monserrat.dev\n" +
                        "Birthdate: 26-03-1989\n" +
                        "Citizenship: Bolivia, Chile\n",
                    color: "#828282",
                    font: "Calibri",
                    size: 22
                })
            ]
        })


    const noBorders = {
        top: {
            style: docx.BorderStyle.NONE
        },
        bottom: {
            style: docx.BorderStyle.NONE
        },
        left: {
            style: docx.BorderStyle.NONE
        },
        right: {
            style: docx.BorderStyle.NONE
        }
    }

    const privateDataTable =
        new docx.Table({
            rows: [
                new docx.TableRow({
                    children: [
                        new docx.TableCell({
                            children: [
                                resumeImage
                            ],
                            borders: noBorders
                        }),
                        new docx.TableCell({
                            children: [
                                aboutMe,
                                aboutMeDescription
                            ],
                            borders: noBorders
                        }),
                        new docx.TableCell({
                            children: [
                                profile
                            ],
                            borders: noBorders
                        })
                    ],
                }),
            ],
        })

    const doc = new docx.Document({
        creator: "ResumeDocx!",
        title: "resume",
        description: "Resume document for 'Carlos Rojas'",
        sections: [
            {
                properties: {},
                children: [
                    name,
                    workTitle,
                    privateDataTable
                ]
            }
        ],
        paragraphsStyles: [
            {
                id: "wellSpaced",
                name: "Well Spaced",
                basedOn: "Normal",
                quickFormat: true,
                paragraph: {
                    spacing: {line: 276, before: 20 * 72 * 0.1, after: 20 * 72 * 0.05},
                },
            }
        ]
    });

    documentFactory.generate(doc)
}

module.exports.generate = generate
