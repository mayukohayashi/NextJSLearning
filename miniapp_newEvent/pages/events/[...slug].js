import {useRouter} from "next/router";

function FilteredEventPage() {
  const router = useRouter();
  const filterData = router.query.slug;

  if(!filterData) {
    return <p className="center">Loading...</p>
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2020 || numMonth < 1 || numMonth > 12) {
    return <p> Invalid Filtered</p>
  }

  const filteredEvents = getFilteredEvents({
    year : numYear,
    mont : numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No events found</p>
  }

  return (
    <div>Filtered Event!</div>
  );
}

export default FilteredEventPage;