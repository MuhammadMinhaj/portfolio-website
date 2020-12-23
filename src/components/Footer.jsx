/**
 * Date:22/12/2020
 * Author: Muhammad Minhaj
 * Title: Website Footer
 * Description: This is a Website Footer
 * **/

//  Included Third Pertty Components Or Packages
import {
  Container,
  Typography,
  Button,
  useMediaQuery,
} from "@material-ui/core";
// Included Custom Packages or Componet or Others...
import styled from "../../styles/footer.module.css";
import SocialLinks from "./Social";

const Social = () => (
  <div className={styled.social}>
    <Typography variant="h6" align="center" color="secondary">
      Follow Me
    </Typography>
    <SocialLinks />
  </div>
);
const CopyRight = () => (
  <div className={styled.copyright}>
    <Typography variant="overline" display="block">
      CopyRight©All Reserved
    </Typography>
    <Typography variant="overline">Developed By Muhammad Minhaj</Typography>
  </div>
);

const Footer = () => {
  const isMobile = useMediaQuery("(max-width:576px)");
  return (
    <footer style={{ borderTop: " 1px solid #192331", marginTop: "2rem" }}>
      <Container>
        <div className={styled.footer}>
          <div className={styled.resume}>
            <Button color="secondary" variant="outlined">
              Get Resume
            </Button>
          </div>
          {isMobile ? <Social /> : <CopyRight />}
          {isMobile ? <CopyRight /> : <Social />}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
