import React from "react";
import "./navbar.css";

import Logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <div class="container-fluid d-flex align-items-center justify-content-between border-bottom">
      <div className="d-flex align-items-center">
        <a class="navbar-brand" href="#">
          <div className="d-flex align-items-center mobile_stack">
            <img src={Logo} alt="" />
            <p className="mb-0 logo_title mobile_hide">FE Engineer Test 1</p>
          </div>
        </a>
        <div class="nav nav-tabs ms-5 clear_margin">
          <a class="nav-link active pt-3 pb-3" data-bs-toggle="tab" href="#">
            <span className="d-flex align-items-center">
              <svg
                className="me-2 nav_svgs"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.02708 2.15208C8.12674 2.0546 8.2606 2.00001 8.4 2C8.53415 2.00042 8.66321 2.05137 8.76146 2.14271L12.1333 4.90104V4.13333C12.1333 3.83893 12.3723 3.6 12.6667 3.6H13.2C13.4944 3.6 13.7333 3.83893 13.7333 4.13333V6.20937L14.5854 6.90625C14.598 6.91577 14.6102 6.92585 14.6219 6.93646L14.6302 6.94271C14.7386 7.04369 14.8001 7.18519 14.8 7.33333C14.8 7.62789 14.5612 7.86667 14.2667 7.86667H13.7333V13.7333C13.7333 14.3227 13.256 14.8 12.6667 14.8H4.13333C3.544 14.8 3.06667 14.3227 3.06667 13.7333V7.86667H2.53333C2.23878 7.86667 2 7.62789 2 7.33333C2.00018 7.18556 2.06167 7.04448 2.16979 6.94375V6.94271L2.18958 6.92604C2.19606 6.92068 2.20266 6.91547 2.20937 6.91042L8.02708 2.15208ZM12.1333 8.93333H10V13.2H12.1333V8.93333Z"
                />
              </svg>
              <span className="nav_text">Home</span>
            </span>
          </a>
          <a class="nav-link  pt-3 pb-3" data-bs-toggle="tab" href="#">
            <span className="d-flex align-items-center">
              <svg
                className="me-2 nav_svgs"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.06667 2C2.47733 2 2 2.47733 2 3.06667V4.13333H14.8V3.06667C14.8 2.47733 14.3227 2 13.7333 2H3.06667ZM2.53333 5.2V12.6667C2.53333 13.256 3.01067 13.7333 3.6 13.7333H13.2C13.7893 13.7333 14.2667 13.256 14.2667 12.6667V5.2H2.53333ZM10 6.8H6.8C6.5056 6.8 6.26667 7.03893 6.26667 7.33333C6.26667 7.62773 6.5056 7.86667 6.8 7.86667H10C10.2944 7.86667 10.5333 7.62773 10.5333 7.33333C10.5333 7.03893 10.2944 6.8 10 6.8Z"
                />
              </svg>
              <span className="nav_text">Entries</span>
            </span>
          </a>
          <a class="nav-link pt-3 pb-3" data-bs-toggle="tab" href="#">
            <span className="d-flex align-items-center">
              <svg
                className="me-2 nav_svgs"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.26662 2C5.67728 2 5.19995 2.47733 5.19995 3.06667V12.6667C5.19995 13.256 5.67728 13.7333 6.26662 13.7333H10.5333C11.1226 13.7333 11.6 13.256 11.6 12.6667V3.06667C11.6 2.47733 11.1226 2 10.5333 2H6.26662Z" />
                <path d="M3.06667 3.06668C2.47733 3.06668 2 3.54401 2 4.13335V11.6C2 12.1893 2.47733 12.6667 3.06667 12.6667H4.13333V3.06668H3.06667Z" />
                <path d="M12.6667 3.06668V12.6667H13.7334C14.3227 12.6667 14.8001 12.1893 14.8001 11.6V4.13335C14.8001 3.54401 14.3227 3.06668 13.7334 3.06668H12.6667Z" />
              </svg>
              <span className="nav_text">Division</span>
            </span>
          </a>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <div className="search_area mobile_hide">
          <svg
            className="me-2 ms-2"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.5 13C2.91015 13 0 10.0899 0 6.5C0 2.91015 2.91015 0 6.5 0C10.0899 0 13 2.91015 13 6.5C13 7.99347 12.4963 9.36929 11.6496 10.4669L15.7211 14.3742C16.093 14.7461 16.093 15.3491 15.7211 15.7211C15.3491 16.093 14.7461 16.093 14.3742 15.7211L10.2779 11.79C9.21322 12.5517 7.90896 13 6.5 13ZM6.5 11C8.98528 11 11 8.98528 11 6.5C11 4.01472 8.98528 2 6.5 2C4.01472 2 2 4.01472 2 6.5C2 8.98528 4.01472 11 6.5 11Z"
              fill="#72809D"
            />
          </svg>
          <input className="search_input me-2" type="search" name="" id="" />
        </div>
        <button className="notification mobile_hide d-flex align-items-center justify-content-center ms-3">
          <svg
            width="16"
            height="18"
            viewBox="0 0 16 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.49608 1.4336C6.49608 0.641536 7.13761 0 7.92968 0C8.72174 0 9.36328 0.641536 9.36328 1.4336V1.6212C11.835 2.25885 13.6641 4.49724 13.6641 7.168V8.8844C13.6641 10.0241 13.8981 11.1448 14.3347 12.1856H1.52468C1.96121 11.1441 2.19528 10.0241 2.19528 8.8844V7.168C2.19528 4.49724 4.02437 2.25885 6.49608 1.6212V1.4336ZM0.132407 13.9746C0.262726 13.7514 0.503173 13.6155 0.761677 13.6192H7.92968H15.0977C15.3562 13.6155 15.5966 13.7514 15.7269 13.9746C15.8573 14.1979 15.8573 14.4741 15.7269 14.6974C15.5966 14.9206 15.3562 15.0565 15.0977 15.0528H9.95548C10.0374 15.2829 10.0796 15.5253 10.0801 15.7696C10.0801 16.9572 9.11731 17.92 7.92968 17.92C6.74204 17.92 5.77928 16.9572 5.77928 15.7696C5.78025 15.5252 5.82286 15.2828 5.90528 15.0528H0.761677C0.503173 15.0565 0.262726 14.9206 0.132407 14.6974C0.00208827 14.4741 0.00208827 14.1979 0.132407 13.9746Z"
              fill="#72809D"
            />
          </svg>
        </button>
        <div className="profile d-flex align-items-center justify-content-center ms-3">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.52009 4.224C3.52009 1.89094 5.41103 0 7.74409 0C10.0771 0 11.9681 1.89094 11.9681 4.224V4.928C11.9681 7.26106 10.0771 9.152 7.74409 9.152C5.41103 9.152 3.52009 7.26106 3.52009 4.928V4.224ZM0.262713 14.1433C1.30393 12.7895 4.92249 11.264 7.74271 11.264C10.5629 11.264 14.1829 12.7902 15.2241 14.1433C15.8675 14.9803 15.255 16.192 14.1997 16.192H1.28709C0.231792 16.192 -0.380743 14.9803 0.262713 14.1433Z"
              fill="#72809D"
            />
          </svg>
        </div>
        <div class="dropdown">
          <button
            class="notification"
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.6315 4.1315L1.8105 0.3105C1.3965 -0.1035 0.7245 -0.1035 0.3105 0.3105C-0.1035 0.7245 -0.1035 1.3965 0.3105 1.8105L4.9245 6.4245C5.3155 6.8155 5.9485 6.8155 6.3385 6.4245L10.9525 1.8105C11.3665 1.3965 11.3665 0.7245 10.9525 0.3105C10.5385 -0.1035 9.8665 -0.1035 9.4525 0.3105L5.6315 4.1315Z"
                fill="#72809D"
              />
            </svg>
          </button>
          <ul class="dropdown-menu mt-3" aria-labelledby="dropdownMenuButton2">
            <li>
              <a class="dropdown-item" href="#">
                Metric
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Summary
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Module History
              </a>
            </li>
            <li className="d-flex align-items-center justify-content-center mt-3">
              <div className="search_area tab_hide">
                <svg
                  className="me-2 ms-2"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.5 13C2.91015 13 0 10.0899 0 6.5C0 2.91015 2.91015 0 6.5 0C10.0899 0 13 2.91015 13 6.5C13 7.99347 12.4963 9.36929 11.6496 10.4669L15.7211 14.3742C16.093 14.7461 16.093 15.3491 15.7211 15.7211C15.3491 16.093 14.7461 16.093 14.3742 15.7211L10.2779 11.79C9.21322 12.5517 7.90896 13 6.5 13ZM6.5 11C8.98528 11 11 8.98528 11 6.5C11 4.01472 8.98528 2 6.5 2C4.01472 2 2 4.01472 2 6.5C2 8.98528 4.01472 11 6.5 11Z"
                    fill="#72809D"
                  />
                </svg>
                <input
                  className="search_input me-2"
                  type="search"
                  name=""
                  id=""
                />
              </div>
              <button className="notification tab_hide d-flex align-items-center justify-content-center ms-2">
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.49608 1.4336C6.49608 0.641536 7.13761 0 7.92968 0C8.72174 0 9.36328 0.641536 9.36328 1.4336V1.6212C11.835 2.25885 13.6641 4.49724 13.6641 7.168V8.8844C13.6641 10.0241 13.8981 11.1448 14.3347 12.1856H1.52468C1.96121 11.1441 2.19528 10.0241 2.19528 8.8844V7.168C2.19528 4.49724 4.02437 2.25885 6.49608 1.6212V1.4336ZM0.132407 13.9746C0.262726 13.7514 0.503173 13.6155 0.761677 13.6192H7.92968H15.0977C15.3562 13.6155 15.5966 13.7514 15.7269 13.9746C15.8573 14.1979 15.8573 14.4741 15.7269 14.6974C15.5966 14.9206 15.3562 15.0565 15.0977 15.0528H9.95548C10.0374 15.2829 10.0796 15.5253 10.0801 15.7696C10.0801 16.9572 9.11731 17.92 7.92968 17.92C6.74204 17.92 5.77928 16.9572 5.77928 15.7696C5.78025 15.5252 5.82286 15.2828 5.90528 15.0528H0.761677C0.503173 15.0565 0.262726 14.9206 0.132407 14.6974C0.00208827 14.4741 0.00208827 14.1979 0.132407 13.9746Z"
                    fill="#72809D"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
