// user role: 
// 0 - not logged in
// 1 - admin
// 2 - customer

interface eUser {
    name: string,
    email: string,
    role: number
};

const defaultUser: eUser = {
    name: '',
    email: '',
    role: 0
}

export default eUser;
export { defaultUser };