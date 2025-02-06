import MeetupByTitle from "../models/MeetupByTitle";

const Header = () => {
  return (
    <header className="container py-3">
      <div className="row g-2">
        <div className="col-md-8">
          <a
            href="/"
            className="text-danger fs-1"
            style={{ fontFamily: "Lucida Handwriting" }}
          >
            Meetup
          </a>
        </div>
      </div>
      <hr />
    </header>
  );
};
export default Header;
