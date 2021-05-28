# test-bsale

Ejercicio: Muestra los productos por categorias o todas las categorias ademas permite filtrar por nombre en la caja de texto "buscar". Se debe seleccionar en el boton "Buscar" para realizar la busqueda en la caja de texto. Las imagenes cuyo valor es nulo(inexistentes) se mostrará una imagen por defecto de imagen no disponible

Front: El aplicativo se realizó con Bootstrap y Vainilla js.
  -  style.css: Contiene el estilo de la web
  -  index.html: Contiene el codigo html de la web con la maquetacion respectiva
  -  app.js: Contiene el codigo javascript de la web con las invocaciones a las apis para mostrar categorias y productos

Backend: Nodejs con MySql

Apis:
- GET: api/category/get
  - Respuesta: application/json
  - Ejemplo de llamada: api/category/get
- GET: api/product/category/
  - parametros :
    - category : Define el codigo de categoria
    - text: Define el campo texto a filtrar
    - page: define la pagina a mostrar del boton cargar mas
    
  - Respuesta: application/json
  - Ejemplo de llamada: api/product/category/?category=1&page=1&text="LICOR"

Deploy
- Frontend: Aws Bucked S3
- Backend: Aws Lambda
