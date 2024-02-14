import ProfileInfo from "./profileInfo";
import NavLinks from "./links";
import Navigation from "./navigation";
import gitLogo from "../../public/img/whiteGit.svg";
import me from "../../public/img/me.jpeg";
import Animation from "./animation";

export function meta() {
  return [{ title: "RicardoGmz - WebDeveloper" }];
}

export default function StaticInfo() {
  return (
    <>
      <main className="main-container">
        <div className="background">
          <Animation />
          <div className="main-profile">
            <img className="avatar" src={me} alt="avatar photo" />
            <a href="https://github.com/DonRicardoG" target="_blank">
              Follow
              <img src={gitLogo} alt="git logo" />
            </a>
          </div>
        </div>
      </main>
      <div className="second-container">
        <ProfileInfo />
        <NavLinks />
        <Navigation />
      </div>
    </>
  );
}
