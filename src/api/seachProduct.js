const seachProduct = (key) => {
    const url = `http://192.168.1.11/app/search.php?key=${key}`;
    return fetch(url)
        .then(res => res.json());
}
export default seachProduct;