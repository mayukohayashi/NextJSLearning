import Link from "next/link";
import classes from "./main-header.module.css"

function MainHeader() {
  return(
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">
          NewEvents
        </Link>
        <nav className={classes.navigation}>
          <li>
            <Link href="/events">All Events</Link>
          </li>
        </nav>
      </div>
    </header>
  )

}

export default MainHeader;