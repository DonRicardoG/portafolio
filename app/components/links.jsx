import linkLogo from "../../public/img/link.svg";
import caseLogo from "../../public/img/case.svg";
import calendarLogo from "../../public/img/calendar.svg";

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <a href="https://jade-cassondra-88.tiiny.site/" target="_blank">
          <img src={caseLogo} alt="case logo" />
          Available
        </a>
      </li>
      <li>
        <a id="link" href="#">
          <img src={linkLogo} alt="link logo" />
          /links
        </a>
      </li>
      <li>
        <img src={calendarLogo} alt="calendar logo" />
        Joined February 2024
      </li>
    </ul>
  );
};

export default NavLinks;
