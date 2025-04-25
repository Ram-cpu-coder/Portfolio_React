import { toast } from "react-toastify";
import { contributionFromDbAxios } from "./githubContributionAxios"
import { setContributions } from "./githubContributionSlice";

export const contributionFromDbAction = () => async (dispatch) => {
    const pending = contributionFromDbAxios()
    console.log("pending")
    toast.promise(pending, {
        pending: "Loading ... "
    })
    const { status, data } = await pending;
    setContributions(data)
    console.log(data)
}