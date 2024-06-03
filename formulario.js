const app = Vue.createApp({
    data() {
        return {
            nombre: '',
            platform_game: '',
            estate_game: '',
            score_game: '',
            filas: [],
            filasFiltradas: [],
            buscarName: '',
            buscarPlataforma: '',
            buscarEstado: '',
            info: false,
            descripcion: {},
            
        };
    },
    methods: {
        agregarFilas() {
            if (this.nombre && this.platform_game && this.estate_game && this.score_game) {
                const nuevoJuego = {
                    name_game: this.nombre,
                    platform_game: this.platform_game,
                    state_game: this.estate_game,
                    score_game: this.score_game
                };
                this.filas.push(nuevoJuego);
                this.resetearFilas();
                this.nombre = '';
                this.platform_game = '';
                this.estate_game = '';
                this.score_game = '';
                error = '';
            }

        },
        mostrarInformacion(fila) {
            this.info = true;
            this.descripcion = fila;
        },
        buscar() {
            this.filasFiltradas = this.filas.filter(fila =>
                fila.name_game.toLowerCase().includes(this.buscarName.toLowerCase()) &&
                (this.buscarPlataforma === '' || fila.platform_game === this.buscarPlataforma) &&
                (this.buscarEstado === '' || fila.state_game === this.buscarEstado)
            );
        },
        resetearFilas() {
            this.filasFiltradas = this.filas;
        }
    },
    created() {
        this.resetearFilas();
    }
});