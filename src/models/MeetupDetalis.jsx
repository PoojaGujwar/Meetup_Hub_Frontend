import { useState } from "react";
import Header from "../component/Header";
import useFetch from "../useFetch";
import { useLocation, useParams } from "react-router-dom";

const MeetupDetails = () => {
  const { title } = useParams();
  console.log(title);

  const { data, loading, error } = useFetch(
    `https://meetup-backend-tau.vercel.app/meetups/${title}`,
  );
  console.log(data);
  return (
    <div className="bg-light">
      <Header />
      <div className="container">
        {loading && <p>Loading...</p>}
        {data && (
          <div className="row g-2">
            <div className="col-md-7 ">
              <h1>{data.title}</h1>
              <p className="my-4">
                <small>Hosted by:</small>
                <br />
                <strong className="mb-5">{data.eventHost}</strong>
              </p>
              <img src={data.imageUrl} alt={data.title} className="img-fluid" />
              <h4 className="my-4">Details:</h4>
              <p>{data.eventDescription}</p>
              <h4 className="my-3">Addition Information</h4>
              <p>
                <strong>Dress Code:</strong> Smart Casual
              </p>
              <p>
                <strong>Age Restriction:</strong> 18 and above
              </p>
              <h3>Event Tag</h3>
              <button className="btn btn-danger my-2">marketing</button>
              <button className="btn btn-danger mx-3 ">digital</button>
            </div>
            <div className="col-md-5">
              <div className="card border border-white">
                <div className="card-body">
                  <p className="card-text"><i class="bi bi-clock"></i> {data.date}</p>
                  <p><i class="bi bi-currency-rupee"></i> {data.price}</p>
                </div>
              </div>
              <div className="mt-5">
                <h3 className="fw-bold mb-3">Speakers: (2)</h3>
                <div className="row g-2">
                  <div className="col mx-2">
                    <div className="card border border-light">
                      <img
                        src="https://media.istockphoto.com/id/1129638608/photo/smiling-businesswoman-looking-at-camera-webcam-make-conference-business-call.webp?b=1&s=170667a&w=0&k=20&c=d0aN26OKqnxNt9budnf0j8efj05iaTuJnEtqDeGFocg="
                        alt=""
                        className="img-fluid card-img-top rounded-circle"
                      />
                    </div>
                    <div className="card-body text-center mt-3">
                      <h5>Sarah Joshan</h5>
                      <p>Marketing Manager</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card border border-white">
                      <img
                        src="https://media.istockphoto.com/id/1129638598/photo/businessman-in-suit-looking-at-camera-making-conference-video-call.webp?b=1&s=170667a&w=0&k=20&c=iRUKN45fodkr0AhIFv82MO22w7ELFPNKAM0b7VLdVjg="
                        className="img-fluid card-img-top rounded-circle "
                      />
                    </div>
                    <div className="card-body text-center mt-3">
                      <h5>Michael Brown</h5>
                      <p>SEO specialist</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default MeetupDetails;
