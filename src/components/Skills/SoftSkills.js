import Team from "../../Assets/Icons/skills/teamwork.png";
import Communication from "../../Assets/Icons/skills/communication.png";
import TimeManagement from "../../Assets/Icons/skills/time_management.png";
import Creativity from "../../Assets/Icons/skills/creativity.png";
import PairProgramming from "../../Assets/Icons/skills/pair_programming.png";
import ProblemSolving from "../../Assets/Icons/skills/problem_solving.png";
import ProjectManagement from "../../Assets/Icons/skills/project_management.png";

const SoftSkills = () => {
  return (
    <div className="container__skill">
      <div className="icon__skill__container">
        <img src={TimeManagement} alt="teamwork" />
        <span>Time Management</span>
      </div>
      <div className="icon__skill__container">
        <img src={Communication} alt="teamwork" />
        <span>Communication Skills</span>
      </div>
      <div className="icon__skill__container">
        <img src={ProjectManagement} alt="teamwork" />
        <span>Project Management</span>
      </div>
      <div className="icon__skill__container">
        <img src={Team} alt="teamwork" />
        <span>Teamwork</span>
      </div>
      <div className="icon__skill__container">
        <img src={PairProgramming} alt="teamwork" />
        <span>Pair Programming</span>
      </div>
      <div className="icon__skill__container">
        <img src={ProblemSolving} alt="teamwork" />
        <span>Problem Solving</span>
      </div>
      <div className="icon__skill__container">
        <img src={Creativity} alt="teamwork" />
        <span>Creativity</span>
      </div>
    </div>
  );
};

export default SoftSkills;
