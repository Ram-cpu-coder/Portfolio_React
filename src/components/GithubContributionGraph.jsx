import axios from "axios";
import React, { useEffect, useState } from "react";

const GithubContributionGraph = ({ username }) => {
  const [contributionData, setContributionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [totalContributions, setTotalContributions] = useState(0);

  const fetchContributions = async () => {
    try {
      setLoading(true);
      //   here we are gettting the data of the
      axios
        .get(`https://api.github.com/users/${username}/events`)
        .then((response) => {
          const contributionsByDate = {};
          response.data.forEach((event) => {
            const date = event.created_at.split("T")[0];
            if (!contributionsByDate[date]) {
              contributionsByDate[date] = 0;
            }
            contributionsByDate[date] += 1;
            setContributionData(contributionsByDate);
            setLoading(false);
          });
        });
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
      setLoading(false);
    }
  };
  console.log(contributionData);
  useEffect(() => {
    fetchContributions();
  }, [username]);
  return <div></div>;
};

export default GithubContributionGraph;
