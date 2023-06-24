import * as SQLite from 'expo-sqlite'
import { deleteFile } from '../service/fileSystem';

const db = SQLite.openDatabase('address.db')

export const init = () => {
    console.log("Entrar en init");

    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS address(id INTEGER PRIMARY KEY NOT NULL, date TEXT NOT NULL, horasYMinutos TEXT NOT NULL, picture TEXT NOT NULL, title TEXT NOT NULL, latitud DOUBLE NOT NULL, longitud DOUBLE NOT NULL)',
                [],
                () => {
                    console.log("resuelve desde init dbIndex");
                    resolve()
                },
                (_, error) => {
                    console.log("no resuelve");
                    console.log(error.message);
                    reject(error)
                })
        })
    })
    return promise
}

export const insertPlace = (place) => {
    const { id, date, horasYMinutos, picture, title, latitud, longitud } = place
    console.log("Ingresando nueva direccion");

    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql('INSERT INTO address (id, date, horasYMinutos, picture, title, latitud, longitud) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [id, date, horasYMinutos, picture, title, latitud, longitud],
                (_, result) => resolve(result),
                (_, error) => reject(error))
        })
    })
    return promise
}

export const deletePlace = async(id, path) => {
    console.log("Borrando elemento");

    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'DELETE FROM address WHERE id = ?',
                [id],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            )
        })
    })
    await deleteFile({path})
    return promise
}

export const getFromLocalDB = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM address',
                [],
                (_, result) => { resolve(result) },
                (_, error) => { reject(error) }
            )
        })
    })
    return promise
}