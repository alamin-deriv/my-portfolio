import "./Footer.css";
import moment from "moment";

export const Footer = () => {
  return (
    <footer className="container-footer">
      <p class="footer">
        Copyright © Al-amin Abdulkareem Ak {moment().format("YYYY")}. All Rights Reserved
      </p>
    </footer>
  );
};
