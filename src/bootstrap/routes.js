const app = require("./server");
const pdfController = require("../controller/pdf.controller");

const _invoke = (controller) => {
  return function(req, res) {
    const [controllerClass, method] = controller.split('@')
    const className = require(controllerClass)
    const obj = new className
    obj[method](req, res)
  }
}
app.get('/', (_, res) => {
  res.send(`Please use
  <ul>
    <li><b>/pdf</b> endpoint to generate and view the PDF in browser</li>
    <li><b>/download-pdf</b> to just download the PDF</li>
  </ul>
  
  `);
});
app.get("/pdf", _invoke('../controller/pdf.controller@generate'));
app.get("/download-pdf", _invoke('../controller/pdf.controller@generateAndDownload'));
