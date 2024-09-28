import axios from "axios"
export const createSong = async (song) => {
    const {data} = await axios.post('https://server.flowersproplayer.ru/api/song', song)
    return data
}

export const fetchSong = async () => {
    const {data} = await axios.get('https://server.flowersproplayer.ru/api/song')
    return data
}

export const fetchOneSong = async (id) => {
    const {data} = await axios.get('https://server.flowersproplayer.ru/api/song' + id)
    return data
}

export const deleteSong = async (id) => {
    const {data} = await axios.delete('https://server.flowersproplayer.ru/api/song' + id)
    return data
}