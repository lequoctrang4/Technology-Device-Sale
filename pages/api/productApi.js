import axios from 'axios'

export const getProductsByCate = async (category_id) => {
    try {
        // make axios post request
        const res = await axios({
            method: 'get',
            url: `localhost/products/?categoryId=${category_id}`,
        });
        return res.data;
    } catch (error) {
        return error.response.data;
    }
};
export const getProductsByManufacturer = async (manuafacurer) => {
    try {
        // make axios post request
        const res = await axios({
            method: 'get',
            url: `http://localhost/products/?manufacturer=${manuafacurer}`,
        });
        return res.data;
    } catch (error) {
        return error.response.data;
    }
};
export const getProductsById = async (id) => {
    try {
        // make axios post request
        const res = await axios.get('http://localhost/product?id=' + id);
        return res.data;
    } catch (error) {
        return error.response;
    }
};
export const getAllProduct = async () => {
    try {
        // make axios post request
        const res = await axios({
            method: 'get',
            url: `http://localhost/products`,
        });
        return res.data;
    } catch (error) {
        return error.response.data;
    }
};
export const getProductAttributes = async (id) => {
    try {
        // make axios post request
        const res = await axios({
            method: 'get',
            url: `http://localhost/attribute/products?id=${id}`,
        });
        return res.data;
    } catch (error) {
        return error.response.data;
    }
};

export const getAllCategory = async () => {
    try {
        // make axios post request
        const res = await axios({
            method: 'get',
            url: `http://localhost/categories`,
        });
        return res.data;
    } catch (error) {
        return error.response.data;
    }
};

export const getReview = async (product_id) => {
    try {
        // make axios post request
        const res = await axios({
            method: 'get',
            url: `http://localhost/review/get?id=${product_id}`,
        });
        return res.data;
    } catch (error) {
        return error.response.data;
    }
};
export const addReview = async (token) => {
    try {
        // make axios post request
        const res = await axios({
            method: 'post',
            url: `http://localhost/review/post`,
            data: formValue,
            headers: {
                Authorization: `Bearer ${token}`,
                'content-type': 'text/plain',
            },
        });
        return res.data;
    } catch (error) {
        return error.response.data;
    }
};
export const editReview = async (token) => {
    try {
        // make axios post request
        const res = await axios({
            method: 'patch',
            url: `http://localhost/review/edit`,
            data: formValue,
            headers: {
                Authorization: `Bearer ${token}`,
                'content-type': 'text/plain',
            },
        });
        return res.data;
    } catch (error) {
        return error.response.data;
    }
};
