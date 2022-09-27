import NewMeetupForm from "../components/meetups/NewMeetupForm";

import { useNavigate } from "react-router-dom";

function NewMeetupsPage() {
  const navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    // here, a http request is fired with an object which was created from the
    // content from the meetup form user input
    // firebase database api: https://react-getting-started-c6a65-default-rtdb.europe-west1.firebasedatabase.app/
    // any additional statement after the url creates a table, here a meetup table. ".json" is s birebase specific todo
    fetch(
      "https://react-getting-started-c6a65-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        header: {
          "Content-Type": "application/json",
        },
      }
      // ".then" statement is executed after the addMeetupHandler content was executed: Here navigate back to home "/"
    ).then(() => {
      navigate("/");
    });
  }

  return (
    <section>
      <h1>Add new meetup</h1>
      <NewMeetupForm addMeetupData={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupsPage;
