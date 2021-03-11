export function setItem(key, data) {
    console.log('data: ', data);
    try {
        return localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.log(error);
    }
}

export function getItem(key) {
    try {
        const storedData = localStorage.getItem(key);
        return JSON.parse(storedData);
    } catch (error) {
        console.log(error);
    }
}
