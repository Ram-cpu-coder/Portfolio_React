import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contributions: []
}

const githubContributionSlice = createSlice({
    name: "githubContribution",
    initialState,
    reducers: {
        setContributions: (state, action) => { state.contributions = action.payload; },
    }
})
export const { setContributions } = githubContributionSlice.actions;
export default githubContributionSlice.reducer