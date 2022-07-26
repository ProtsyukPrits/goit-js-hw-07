const modalTemplate = ({preview, original, description}) => ` 
  <div class="modal">
    <img src="${preview}" alt="${description}">
  </div>`;

  export default modalTemplate;