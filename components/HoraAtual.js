export default function HoraAtual() {

    const hora = new Date().getHours();
    const minutos = new Date().getMinutes();
    const horarioFormatado = hora + ":" + minutos;

    return (
        <h2>Consulta realizada as: {horarioFormatado}</h2>
    )
}