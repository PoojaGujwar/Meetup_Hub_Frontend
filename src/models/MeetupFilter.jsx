import { useState } from "react";
import useFetch from "../useFetch";

const MeetupFilter = ({ eventType }) => {
  const [eventName, setEvent] = useState();
  const { data, loading, error } = useFetch(
    `https://66333c24-49f4-4d46-af1a-defc6ae00a16-00-2re4vyjyf5g3a.pike.replit.dev/meetups/event/${eventName}`,
  );
  console.log(data);
  return (
    <div>
      <label className="fs-5">Search Event type</label>
      <select
        className="form-select"
        onChange={() => setEvent(event.target.value)}
      >
        <option value="Both">Select Event Type</option>
        <option value="Offline">Offline</option>
        <option value="Online">Online</option>
      </select>
    </div>
  );
};
export default MeetupFilter;
