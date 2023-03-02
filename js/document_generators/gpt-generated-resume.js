const {Document, Paragraph, HeadingLevel} = require("docx");
const documentFactory = require('./document-generator.js');
// Add a heading to the document
const heading = new Paragraph({
    text: "Resume",
    heading: HeadingLevel.HEADING_1,
});

// Add personal information section
const personalInfoHeading = new Paragraph({
    text: "Personal Information",
    heading: HeadingLevel.HEADING_2,
});

const name = new Paragraph({
    text: "John Doe",
});

const address = new Paragraph({
    text: "123 Main St",
});

const cityStateZip = new Paragraph({
    text: "Anytown, USA 12345",
});

const phone = new Paragraph({
    text: "(123) 456-7890",
});

const email = new Paragraph({
    text: "johndoe@gmail.com",
});

// Add education section
const educationHeading = new Paragraph({
    text: "Education",
    heading: HeadingLevel.HEADING_2,
});

const university = new Paragraph({
    text: "XYZ University",
});

const degree = new Paragraph({
    text: "Bachelor of Science in Computer Science",
});

const graduationDate = new Paragraph({
    text: "May 2020",
});

// Add work experience section
const workExperienceHeading = new Paragraph({
    text: "Work Experience",
    heading: HeadingLevel.HEADING_2,
});

const company1 = new Paragraph({
    text: "ABC Company",
});

const jobTitle1 = new Paragraph({
    text: "Software Engineer",
});

const workPeriod1 = new Paragraph({
    text: "June 2020 - Present",
});

const jobDescription1 = new Paragraph({
    text: "Worked on various projects involving React, Node.js, and PostgreSQL.",
});

// Create a new document
const doc = new Document({
    sections: [
        {
            children: [
                heading,
                personalInfoHeading,
                name,
                address,
                cityStateZip,
                phone,
                email,
                educationHeading,
                university,
                degree,
                graduationDate,
                workExperienceHeading,
                company1,
                jobTitle1,
                workPeriod1,
                jobDescription1,
            ]
        }
    ]
});

const generate = () => {
    documentFactory.generate(doc)
}

module.exports.generate = generate