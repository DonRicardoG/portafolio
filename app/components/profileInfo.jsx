import verification from "../../public/img/verification.svg";

const ProfileInfo = () => {
  return (
    <div className="profile-information">
      <h1>
        Ricardo Gomez <img src={verification} alt="verification logo" />
      </h1>
      <h2>Bring ideas to code!</h2>
      <h3>
        Full-stack Developer | JavaScript | HTML | CSS | React - Redux | Node.Js
        | TypeScript | Sequelize | Express
      </h3>
    </div>
  );
};

export default ProfileInfo;
