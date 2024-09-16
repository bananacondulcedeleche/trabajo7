const btnadmin = `
<div class="container">
    <div class="row justify-content-center">
        <div class="col text-center">
            <h2 class="mb-4">Agregar Producto</h2>
            <button id="btnAdmin" class="btn btn-outline-success mt-auto mb-3">Agregar Productos</button>
        </div>
    </div>

    <!-- Formulario para agregar producto -->
    <div id="addProductContainer" style="display: none;">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="form-container">
                    <h2 class="form-title">Nuevo Producto</h2>
                    <form id="productForm">
                        <div class="form-group">
                            <label for="productTitle">Título</label>
                            <input type="text" class="form-control" id="productTitle" placeholder="Ingresa el título" required>
                        </div>
                        <div class="form-group">
                            <label for="productDescription">Descripción</label>
                            <textarea class="form-control" id="productDescription" rows="3" placeholder="Ingresa la descripción" required></textarea>
                        </div>
                        <div class="form-group">
                            <label for="productPrice">Precio</label>
                            <input type="number" class="form-control" id="productPrice" placeholder="Ingresa el precio" required>
                        </div>
                        <button type="submit" class="btn btn-primary btn-custom mt-3">Agregar</button>
                        <button type="button" id="salirBtn" class="btn btn-secondary mt-3">Salir</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Formulario para editar producto -->
    <div id="editarProductoContainer" style="display: none;">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="form-container">
                    <h2 class="form-title">Editar Producto</h2>
                    <form id="editarProductoForm">
                        <div class="form-group">
                            <label for="editarProductoTitulo">Título</label>
                            <input type="text" class="form-control" id="editProductTitle" placeholder="Ingresa el título" required>
                        </div>
                        <div class="form-group">
                            <label for="editarProductoDescrip">Descripción</label>
                            <textarea class="form-control" id="editProductDescription" rows="3" placeholder="Ingresa la descripción" required></textarea>
                        </div>
                        <div class="form-group">
                            <label for="editarProductoPrecio">Precio</label>
                            <input type="number" class="form-control" id="editProductPrice" placeholder="Ingresa el precio" required>
                        </div>
                        <button type="submit" class="btn btn-primary btn-custom mt-3">Guardar Cambios</button>
                        <button type="button" id="cancelarEditBtn" class="btn btn-secondary mt-3">Cancelar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div id="courseCard" class="card mx-auto" style="width: 18rem; display: none;">
        <img src="/imag/html.jpg" class="card-img-top" alt="Imagen del curso">
        <div class="card-body justify-c">
            <h5 class="card-title">Curso HTML</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explicación breve del curso aquí.</p>
            <a href="#" id="editarProductoBtn" class="btn btn-primary">Editar</a>
            <a href="#" id="borrarProductoBtn" class="btn btn-danger">Eliminar</a>
        </div>
    </div>
</div>

<style>
    body {
        background-color: #f8f9fa;
    }
    .form-container {
        max-width: 500px;
        margin: 50px auto;
        padding: 20px;
        background-color: #ffffff;
        border-radius: 10px;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    }
    .form-title {
        text-align: center;
        font-size: 2rem;
        font-weight: bold;
        color: #007bff;
        margin-bottom: 30px;
    }
    .form-group {
        margin-bottom: 15px;
    }
    .form-group label {
        font-weight: bold;
    }
    .btn-custom {
        width: 100%;
        background-color: #007bff;
        color: white;
    }
    #salirBtn, #cancelarEditBtn {
        width: 100%;
    }
    .row {
        margin-left: 0;
        margin-right: 0;
    }
    .justify-content-center {
        justify-content: center;
    }
    #productListContainer {
        margin: 50px;
    }
    .list-group-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .btn-edit, .btn-delete {
        margin-left: 10px;
    }
    #courseCard {
        margin-top: 20px;
    }
    
    #btnAdmin {
    display: block;
    margin: 0 auto; 
}
</style>
`

export { btnadmin }