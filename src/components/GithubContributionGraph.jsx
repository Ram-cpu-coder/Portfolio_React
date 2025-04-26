import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const GithubContributionGraph = () => {
  const { contributions } = useSelector(
    (state) => state.githubContributionInfo
  );
  const [days, setDays] = useState([]);

  const getDayOfYear = (date) => {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  };

  useEffect(() => {
    const reversed = [...contributions].reverse(); // oldest → latest
    const daysInYear = Array.from({ length: 52 }, () => Array(7).fill(0));

    reversed.forEach((contribution) => {
      const date = new Date(contribution.date);
      const dayOfYear = getDayOfYear(date);
      const weekOfYear = Math.floor(dayOfYear / 7);
      const dayOfWeek = date.getDay();

      if (
        weekOfYear < 52 &&
        weekOfYear >= 0 &&
        dayOfWeek < 7 &&
        dayOfWeek >= 0
      ) {
        daysInYear[weekOfYear][dayOfWeek] = contribution.count;
      }
    });

    setDays(daysInYear);
  }, [contributions]);

  const maxCount = Math.max(...contributions.map((c) => c.count || 0));

  const getColorForContributions = (count) => {
    if (count === 0) return "#ebedf0";
    const level = Math.ceil((count / maxCount) * 4);
    switch (level) {
      case 1:
        return "#c6e48b";
      case 2:
        return "#7bc96f";
      case 3:
        return "#239a3b";
      default:
        return "#196127";
    }
  };

  return (
    <div
      style={{ maxWidth: "100%" }}
      className="d-flex justify-content-center align-items-center border rounded"
    >
      <div className="contribution-graph">
        {days.map((week, weekIndex) =>
          week.map((count, dayIndex) => (
            <div
              key={`${weekIndex}-${dayIndex}`}
              className="day-box"
              style={{ backgroundColor: getColorForContributions(count) }}
            >
              <div className="tooltip">
                Date:{" "}
                {new Date(
                  2024,
                  0,
                  weekIndex * 7 + dayIndex + 1
                ).toLocaleDateString()}
                <br />
                Contributions: {count}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GithubContributionGraph;
