interface eUser {
    id: string,
    name: string,
    email: string,
    isAdmin: string,
    passwordChangedAt: string,
    registeredAt: string,
    lastLogin: string,
};

const defaultUser: eUser = {
    id: "",
    name: "",
    email: "",
    isAdmin: "0",
    lastLogin: "",
    registeredAt: "",
    passwordChangedAt: "",
};

export default eUser;
export { defaultUser };