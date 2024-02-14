import gitLogo from "../../public/img/gitLogo.svg";
import linkedInLogo from "../../public/img/linkedinLogo.svg";
import copyright from "../../public/img/copyright.svg";

const Footer = () => {
  return (
    <footer className="footer-container">
      <ul>
        <li>
          <a href="#" target="_blank">
            <img src={gitLogo} alt="git logo" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <img src={linkedInLogo} alt="LinkedIn logo" />
          </a>
        </li>
      </ul>
      <h1>
        Ricardo Gmz <img src={copyright} alt="copy right logo" />
        <p>{new Date().getFullYear()}</p>
      </h1>
    </footer>
  );
};

export default Footer;
