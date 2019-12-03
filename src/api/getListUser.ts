const getListProduct = () => {
    let url = null;
        url = `http://10.0.2.108:81/app/get_listuser.php`;
    return fetch(url)
    .then(res => res.json());
};

export default getListProduct;
