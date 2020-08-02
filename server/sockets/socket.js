const { io } = require('../server');

io.on('connection', (client) => {
    console.log('usuario conectado');

    client.emit('enviarMensaje', 'Bienvenido');

    client.on('disconnect', () => {
        console.log('Cliente desconectado');
    })

    client.on('enviarMensaje', (mensaje) => {
        console.log('Recibimos mensaje', mensaje);
    })

    client.on('mensaje_BD', (mensaje, funcion) => {

        console.log('llego un mensaje con respuesta');

        funcion({
            ok: true,
            msg: 'llego bien'
        })
    });

    client.on('mensajeBroadcast', (mensaje) => {
        console.log('Recibi un Broadcast, reenviando...');
        client.broadcast.emit('mensajeBroadcast', mensaje);
    })
})