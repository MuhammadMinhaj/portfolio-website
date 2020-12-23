/**
 * Date:19/12/2020
 * Author: Muhammad Minhaj
 * Title: Website Services
 * Description: This is a  Services section for showing how many type of services provied to client
 * **/

//  Included Third Pertty Components Or Packages
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grow, Typography, Divider } from "@material-ui/core";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@material-ui/lab";

// Imported Icons
import {
  Web as WebIcon,
  Code as CodeIcon,
  DeveloperMode as DeveloperModeIcon,
  Apple as AppleIcon,
  Error as ErrorIcon,
  Speed as SpeedIcon,
  Public as PublicIcon,
} from "@material-ui/icons";

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
        "I can do an excellent UI/UX design using the latest and powerful technologys for web design and also can responsive design of the web pages.",
      iconName: WebIcon,
      connector: TimelineConnector,
      connectorClass: styled.secondaryTail,
    },
    {
      title: "Web Development",
      message:
        "I can make API or rest API for spa applications and mobile applications and I also can connect API with your spa application or any other application to make the dynamic web application.",
      iconName: CodeIcon,
      iconColor: "primary",
      connector: TimelineConnector,
      connectorClass: styled.primaryMain,
    },
    {
      title: "Android Development",
      message:
        "I can make a cross-platform application using the react-native and I also can awesome design for any kind of android application.",
      iconName: DeveloperModeIcon,
      iconColor: "secondary",
      connector: TimelineConnector,
      connectorClass: styled.secondaryTail,
    },
    {
      title: "IOS Development",
      message:
        "I can make a cross-platform application using the react-native and I also can awesome design for any kind of IOS application.",
      iconName: AppleIcon,
      iconColor: "primary",
      connector: TimelineConnector,
      connectorClass: styled.secondaryTail,
    },
    {
      title: "Bugs Fixing",
      message:
        "I can easily fixed bugs of any kind of web application and also can optimize web application.",
      iconName: ErrorIcon,
      iconColor: "secondary",
      connector: TimelineConnector,
      connectorClass: styled.primaryMain,
    },
    {
      title: "Structure Of Coding",
      message:
        "I always following strong and best coding structure to make any kind of applications,and my coding styles is very manageable and upgradable and also readable.",
      iconName: SpeedIcon,
      iconColor: "primary",
      connector: TimelineConnector,
      connectorClass: styled.secondaryTail,
    },
    {
      title: "Dyploy To Server",
      message:
        "I can deploy applications or websites in any kind of hosting server.",
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
