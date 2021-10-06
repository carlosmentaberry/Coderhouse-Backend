const socket = io();

socket.on("message", (data) => {
    console.log(data);
    render(data);
    socket.emit("messageClient", "muchas gracias por tu respuesta");
});

const render = (data) => {
    let html = data.map((x) => {
    return `<p>${x.id} - ${x.msn}</<p>`;
    });
    document.getElementById("caja").innerHTML = html;
}

function addMsn (event) {
    event.preventDefault();
    let mensaje = {id: document.getElementById("id").value, msn: document.getElementById("msn").value};
    socket.emit("mess_send", mensaje);
};