import React from "react";
import { useParams } from "react-router";
import EventCard from "../../components/eventCard";
import NavBar from "../../components/navbar";

function EventPage() {
  
  return (
    <div>
      <NavBar />
      <div style={{ paddingLeft: "5%", paddingTop: 1, paddingBottom: 50 }}>
        <h1 style={{ color: "#3d3d3d", fontSize: 40 }}>Events</h1>
        <EventCard></EventCard>
      </div>
    </div>
  );
}

export default EventPage;
