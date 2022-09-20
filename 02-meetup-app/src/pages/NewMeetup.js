import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage() {
  function addMeetupHandler(meetupData) {
    // here, a http request is fired with an object which was created from the
    // content from the meetup form user input
  }

  return (
    <section>
      <h1>Add new meetup</h1>
      <NewMeetupForm addMeetupData={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupsPage;
