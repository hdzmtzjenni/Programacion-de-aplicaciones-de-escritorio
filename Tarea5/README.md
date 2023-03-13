# CRUD tareas
Esta tarea consiste en el desarrollo de una API mediante Node + Express que permita al usuario administrar tareas a través de una base de datos en MongoDB.

Como administrador de tareas, el usuario debe tener la capacidad de crear tareas, listar las tareas existentes, editar una tarea (modificar datos o su status), ver los detalles de una tarea o eliminar una tarea existente. 

Para ello, se deberán realizar los endpoints necesarios para que el usuario tenga la capacidad de realizar las acciones (get, post, put) correspondientes.

Las tareas deberán ser almacenadas en MongoDB.

Cada tarea deberá contar, por lo menos, con las siguientes propiedades:

- Título
- Descripción
- Status
- Fecha de creación

Se encuentras disponibles 5 endpoints que están documentados mediante Swagger. Se puede acceder a localhost:3000/swagger donde se deberá muestra la UI de Swagger. Antes de esto se deben correr los siguientes comandos:
- npm install
- npm run start ó npm run dev