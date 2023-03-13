# CRUD tareas
Esta tarea consiste en el desarrollo de una API mediante Node + Express que permite al usuario administrar tareas a través de una base de datos en MongoDB.

Como administrador de tareas, el usuario tiene la capacidad de crear tareas, listar las tareas existentes, editar una tarea (modificar datos o su status), ver los detalles de una tarea o eliminar una tarea existente a partir de su id. 

Para ello, existen los endpoints necesarios que permiten que el usuario tenga la capacidad de realizar las acciones (get, post, put) correspondientes.

Las tareas son almacenadas en MongoDB.

Cada tarea cuenta con las siguientes propiedades:

- Titulo
- Descripcion
- Status
- FechaCreacion

Se encuentran disponibles 5 endpoints que están documentados mediante Swagger. Se puede acceder a localhost:3000/swagger donde se muestra la UI de Swagger. Antes de esto se deben correr los siguientes comandos:
- npm install
- npm run start ó npm run dev
