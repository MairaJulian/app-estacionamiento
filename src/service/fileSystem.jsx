import * as FileSystem from 'expo-file-system'

export const moveFile = async({path}) => {

    console.log(path);

    const shortPath = path.split("/").pop()
    console.log(shortPath);
    const newPath = FileSystem.documentDirectory.concat(shortPath)
    console.log(newPath);
    
    await FileSystem.moveAsync({
        from: path,
        to: newPath
    })

    return newPath
}

export const deleteFile = async({path}) => {
    await FileSystem.deleteAsync(path)
}