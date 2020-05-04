const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en la consola la tabla de multi', opts)

.command('crear', 'genera un arcivo con la tabla de multi', opts)
    .help()
    .argv;

module.exports = {
    argv
}