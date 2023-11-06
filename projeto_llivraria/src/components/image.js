import React from "react";

// Função auxiliar para importar imagens selecionadas
function importSelectedImages(r, selectedImageNames) {
    return selectedImageNames.map((imageName) => r(`./${imageName}.jpg`));
  }
  
  
  // Importe as imagens selecionadas
  const selectedImages = (selectedImageNames) => { return importSelectedImages(require.context('../images/capas/', false, /\.(png|jpe?g|svg)$/), selectedImageNames); }
  
  export default selectedImages