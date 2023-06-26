import { Fragment } from "react";
import { getAllEvents } from "../../dummy-data";

import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search"

function AllEventsList() {
  const events = getAllEvents();
  return (
    <Fragment>
      <EventsSearch />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventsList;