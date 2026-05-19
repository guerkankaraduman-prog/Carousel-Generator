export async function exportAsPNG(elementId) {
  const element = document.getElementById(elementId);

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
  });

  const link = document.createElement("a");
  link.download = "carousel.png";
  link.href = canvas.toDataURL();
  link.click();
}
