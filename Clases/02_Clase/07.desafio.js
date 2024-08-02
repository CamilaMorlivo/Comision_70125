class TicketManager{
    #precioBaseDeGanancia = 1.15;

    constructor(){
        this.eventos = [];
    }

    //me trae un evento
    getEventos(){
        return this.eventos;
    }

    //me agrega un evento
    agregarEventos(nombre,lugar,precio){
        //let id_evento = (this.getEventos()).length;
        let id_evento = this.eventos.length;
        //let ultimoEvento = this.eventos[this.eventos.length-1]
        //ultimoEvento.id+1

        let evento = {
            nombre: nombre,
            lugar: lugar,
            precio: precio * this.#precioBaseDeGanancia,
            capacidad: 50,
            fecha: Date(),
            participantes: [],
            id: ++id_evento
        }

        this.eventos.push(evento);

        return this.eventos;
    }

    //me trae un evento especifico
    traerEvento(idEvento){
        let evento = this.eventos.find(elemento => elemento.id == id);
        if(evento){
            return evento
        }else{
            return null
        }

    }

    //agrega un usuario
    agregarUsuario(id_evento, id_usuario){
        const evento = this.traerEvento(id_evento);
        if(evento == null){
            return ["El evento no existe"];
        }
        if(this.estaRegistrado(id_evento, id_usuario)){
            evento.participantes.push(id_usuario)
        }else{
            return["la persona ya esta registrada"]
        }
    }

    //valiad si esta registrado
    estaRegistrado(id_evento, id_usuario){
        let evento = this.traerEvento(id_evento)
        let registro = evento.participantes.find(idParticipante => idParticipante == id_usuario);
        if(registro == undefined){
            return true;
        }else{
            return false;
        }
    }

    //pone un evento en gira
    ponerEventoEnGira(id_evento, nLocalidad, nFecha){
        let evento = this.traerEvento(id_evento);
        let id_NewEvento = this.eventos.length;
        if(!evento){
            return["El evento no exite"];
        }

        let nuevoEvento = {...evento};
        nuevoEvento.lugar = nLocalidad;
        nuevoEvento.fecha = nFecha;
        nuevoEvento.id = ++id_NewEvento;

        this.eventos.push(nuevoEvento);

        return this.eventos;
    }
}

const ticketManager = new TicketManager();

ticketManager.agregarEventos("Baradero Rock", "Baradero", 1500)
ticketManager.agregarEventos("San Pedro Rock", "San Pedro", 1800)

ticketManager.agregarUsuario(1,1)
ticketManager.agregarUsuario(1,2)
ticketManager.ponerEventoEnGira(2, "Ramallo", "11-12-2024")

console.log(ticketManager.getEventos());






