import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const GithubContributionGraph = () => {
  const { contributions } = useSelector(
    (state) => state.githubContributionInfo
  );
  const data = [...contributions];
  const [weeks, setWeeks] = useState([]);

  useEffect(() => {
    data.sort((a, b) => new Date(a.date) - new Date(b.date));
    data.map((item) => console.log(item.date, "sadkjlfh"));
    const weeksData = [];

    let currentWeek = new Array(7).fill(0);

    data.forEach((item, index) => {
      const date = new Date(item.date);
      const dayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday...

      currentWeek[dayOfWeek] = item.count;
      if (dayOfWeek === 6 || index === data.length - 1) {
        weeksData.push(currentWeek);
        currentWeek = new Array(7).fill(0);
      }
    });

    setWeeks(weeksData);
  }, [contributions]);

  const maxCount = Math.max(...data.map((c) => c.count || 0));

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
    <div style={{ overflowX: "auto" }}>
      <div className="graph-container">
        {/* Graph */}
        <div className="graph-grid ">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="week-column">
              {week.map((count, dayIndex) => (
                <div
                  key={dayIndex}
                  className="day-box"
                  title={`Contributions: ${count}`}
                  style={{ backgroundColor: getColorForContributions(count) }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GithubContributionGraph;
