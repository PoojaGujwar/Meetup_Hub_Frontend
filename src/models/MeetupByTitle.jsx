import { useState } from "react";
import useFetch from "../useFetch";

const MeetupByTitle = () => {
  const [title, setNewTitle] = useState();
  const { data, loading, error } = useFetch(
    `https://66333c24-49f4-4d46-af1a-defc6ae00a16-00-2re4vyjyf5g3a.pike.replit.dev/meetups/${title}`,
  );
 //console.log(data)
  return (
    <div className="container">
      <input
        type="search"
        placeholder="Search by title and tag"
        className="form-control ds-input"
        name="title"
        onChange={() => setNewTitle(event.target.value)}
      />
    </div>
  );
};
export default MeetupByTitle;
