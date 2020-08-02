var socket = io();
socket.on('connect', function() {
    console.log('Nos Conectamos')
});
socket.on('enviarMensaje', function(message) {
    console.log(message);
})
socket.on('disconnect', function() {
        console.log('Se perdio la conexión con el server')
    })
    // emit para emitir on para recibir

socket.on('mensajeBroadcast', function(message) {
    console.log("Mensaje Broadcast", message)
})
socket.emit('enviarMensaje', {
    usuario: 'Rodrigo',
    msg: 'Hola Mundo'
});

socket.emit('mensaje_BD', {
    usuario: 'Rodrigo',
    msg: 'Hola Mundo'
}, function(respuesta) {
    console.log('RESPUESTA SERVER: ', respuesta)
})