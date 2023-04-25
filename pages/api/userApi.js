import axios from "axios";

export const signIn = async (formValue) => {
  try {
    // mobile:
    // password:
    const res = await axios({
      method: "post",
      url: `http://localhost/signIn`,
      data: formValue,
      headers: { "Content-Type": "text/plain" },
    });
    return res;
  } catch (error) {
    return error.response.data;
  }
};

export const signUp = async (formValue) => {
  try {
    //   {
    // "name": "Lê Quốc Trạng",
    // "mobile": "0399609015",
    // "email": "lequoctrang5@gmail.com",
    // "password": "Lequoctrang",
    // "confirmPassword": "Lequoctrang"
    // }
    const res = await axios({
      method: "post",
      url: `http://localhost/signUp`,
      data: formValue,
      headers: {
        "Content-Type": "text/plain",
      },
    });
    return res.data;
  } catch (error) {
    return error.response;
  }
};

export const getProfile = async (token) => {
  try {
    // make axios post request
    const res = await axios({
      method: "get",
      url: `http://localhost/user/profile`,
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};
export const editProfile = async (token, formValue) => {
  try {
    // make axios post request
    const res = await axios({
      method: "patch",
      url: `http://localhost/user/editProfile`,
      data: formValue,
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "text/plain",
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};
export const setAvatar = async (token, formValue) => {
  try {
    // make axios post request
    const res = await axios({
      method: "patch",
      url: `http://localhost/user/setAvatar`,
      data: formValue,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/raw",
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getAvatar = async (token) => {
  try {
    // make axios post request
    const res = await axios({
      method: "get",
      url: `http://localhost/user/getAvatar`,
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};
export const changePassword = async (token, formValue) => {
  try {
    // make axios post request
    const res = await axios({
      method: "patch",
      url: `http://localhost/user/changePassword`,
      data: formValue,
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "text/plain",
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const forgetPassword = async (formValue) => {
  try {
    // make axios post request
    const res = await axios({
      method: "post",
      url: `http://localhost/user/forgetPassword`,
      data: formValue,
      headers: { "content-type": "text/plain" },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

