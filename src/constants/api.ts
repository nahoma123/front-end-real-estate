const BASE_URL: string = "http://localhost:8001/"

const REGISTER_URL: string = AddBase("users/register");
const LOGIN_URL: string = AddBase("auth/login");
const FORGOT_REQUEST_URL: string = AddBase("users/request_forgot_password");
const VERIFY_FORGOT_REQUEST_URL: string = AddBase("users/verify_forgot_password");


function AddBase(route:string) :string{
    return `${BASE_URL}${route}`
}

export { REGISTER_URL,LOGIN_URL,FORGOT_REQUEST_URL, VERIFY_FORGOT_REQUEST_URL };
