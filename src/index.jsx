import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MeetupByTitle from "./models/MeetupByTitle";
import MeetupFilter from "./models/MeetupFilter";
import MeetupDetails from "./models/MeetupDetalis";
import MeetupEvent from "./models/MeetupEvent";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/meetupTitle",
		element: <MeetupByTitle />,
	},
	{
		path: "/meetupByFilter",
		element: <MeetupFilter />,
	},
	{
		path: "/meetupDetails/:title",
		element: <MeetupDetails />,
	},
	{
		path: "/meetupEvent",
		element: <MeetupEvent />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
