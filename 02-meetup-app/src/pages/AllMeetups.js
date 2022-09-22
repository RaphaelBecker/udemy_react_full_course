import MeetupList from "../components/meetups/MeetupList";
// useEffect allow the us to run some code on certain conditions
// useEffect helps us in this app to avoid an infitie loop once the AllMeetupPage is loaded
import { useState, useEffect } from "react";

// array of meetup objects (jsx elements):
// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "This is a first meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
//   {
//     id: "m2",
//     title: "This is a second meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
// ];

// transform the array of objects into an array of renderable <li> objects:
// const meetupsList = DUMMY_DATA.map((meetup) => (
//   <li key={meetup.id}> {meetup.title} </li>
// ));

// render the transforemd list onto the AllMeetupsPage by interpolation
function AllMeetupsPage() {
  // Declare a new state variables: laoding states and store loaded meetups array in a state variable
  // example: isLoading is the state variabe (true or false defind by teh argument type on useState(...)
  // setLoading is a function which can be used to manipulate the state variable in our app code flow
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  // GET HTTP request:
  // fetch is per default a get request, so no method type has to be specified.
  // the fetch function returns a promise which resolves into an response in some point of time
  // From that response, we want to read from the body and get the data: response.json()
  // as a GET request takes alittle time, a loading spinner should be implemented as long as the data is not yet received
  // This is done by using useState()
  // useEffect ensures that the HTTP GET request is executed only once the AllMeetupsPage is loaded
  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-c6a65-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // as we expect an array of meetup objects in our app, we have to build a mini interface:
        // Make an array of meetup object from the data we get from the HTTP request:
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  // fall back if data(meetups) is not yet loaded, a section Loading should be displayed
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups:</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
