import Link from "next/link";
import Button from "../ui/button";
import classes from './event-item.module.css';


function EventItem(props) {
  const {title, image, date, location, id} = props;

  const readableDate = new Date(date).toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
  const formattedAddress = location.replace(',', '\n');
  const exploreLink = `/events/${id}`;

  return(
    <li className={classes.item}>
      <img srv={'/' + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{readableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>Explore Event</Button>
        </div>
      </div>
    </li>
  )
};

export default EventItem;