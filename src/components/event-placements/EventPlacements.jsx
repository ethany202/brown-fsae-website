import React from "react";
import "./EventPlacements.css";

export default function EventPlacements() {
  const placements = [
    { position: "P4", event: "COST" },
    { position: "P10", event: "ENDURANCE" },
    { position: "P11 (tied)", event: "DESIGN" },
    { position: "P14", event: "BUSINESS" },
    { position: "P17", event: "AUTOCROSS" },
  ];

  return (
    <div className="flex justify-center py-6">
      <div className="flex space-x-10">
        {placements.map((item, idx) => (
          <div key={idx} className="text-center text-white">
            <div className="text-lg font-semibold">
                <h2 className="results text-2xl">{item.position}</h2>
            </div>
            <div className="text-sm tracking-wider">
                <h2 className="results text-2xl">{item.event}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
