/**
 * Date:16/12/2020
 * Author: Muhammad Minhaj
 * Title: Section Of Skills
 * Description: This is a section of skills for showing working with technologies
 * **/

//  Included Third Pertty Components Or Packages
// import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {
  Grow,
  Modal,
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  StepButton,
  Button,
  IconButton,
  useMediaQuery,
} from "@material-ui/core";

// Imported Icons
import {
  Apps as AppsIcon,
  Web as WebIcon,
  Build as BuildIcon,
  Language as LanguageIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Close as CloseIcon,
} from "@material-ui/icons";

// Included Custom Packages or Components
import styled from "../../styles/skills.module.css";

// Imported Actions
import app from "../../redux/actions/app";

// Import Skills List Data from src/data directory
import data from "../data";

const { webAndapps, programming, tools } = data.skills;

const { stepHandleClick, handleModal } = app.skills;

const skillList = [
  [...tools],
  [...programming],
  [...webAndapps],
  [...webAndapps, ...programming, ...tools],
];

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "var(--text)",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <BuildIcon />,
    2: <LanguageIcon />,
    3: <WebIcon />,
    4: <AppsIcon />,
  };
  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

const SkillInnerItem = ({ iconSrc, text, ind, title }) => {
  const dispatch = useDispatch();
  // const isMobileDevice = useMediaQuery("(max-width:576px)");
  return (
    <Grow in>
      <div className={styled.item}>
        <div className={styled.icon} onClick={() => dispatch(handleModal(ind))}>
          {/* <Image
            src={iconSrc}
            alt="Icon"
            width={100}
            height={isMobileDevice ? 80 : 60}
          /> */}
          <img
            src={iconSrc}
            width="100%"
            height="100%"
            alt={`Muhammad Minhaj Skill On ${title}`}
          />
        </div>
        <div className={styled.content}>
          <span>{text}</span>
        </div>
      </div>
    </Grow>
  );
};

const SkillsItem = () => {
  const {
    skills: { activeStep, isOpenModal, index },
  } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  return (
    <section className={styled.skillsContainer}>
      <Modal open={isOpenModal} onClose={() => dispatch(handleModal(null))}>
        <div className={styled.description}>
          {skillList[activeStep][index] && (
            <>
              <div style={{ textAlign: "right" }}>
                <IconButton
                  style={{ padding: "2px", color: "var(--muted)" }}
                  onClick={() => dispatch(handleModal(null))}
                >
                  <CloseIcon />
                </IconButton>
              </div>
              <span className={styled.backgroundTitle}>
                {skillList[activeStep][index].progress}
              </span>

              {/* <Image
                src={skillList[activeStep][index].src}
                alt={skillList[activeStep][index].title}
                width={250}
                height={100}
              /> */}
              <img
                src={skillList[activeStep][index].src}
                width={250}
                height={100}
                alt={`Muhammad Minhaj Skill On ${skillList[activeStep][index].title}`}
              />
              <span>{skillList[activeStep][index].title}</span>

              <p>{skillList[activeStep][index].text}</p>

              <Button
                startIcon={<ChevronRightIcon />}
                style={{ marginTop: "1rem" }}
                variant="outlined"
                color="secondary"
                href={skillList[activeStep][index].url}
                target="blank"
              >
                More Details
              </Button>
            </>
          )}
        </div>
      </Modal>

      <div className={styled.left}>
        {skillList[activeStep].map(
          (skill, ind) =>
            ind % 2 === 0 && (
              <SkillInnerItem
                key={ind}
                iconSrc={skill.src}
                text={skill.progress}
                ind={ind}
                title={skill.title || ""}
              />
            )
        )}
      </div>

      <div className={styled.line}>
        <span>SKILLS</span>
      </div>

      <div className={styled.right}>
        {skillList[activeStep].map(
          (skill, ind) =>
            ind % 2 === 1 && (
              <SkillInnerItem
                key={ind}
                iconSrc={skill.src}
                text={skill.progress}
                ind={ind}
                title={skill.title || ""}
              />
            )
        )}
      </div>
    </section>
  );
};

const Skills = () => {
  const {
    skills: { activeStep, steps },
  } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  return (
    <section>
      <Stepper
        style={{
          justifyContent: "center",
          background: "transparent",
          color: "white",
        }}
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton
              disabled={false}
              onClick={() => dispatch(stepHandleClick(index))}
            >
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                <span style={{ color: "var(--text)" }}>{label}</span>
              </StepLabel>
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <SkillsItem step={activeStep} />
      <div className={styled.skillsBtnContainer}>
        <Button
          startIcon={<ChevronLeftIcon />}
          variant="contained"
          color="secondary"
          disabled={activeStep === 0}
          onClick={() => dispatch(stepHandleClick("decrement"))}
        >
          {steps[activeStep - 1]}
        </Button>
        <Button
          endIcon={<ChevronRightIcon />}
          variant="outlined"
          color="secondary"
          onClick={() => dispatch(stepHandleClick("increment"))}
          disabled={activeStep === steps.length - 1}
        >
          {steps[activeStep + 1]}
        </Button>
      </div>
    </section>
  );
};
export default Skills;
