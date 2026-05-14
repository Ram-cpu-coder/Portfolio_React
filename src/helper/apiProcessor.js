import axios from "axios";

export const apiProcessor = async ({ method, url }) => {
    try {
        const response = await axios({
            method,
            url
        })
        return response
    } catch {
        return {
            status: "error",
        }
    }
}
