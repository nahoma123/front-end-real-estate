const BASE_URL: string = "http://localhost:8001/"

const REGISTER_URL: string = AddBase("users/register");
const LOGIN_URL: string = AddBase("users/login");


function AddBase(route:string) :string{
    return `${BASE_URL}${route}`
}

export { REGISTER_URL,LOGIN_URL };
