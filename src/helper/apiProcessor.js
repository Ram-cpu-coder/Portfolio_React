import axios from "axios";

export const apiProcessor = async ({ method, url }) => {
    try {
        const response = await axios({
            method,
            url
        })
        return response
    } catch (error) {
        return {
            status: "error",
        }
    }
}