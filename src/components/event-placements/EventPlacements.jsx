import React from "react";
import "./EventPlacements.css";

export default function EventPlacements() {
  const placements = [
    { position: "P6", event: "COST" },
    { position: "P21 (tied)", event: "DESIGN" },
    { position: "P33", event: "AUTOCROSS" },
    { position: "P38", event: "BUSINESS" },
  ];

  return (
    <div className="flex justify-center py-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:flex gap-6 md:gap-10">
        {placements.map((item, idx) => (
          <div key={idx} className="text-center text-white">
            <div className="text-lg font-semibold">
                <h2 className="results text-xl md:text-2xl">{item.position}</h2>
            </div>
            <div className="text-sm tracking-wider">
                <h2 className="results text-xl md:text-2xl">{item.event}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
