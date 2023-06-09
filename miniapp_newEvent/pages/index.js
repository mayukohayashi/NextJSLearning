import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <ul>
      <EventList items={featuredEvents} />
    </ul>
  );
}

export default HomePage;