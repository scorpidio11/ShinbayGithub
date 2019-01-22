import React from "react";
import "./style.css";
import logo from "./logo_b.png";

// This file exports both the List and ListItem components

export class FinalListPDF extends React.Component {
  constructor(){
    super();
  }

  printGeneratePDF = () => {
    // window.html2canvas(document.querySelector("#menu-list-group")).then(canvas => {  // Convert the DOM into svg
    //     // document.body.appendChild(canvas)
    // });

    const input = document.getElementById('menu-list-group');

    window.html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png'); // Convert the svg into png

        const pdf = new window.jsPDF();  
        pdf.addImage(imgData, 'PNG', 0, 0);  // Convert the png into pdf
        pdf.save("download.pdf");  
      });
    ;
  }

  render() {
    return (
      <div>
      <div className="container-fluid">
        <div className="list-group3" id="menu-list-group">
         <a href="/"><img className="logo1" src={logo} alt="Logo" /> </a>
     

          <ul>{this.props.children}</ul>
        </div>
        <div className="btn-container">
          <button className="bnt btn-lg" id="download_pdf" onClick={this.printGeneratePDF}>
            <i className="fas fa-file-pdf fa-1x vl" ></i> 
             &nbsp; Download PDF
          </button>
        </div>
        <br />
      </div>
    </div>
    )
  }
}


// function printGeneratePDF() {


//   console.log('>> IN CUSTOME JS >>>>> ');
//   window.html2canvas(document.querySelector("#menu-list-group")).then(canvas => {  // Convert the DOM into svg
//       //document.body.appendChild(canvas)
//   });

//   const input = document.getElementById('menu-list-group');

//   window.html2canvas(input)
//     .then((canvas) => {
//       const imgData = canvas.toDataURL('image/png'); // Convert the svg into png

//       const pdf = new window.jsPDF();  
//       pdf.addImage(imgData, 'PNG', 0, 0);  // Convert the png into pdf
//       pdf.save("download.pdf");  
//     });
//   ;

// }

// export function FinalListPDF({ children }) {
//   return (
//     <div>
//       <div className="container-fluid">
//         <div className="list-group3" id="menu-list-group">
//           <img className="logo1" src={logo} alt="Logo" />

//           <ul>{children}</ul>
//         </div>
//         <div className="btn-container">
//           <button className="bnt btn-lg" id="download_pdf" onClick={printGeneratePDF()}>
//             <i className="fas fa-file-pdf fa-1x vl" ></i> 
//             Download PDF
//           </button>
//         </div>
//         <br />
//       </div>
//     </div>
//   );
// }

export function FinalListItemPDF({ children }) {
  return <li className="list-group-item2">{children}</li>;
}


