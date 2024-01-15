const uuid = require("uuid");
const pdfKit = require("pdfkit");
const pdfService = require("../services/pdf.service");
class PDFController {
  generate = async (req, res) => {
    const doc = new pdfKit();
    doc
      .fontSize(25)
      .text(
        "Test PDF generation using JS (viewable in browser directly)",
        100,
        100
      );
    doc.pipe(res);
    doc.end();
  };

  generateAndDownload = async (req, res) => {
    const fileName = uuid.v4();
    const doc = new pdfKit();
    doc
      .fontSize(25)
      .text("Test PDF generation using JS (direct download) ", 100, 100);
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${fileName}.pdf`
    );
    doc.pipe(res);
    doc.end();
  };
}

module.exports = PDFController;
