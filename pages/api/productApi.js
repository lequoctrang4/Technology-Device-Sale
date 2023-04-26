import axios from 'axios';

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
        const res = await axios({
            method: 'get',
            url: `http://localhost/product?id=${id}`,
        });
        return res.data;
    } catch (error) {
        return error.response.data;
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
            url: `http://localhost/product/attribute?id=${id}`,
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
export const addReview = async (token, formValue) => {
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

export const addOrder = async (token, formValue) => {
    try {
        // make axios post request
        //     {
        //     "sessionId": 123,
        //     "token": 111,
        //     "status": "notDone",
        //     "tax": 1.2,
        //     "subTotal": 120.3,
        //     "voucherId": 111,
        //     "shippingId": 101,
        //     "note": "",
        //     "products":
        //     [
        //         {
        //             "productID": 1,
        //             "discount": 0.4,
        //             "quantity": 2,
        //             "price": 5
        //         }
        //         ,{
        //             "productID": 2,
        //             "discount": 0.4,
        //             "quantity": 2,
        //             "price": 5
        //         }
        //     ]
        // }
        const res = await axios({
            method: 'post',
            url: `http://localhost/order`,
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

export const getOrderByUser = async (token) => {
    try {
        // make axios post request
        const res = await axios({
            method: 'get',
            url: `http://localhost/orders`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res.data;
    } catch (error) {
        return error.response.data;
    }
};
export const getOrderById = async (token, id) => {
    try {
        // make axios post request
        const res = await axios({
            method: 'get',
            url: `http://localhost/order?id=${id}`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res.data;
    } catch (error) {
        return error.response.data;
    }
};

export const addProduct = async (token, formValue) => {
  try {
    // make axios post request
    const res = await axios({
      method: "post",
      url: `http://localhost/product`,
      data: formValue,
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/text/plain",
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const editProduct = async (token, formValue) => {
  try {
    // make axios post request
    const res = await axios({
      method: "post",
      url: `http://localhost/product`,
      data: formValue,
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/text/plain",
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};
export const deleteProduct = async (token, id) => {
  try {
    // make axios post request
    const res = await axios({
      method: "delete",
      url: `http://localhost/product?id=${id}`,
      data: formValue,
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/text/plain",
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};