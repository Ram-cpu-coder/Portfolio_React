import { configureStore } from "@reduxjs/toolkit";
import contributionReducer from "../feature/githubContributionSlice.js"

export default configureStore({
    reducer: {
        githubContributionInfo: contributionReducer
    }
})