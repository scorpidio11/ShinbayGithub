$(document).ready(function() {
	$("#download_pdf").click(function() {

		html2canvas(document.querySelector("#menu-list-group")).then(canvas => {  // Convert the DOM into svg
		    //document.body.appendChild(canvas)
		});

		const input = document.getElementById('menu-list-group');

		html2canvas(input)
		  .then((canvas) => {
		    const imgData = canvas.toDataURL('image/png'); // Convert the svg into png

		    const pdf = new jsPDF();  
		    pdf.addImage(imgData, 'PNG', 0, 0);  // Convert the png into pdf
		    pdf.save("download.pdf");  
		  });
		;

	});
});