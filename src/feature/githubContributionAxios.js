import { apiProcessor } from "../helper/apiProcessor";
const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL + "/contribution"

export const contributionFromDbAxios = () => {
    return apiProcessor({
        method: "get",
        url: baseUrl
    })
}