import { Link, useLocation } from "@remix-run/react";
const Navigation = () => {
  const location = useLocation().pathname;

  return (
    <nav className="navigation">
      <ul>
        <li className={location === "/" ? "active" : ""}>
          <Link to={"/"}>Feed</Link>
        </li>
        <li className={location === "/about" ? "active" : ""}>
          <Link to={"/about"}>About</Link>
        </li>
        <li className={location === "/projects" ? "active" : ""}>
          <Link to={"projects"}>Projects</Link>
        </li>
        <li className={location === "/blog" ? "active" : ""}>
          <Link to={"/blog"}>Blog</Link>
        </li>
        <div className="indicator"></div>
      </ul>
    </nav>
  );
};

export default Navigation;
