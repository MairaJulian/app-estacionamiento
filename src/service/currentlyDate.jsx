import {format} from 'date-fns'

export const CurrentlyDate = () => {
    const date = new Date()
    const formatoFecha = format(date, 'EEE dd/MM/yyyy')
    
    return formatoFecha
}

export const CurrentlyHour = () => {
    const date = new Date()
    const hora = date.getHours()
    const minutos = date.getMinutes()

    const currentlyHour = `${hora}:${minutos}hs`

    return currentlyHour
}