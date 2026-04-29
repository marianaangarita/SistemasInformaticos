from flask import Flask, jsonify, request
from database import productos


import uuid


app = Flask(__name__)


def ejecuta_validacion(data, validacion, mensaje_error):
    return data if validacion(data) else {'error': mensaje_error}


@app.route('/productos', methods=['GET', 'POST'])
def handle_productos():
    if request.method == 'GET':
        return jsonify(productos)


    if request.method == 'POST':
        data = request.get_json()
        titulo = data.get('titulo')
        precio = data.get('precio')


        nuevo_producto = {
            'id': str(uuid.uuid4()),
            'titulo': titulo,
            'precio': precio
        }


        valida_titulo = ejecuta_validacion(
            titulo,
            lambda data: data and len(data) > 3,
            'Mínimo de 4 caracteres'
        )


        if 'error' in valida_titulo:
            return jsonify(valida_titulo['error']), 400


        productos.append(nuevo_producto)


        return jsonify(nuevo_producto), 201


@app.route('/')
def home():
    return 'Backend productos'


if __name__ == '__main__':
    app.run('localhost', 3000)



