import { btnadmin } from './btnAdmin.js'

document.querySelector('#contenedorAdmin').innerHTML = btnadmin;

const btnAdmin = document.getElementById('btnAdmin');
const addProductContainer = document.getElementById('addProductContainer');
const editarProductoContainer = document.getElementById('editarProductoContainer');
const salirBtn = document.getElementById('salirBtn');
const cancelarEditBtn = document.getElementById('cancelarEditBtn');
const courseCard = document.getElementById('courseCard');
const productoForm = document.getElementById('productForm');  // Asegúrate de que los IDs en el HTML y JS coincidan
const editarProductoForm = document.getElementById('editarProductoForm');
const editarProductoBtn = document.getElementById('editarProductoBtn');
const borrarProductoBtn = document.getElementById('borrarProductoBtn');

btnAdmin.addEventListener('click', function() {
    btnAdmin.style.display = 'none';
    addProductContainer.style.display = 'block';
    courseCard.style.display = 'none';
});

salirBtn.addEventListener('click', function() {
    addProductContainer.style.display = 'none';
    btnAdmin.style.display = 'block';
});

cancelarEditBtn.addEventListener('click', function() {
    editarProductoContainer.style.display = 'none';
    courseCard.style.display = 'block'; 
});

editarProductoBtn.addEventListener('click', function(event) {
    event.preventDefault();
    courseCard.style.display = 'none';
    editarProductoContainer.style.display = 'block'; 
    addProductContainer.style.display = 'none'; 
});

productoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    addProductContainer.style.display = 'none';
    btnAdmin.style.display = 'none'; 
    courseCard.style.display = 'flex';
});

editarProductoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    editarProductoContainer.style.display = 'none';
    btnAdmin.style.display = 'none'; 
    courseCard.style.display = 'flex'; 
});

borrarProductoBtn.addEventListener('click', function(event) {
    event.preventDefault();
    courseCard.style.display = 'none';
    btnAdmin.style.display = 'block';
});