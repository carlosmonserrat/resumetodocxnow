const docx = require('docx')
const fileSaver = require('file-saver')
const generate = (doc) => {
    docx.Packer.toBlob(doc).then((blob) => {
        fileSaver.saveAs(blob, "example.docx");
        console.log("Document created successfully");
    });
}

module.exports.generate = generate