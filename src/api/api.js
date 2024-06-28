import axios from "axios";

const ApiUrl = "https://cvs2rd7n-8000.inc1.devtunnels.ms/bot";

const fn_signupApi = async (data) => {
    delete data.confirm_password;
    try {
        const response = await axios.post(`${ApiUrl}/SignupView`, data);
        return response;
    } catch (error) {
        return error?.response
    }
}

const fn_signinApi = async (data) => {
    try {
        const response = await axios.post(`${ApiUrl}/LoginView`, data);
        return response;
    } catch (error) {
        return error?.response
    }
}

const fn_getUserDataApi = async (data) => {
    try {
        const response = await axios.get(`${ApiUrl}/UserProfileView`, {
            headers: {
                "Authorization": data,
            }
        });
        return response;
    } catch (error) {
        return error?.response
    }
}

export { fn_signupApi, fn_signinApi, fn_getUserDataApi }