// import logo from "../assets/img/logo.png";
import jsPDF from "jspdf";
// import { renderToString } from "react-dom/server";

const MyDocument = () => {
  const doc = new jsPDF();

  doc.setFontSize(13);
  doc.setFont("about", "bold");
  doc.text("Proficiency Learning Solutions Pvt Ltd ", 75, 20);
  doc.text("Main Mathura Road A-12 2nd Floor,Mohan Cooperative", 75, 28);
  doc.text("Industrial Estate New Delhi DL 110044 India", 75, 33);
  doc.setFont("invoice", "bold");
  doc.setFontSize(10);
  
  
  //   doc.setFont("bill", "bold");
  //   doc.text("State Code : 07 ", 23, 162);
  //   doc.text("State Name : DELHI ", 23, 168);
  doc.text("Customer Ledger", 110, 54);
  doc.text("Date: 01-Oct-2021 to 18-Oct-2022", 5, 54);
  doc.text("Customer Code                      CBP000211", 5, 65);
  doc.text("Customer Name MKK         Enterprises", 5, 72);
  doc.text("Address: F-2/13 Ratiya Marg Sangam Vihar , New Delhi, ", 100, 65);
  doc.text("DELHI,India, 110080", 100, 72);
  
  doc.text("Currency", 10, 79);
  doc.text("INR", 45, 79);
  
  doc.text("Opening :- Dr", 145, 79);
  doc.text("195,121.00", 185, 79);
  
  
  doc.setFontSize(8);
  doc.setFont("about", "bold");
  doc.text("Document No ", 10, 86);
  doc.text("Doc Date", 50, 86);
  doc.text("Description", 80, 86);
  doc.text("Reference", 105, 86);
  doc.text("Dr/Cr", 140, 86);
  doc.text("Debit Amount", 160, 86);
  doc.text("Credit Amount", 185, 86);
  //   doc.text("Reference", 84, 86);
  
  doc.text("CN/31581/21-22", 10, 96);
  doc.text("CN/31982/21-22", 10, 108);
  doc.text("DISC/601210", 10, 120);
  doc.text("INC/647", 10, 134);

  doc.text("14-Dec-2021", 50, 96);
  doc.text("17-Jan-2022", 50, 108);
  doc.text("11-Mar-2022", 50, 120);
  doc.text("27-Apr-2022", 50, 134);


  doc.text("Credit Note", 80, 96);
  doc.text("Credit Note", 80, 108);
  doc.text("Discount Entry", 80, 120);
  doc.text("Incoming Payment", 80, 134);
 
  doc.text("31581", 105, 96);
  doc.text("31982", 105, 108);
  doc.text("Being SD reversed", 105, 120);
  doc.text("against CN-31581 &", 105, 123);
  doc.text("31982", 105, 127);
  doc.text("647", 105, 134);

  doc.text("Cr", 140, 96);
  doc.text("Cr", 140, 108);
  doc.text("Dr", 140, 120);
  doc.text("Cr", 140, 132);


  doc.text("0.00", 160, 96);
  doc.text("0.00", 160, 108);
  doc.text("18,497.00", 160, 120);
  doc.text("0.00", 160, 132);
  doc.setFont("about", "bold");
  doc.text("18,497.00", 160, 142);
  
  doc.text("56,056.00", 185, 96);
  doc.text("3,136.00", 185, 108);
  doc.text("0.00", 185, 120);
  doc.text("167,200.00", 185, 134);
  doc.setFont("about", "bold");
  doc.text("226,392.00", 185, 142);
  doc.text("Closing Balance : -", 125, 148);
  doc.text("-12,774.00 : -", 157, 148);
  doc.text("System Generated Statement hence no signature required", 10, 160);
//   doc.text("Credit Amount", 185, 86);
//   // horizontal
  doc.line(2, 60, 205, 60);
  //   doc.setLineWidth(0.1)
  doc.setFont("invoice", "normal");
  doc.line(2, 75, 205, 75);
  doc.line(2, 82, 205,82);
  doc.line(2, 89, 205,89);
  doc.line(2, 138, 205,138);
  doc.line(2, 152, 205,152);
//   doc.line(2, 35, 10, 35);
//   doc.line(2, 90, 10, 90);
//   doc.line(2, 95, 10, 95);
//   // horizontal line
//   // straight line
//   doc.line(2, 95, 2, 20);
//   // straight line
//   // straight line
//   doc.line(100, 95, 100, 20);
//   // straight line

  

  let width = doc.internal.pageSize.getWidth();
  let height = doc.internal.pageSize.getHeight();

  // doc.addImage(img, "PNG", 10, 0, 40, 12);
  const print = () => {
    window.open(doc.output("bloburl"), "_blank");
    // pdf.save("pdf");
  };

  return (
    <>
      <button onClick={print}>download</button>
    </>
  );
};

export default MyDocument;