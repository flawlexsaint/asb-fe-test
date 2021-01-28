import React from "react";
import "./history.css";

import Icon from "../../assets/Icon 2.png";

const History = () => {
  return (
    <div className="container-fluid mt-4">
      <div className="history p-1">
        <div className="d-flex align-items-start">
          <img src={Icon} alt="" />
          <h1 className="history_header_title ms-3">Module History</h1>
        </div>
        <div className="pb-3 mt-4 history_area position-relative d-flex align-items-start">
          <svg
            className="border_svg"
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4.5" cy="4.5" r="4.5" fill="#707070" />
          </svg>
          <div className="ms-3">
            <p className="mb-0 history_title">
              Searched “Journal Entries” on Division module
            </p>
            <p className="mt-2 mb-0 history_text">22:10 15/09/2020 . Web</p>
          </div>
        </div>
        <div className="pb-3 history_area position-relative d-flex align-items-start">
          <svg
            className="border_svg"
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4.5" cy="4.5" r="4.5" fill="#707070" />
          </svg>
          <div className="ms-3">
            <p className="mb-0 history_title">
              Searched “Fingerprint record” on Division module
            </p>
            <p className="mt-2 mb-0 history_text">22:10 15/09/2020 . Web</p>
          </div>
        </div>
        <div className="history_area border-0 position-relative d-flex align-items-start">
          <svg
            className="border_svg"
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4.5" cy="4.5" r="4.5" fill="#707070" />
          </svg>
          <div className="ms-3">
            <p className="mb-0 history_title">
              Searched “Journal Entries” on Division module
            </p>
            <p className="mt-2 mb-0 history_text">22:10 15/09/2020 . Web</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
