# test-bsale

Aplicativo: Consiste en mostrar los productos por categoria ademas filtrar por nombre en la caja de texto buscar.

Front: Bootstrap y vainilla

Backend: Nodejs con MySql

Apis:
- api/category/get
- api/product/category/
  - parametros :
    - category : Define el codigo de categoria
    - text: Define el campo texto a filtrar
    - page: define la pagina a mostrar del boton cargar mas

Deploy
- Frontend: Aws Bucked S3
- Backend: Aws Lambda
