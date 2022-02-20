/**
 * Date:19/12/2020
 * Author: Muhammad Minhaj
 * Title: Website Services
 * Description: This is a  Services section for showing how many type of services provied to client
 * **/

//  Included Third Pertty Components Or Packages
import { Grow, Paper, Typography } from "@material-ui/core";
// Imported Icons
import {
  Apple as AppleIcon,
  Code as CodeIcon,
  DeveloperMode as DeveloperModeIcon,
  Error as ErrorIcon,
  Public as PublicIcon,
  Speed as SpeedIcon,
  Web as WebIcon,
} from "@material-ui/icons";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@material-ui/lab";
import styled from "../../styles/services.module.css";

const ItemOfTimeLine = ({
  stepNumber,
  IconName,
  iconColor,
  iconVariant,
  title,
  message,
  Connector,
  connectorClass,
}) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography variant="body2" color="secondary">
          0{stepNumber}
        </Typography>
      </TimelineOppositeContent>

      <TimelineSeparator>
        <TimelineDot color={iconColor} variant={iconVariant}>
          <IconName />
        </TimelineDot>
        {Connector ? <Connector className={connectorClass} /> : null}
      </TimelineSeparator>
      <Grow in>
        <TimelineContent>
          <Paper elevation={6} className={styled.paper}>
            <Typography
              variant="overline"
              display="block"
              className={styled.title}
            >
              {title}
            </Typography>

            <Typography variant="body2" className={styled.text}>
              {message}
            </Typography>
          </Paper>
        </TimelineContent>
      </Grow>
    </TimelineItem>
  );
};

const Services = () => {
  const services = [
    {
      title: "Web Design",
      iconColor: "secondary",
      message:
        "I can make excellent UI/UX designs using the latest technology to make your website or apps.",
      iconName: WebIcon,
      connector: TimelineConnector,
      connectorClass: styled.secondaryTail,
    },
    {
      title: "Web Development",
      message:
        "I can develop an API or Restful API for your application. You can use anywhere this API to make a front-end application. also, I do full-stack development and mern-stack development.",
      iconName: CodeIcon,
      iconColor: "primary",
      connector: TimelineConnector,
      connectorClass: styled.primaryMain,
    },
    {
      title: "Android Development",
      message:
        "I can develop a cross-platform application using the React-Native framework. Which is run your Android and IOS platforms.",
      iconName: DeveloperModeIcon,
      iconColor: "secondary",
      connector: TimelineConnector,
      connectorClass: styled.secondaryTail,
    },
    {
      title: "IOS Development",
      message:
        "I can develop a cross-platform application using the React-Native framework. Which is run your Android and IOS platforms.",
      iconName: AppleIcon,
      iconColor: "primary",
      connector: TimelineConnector,
      connectorClass: styled.secondaryTail,
    },
    {
      title: "Bugs Fixing",
      message:
        "I can fix bugs in any kind of website, also fix your cross-platform android application bugs which are made by react-native.",
      iconName: ErrorIcon,
      iconColor: "secondary",
      connector: TimelineConnector,
      connectorClass: styled.primaryMain,
    },
    {
      title: "Structure Of Coding",
      message:
        "I always following the best practices of coding and project structure to make every application. Which is manageable and upgradable and also readable.",
      iconName: SpeedIcon,
      iconColor: "primary",
      connector: TimelineConnector,
      connectorClass: styled.secondaryTail,
    },
    {
      title: "Dyploy To Server",
      message:
        "I can deploy your applications or websites on any type of hosting server to live your applications or website.",
      iconName: PublicIcon,
      iconColor: "secondary",
    },
  ];

  return (
    <section>
      <Timeline align="alternate" className={styled.root}>
        {services.map(
          (
            {
              title,
              message,
              iconName,
              iconColor,
              iconVariant,
              connector,
              connectorClass,
            },
            ind
          ) => (
            <ItemOfTimeLine
              key={ind}
              title={title}
              message={message}
              IconName={iconName}
              iconVariant={iconVariant}
              iconColor={iconColor}
              Connector={connector}
              connectorClass={connectorClass}
              stepNumber={ind + 1}
            />
          )
        )}
      </Timeline>
    </section>
  );
};

export default Services;
