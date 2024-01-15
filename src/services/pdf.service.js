const PDFDocument = require("pdfkit");
const uuid = require('uuid');
const fs = require("fs");

class PDFService {
  constructor() {
    this.doc = new PDFDocument();
  }

  generatePDF = async () => {
    const fileName = `pdf-${uuid.v4()}.pdf`
    //const filePath = `./storage/${fileName}`;
    //this.doc.pipe(fs.createWriteStream(filePath));
    this.doc.fontSize(25)
    .text('Test PDF generation using JS', 100, 100);
    // await this.doc.end();
    return {fileName, doc: this.doc};
  }

}

module.exports = new PDFService();
