interface eUser {
    id: string,
    name: string,
    email: string,
    isAdmin: boolean,
    passwordChangedAt: string,
    registeredAt: string,
    lastLogin: string,
};

const defaultUser: eUser = {
    id: "",
    name: "",
    email: "",
    isAdmin: false,
    lastLogin: "",
    registeredAt: "",
    passwordChangedAt: "",
};

export default eUser;
export { defaultUser };