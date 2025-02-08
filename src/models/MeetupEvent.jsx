import useFetch from "../useFetch";
import { useEffect, useState } from "react";
import Img from "./images/Img";
import { Link } from "react-router-dom";
import MeetupDetails from "./MeetupDetalis";

const MeetupEvent = () => {
  const { data, loading, error } = useFetch(
    "https://meetup-backend-tau.vercel.app/meetups",
  );
  const [newData, setNewData] = useState([]);
  useEffect(()=>{
if(data){
  setNewData(data)
}
  },[data])
  const handleByEvent = (event) => {
    const { name, value } = event.target;
    const filterdEvent =
      value === "Both" ? data : data?.filter((e) => e.eventType == value);
    console.log(filterdEvent);
    setNewData(filterdEvent);
  };

  const handleTitle = (event) => {
    const { name, value } = event.target;
    const newValue = data?.filter((titleFil) => titleFil.title.includes(value));
    setNewData(newValue);
  };

  return (
    <>
      <div className="bg-light">
        <header className="container py-3">
          <div className="row g-2">
            <div className="col-md-8">
              <h1
                className="text-danger"
                style={{ fontFamily: "Lucida Handwriting" }}
              >
                Meetup
              </h1>
            </div>
          </div>
          <hr />
        </header>
        <div className="container">
          <div className="row ">
            <div className="col-md-8">
              <p className="fw-bold display-4">Meetup Events</p>
            </div>
            <div className="col-md-4 d-flex">
              <div className="me-2">
                <input
                  type="search"
                  placeholder="Search by title and tag....."
                  className="form-control"
                  name="title"
                  onChange={handleTitle}
                />
              </div>
              <div>
                <select className="form-select" onChange={handleByEvent}>
                  <option value="Both">Select Event Type</option>
                  <option value="Offline">Offline</option>
                  <option value="Online">Online</option>
                </select>
              </div>
            </div>
          </div>

          <p>{loading && "Loading"}</p>
          <div class="row row-cols-1 row-cols-md-3 g-4 mt-5">
            {(newData || data)?.map((app) => (
              <div className="col" key={app._id}>
                <Link
                  to={`/meetupDetails/${app.title}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="card h-100">
                    <img
                      src={app.imageUrl}
                      alt="Event Image"
                      className="card-img-top img-fluid round h-80"
                    />
                    <div className="card-img-overlay">
                      <p className="btn btn-light btn-sm">
                        {app.eventType} Event
                      </p>
                    </div>
                    <div className="card-body">
                    <h4 className="fw-bold card-text">{app.title}</h4>
                    <p className="fw-light">Hosted by: {app.eventHost}</p>
                    <p className="card-text"><strong><i class="bi bi-clock"></i> </strong>{app.date}</p>         
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default MeetupEvent;
