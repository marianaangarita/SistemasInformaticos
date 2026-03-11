import express from 'express';
import { v4 as uuidv4 } from 'uuid';


const app = express();
app.use(express.json());


import { productos } from './database.js';


const ejecutaValidacion = (data, validacion, mensajedeError) =>
  validacion(data) ? data : { error: mensajedeError }


app.route('/productos')
  .get((req, res) => {
    res.json(productos)
  })


  .post((req, res) => {
    const { titulo, precio } = req.body


    const nuevoProducto = {
      id: uuidv4(),
      titulo: titulo,
      precio: precio
    }


    const valida_titulo = ejecutaValidacion(
      titulo,
      data => data && data.length > 3,
      'Mínimo de 4 carácteres'
    )
    const valida_precio = ejecutaValidacion(
      precio,
      data => data && data > 0.05,
      'Mínimo 0.1 euros'
    )


    console.log("valida titulo", valida_titulo)
      
    if (valida_titulo.error) {
      return res.status(400).send(valida_titulo.error);
    }
    
    if (valida_precio.error) {
      return res.status(400).send(valida_precio.error);
    }
    
      productos.push(nuevoProducto)
      res.status(201).json(nuevoProducto) // respuesta creado producto
    })


app.get('/', (req, res) => {
  res.send('Backend productos')
})


app.listen(3000, () => {
  console.log('Activado localhost:3000.')
})
