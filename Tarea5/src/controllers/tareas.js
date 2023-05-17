//como objeto

const Tarea = require('./../models/tarea')
const TareasController ={
    listar: (req,res)=>{
        Tarea.find({})
            .then(tareas=>{
                res.status(200).send(tareas); //Regresa todas las tareas
            })
            .catch(error=>{
                res.status(404).send('Algo salio mal');
            });
    },

    verId:(req,res)=>{
        let id = req.params.id;
        Tarea.findOne({ _id: `${id}` })
        .then(tarea => { //Si la tarea con ese id existe
            res.status(200).json(tarea); //Enviar la tarea
        });
    },

    crear:(req,res)=>{
        let nuevaTarea= Tarea(req.body);
        nuevaTarea.save()
        .then((tarea)=>{
            res.status(201).send(tarea);
        })
        .catch(err=> res.status(400).send(err));
    },
    actualizar:(req,res)=>{
        let id = req.params.id;
        let nuevaTarea = req.body;
        Tarea.findByIdAndUpdate(id, nuevaTarea, { new : true }) //Encuentra una tarea con el id del parámetro
        .then(tarea => {
            res.status(200).send(tarea); //Responde con la tarea actualizada
        }).catch(err=> res.status(400).send(err));
    },
    eliminar:(req,res)=>{
        let id = req.params.id;

        Tarea.findByIdAndDelete(id)//Encuentra una tarea con el id del parámetro
        .then(tarea => {
            res.status(200).send(tarea); //Elimina la tarea y regresa la tarea que fue eleminada
        }).catch(err=> res.status(400).send(err));
    } 
}

module.exports = TareasController
