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

const fn_getHistoryApi = async (data) => {
    try {
        const response = await axios.get(`${ApiUrl}/chat-history`, {
            headers: {
                "Authorization": data,
            }
        });
        return response;
    } catch (error) {
        return error?.response
    }
}

const fn_getHistoryByIdApi = async (token, id) => {
    try {
        const response = await axios.get(`${ApiUrl}/chats/${id}/system-messages-preview/`, {
            headers: {
                "Authorization": token,
            }
        });
        return response;
    } catch (error) {
        return error?.response
    }
}

const fn_getChatHistoryByIdApi = async (token, id) => {
    try {
        const response = await axios.get(`${ApiUrl}/chats/${id}/messages/`, {
            headers: {
                "Authorization": token,
            }
        });
        return response;
    } catch (error) {
        return error?.response
    }
}

export { fn_signupApi, fn_signinApi, fn_getUserDataApi, fn_getHistoryApi, fn_getHistoryByIdApi, fn_getChatHistoryByIdApi }