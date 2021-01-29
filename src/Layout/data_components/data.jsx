import React from "react";
import "./data.css";

const Data = () => {
  return (
    <div className="custom_container">
      <div className="scroll table_shadow">
        <div className="table_grid ps-3 pe-3">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </div>
          <div className="empty"></div>
          <div className="table_title">Name</div>
          <div className="table_title">Location</div>
          <div className="table_title">Status</div>
          <div className="table_title">Entries</div>
          <div className="table_title">Risk Profile</div>
          <div className="table_title"></div>
        </div>
        <div className="table_grid_data mt ps-3 pe-3">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </div>
          <div className="empty">
            <svg
              className="mb-1"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.97895 9.85263C7.24737 10.1211 7.73684 10.1211 8.00526 9.85263L10.8474 7.01053C11.1316 6.72632 11.1316 6.26842 10.8474 5.98421C10.5632 5.7 10.1053 5.7 9.82105 5.98421L7.5 8.30526L5.17895 5.98421C5.03684 5.84211 4.84737 5.76316 4.65789 5.76316C4.46842 5.76316 4.27895 5.84211 4.13684 5.98421C3.85263 6.26842 3.85263 6.72632 4.13684 7.01053L6.97895 9.85263Z"
                fill="#0052CC"
              />
              <path
                d="M7.5 15C11.6368 15 15 11.6368 15 7.5C15 3.36316 11.6368 0 7.5 0C3.36316 0 0 3.36316 0 7.5C0 11.6368 3.36316 15 7.5 15ZM7.5 1.45263C10.8316 1.45263 13.5474 4.16842 13.5474 7.5C13.5474 10.8316 10.8316 13.5474 7.5 13.5474C4.16842 13.5474 1.45263 10.8316 1.45263 7.5C1.45263 4.16842 4.16842 1.45263 7.5 1.45263Z"
                fill="#0052CC"
              />
            </svg>
          </div>
          <div className="">
            <p className="mb-0 table_text">Courtney Henry</p>
          </div>
          <div className="">
            <h1 className="table_header_title mb-0">Lagos State</h1>
            <p className="mb-0 table_header_text">775 Rolling Green Rd.s</p>
          </div>
          <div className="table_status d-flex align-items-center justify-content-center">
            <h1 className="mb-0 status_no_issue">No Issue</h1>
          </div>
          <div className="">
            <div className="d-flex align-items-center">
              <svg
                width="6"
                height="7"
                viewBox="0 0 6 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3" cy="3.5" r="3" fill="#25213B" />
              </svg>
              <p className="mb-0 entries_title ms-2">19 Unique Entries</p>
            </div>
            <p className="mb-0 entries_text">Homogenous</p>
          </div>
          <div className="">
            <div className="d-flex align-items">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.83317 5.83366L14.1665 14.167"
                  stroke="#3AB65C"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.1665 5.83366V14.167H5.83317"
                  stroke="#3AB65C"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="mb-0 risk_text ms-2">Low Risk</p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2.6667C9.46957 2.6667 8.96086 2.87742 8.58579 3.25249C8.21071 3.62756 8 4.13627 8 4.6667C8 5.19714 8.21071 5.70584 8.58579 6.08092C8.96086 6.45599 9.46957 6.6667 10 6.6667C10.5304 6.6667 11.0391 6.45599 11.4142 6.08092C11.7893 5.70584 12 5.19714 12 4.6667C12 4.13627 11.7893 3.62756 11.4142 3.25249C11.0391 2.87742 10.5304 2.6667 10 2.6667ZM10 8.00004C9.46957 8.00004 8.96086 8.21075 8.58579 8.58582C8.21071 8.96089 8 9.4696 8 10C8 10.5305 8.21071 11.0392 8.58579 11.4142C8.96086 11.7893 9.46957 12 10 12C10.5304 12 11.0391 11.7893 11.4142 11.4142C11.7893 11.0392 12 10.5305 12 10C12 9.4696 11.7893 8.96089 11.4142 8.58582C11.0391 8.21075 10.5304 8.00004 10 8.00004ZM10 13.3334C9.46957 13.3334 8.96086 13.5441 8.58579 13.9192C8.21071 14.2942 8 14.8029 8 15.3334C8 15.8638 8.21071 16.3725 8.58579 16.7476C8.96086 17.1227 9.46957 17.3334 10 17.3334C10.5304 17.3334 11.0391 17.1227 11.4142 16.7476C11.7893 16.3725 12 15.8638 12 15.3334C12 14.8029 11.7893 14.2942 11.4142 13.9192C11.0391 13.5441 10.5304 13.3334 10 13.3334Z"
                fill="#C3C3C3"
              />
            </svg>
          </div>
        </div>
        <div className="table_grid_data mt ps-3 pe-3">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </div>
          <div className="empty">
            <svg
              className="mb-1"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.97895 9.85263C7.24737 10.1211 7.73684 10.1211 8.00526 9.85263L10.8474 7.01053C11.1316 6.72632 11.1316 6.26842 10.8474 5.98421C10.5632 5.7 10.1053 5.7 9.82105 5.98421L7.5 8.30526L5.17895 5.98421C5.03684 5.84211 4.84737 5.76316 4.65789 5.76316C4.46842 5.76316 4.27895 5.84211 4.13684 5.98421C3.85263 6.26842 3.85263 6.72632 4.13684 7.01053L6.97895 9.85263Z"
                fill="#0052CC"
              />
              <path
                d="M7.5 15C11.6368 15 15 11.6368 15 7.5C15 3.36316 11.6368 0 7.5 0C3.36316 0 0 3.36316 0 7.5C0 11.6368 3.36316 15 7.5 15ZM7.5 1.45263C10.8316 1.45263 13.5474 4.16842 13.5474 7.5C13.5474 10.8316 10.8316 13.5474 7.5 13.5474C4.16842 13.5474 1.45263 10.8316 1.45263 7.5C1.45263 4.16842 4.16842 1.45263 7.5 1.45263Z"
                fill="#0052CC"
              />
            </svg>
          </div>
          <div className="">
            <p className="mb-0 table_text">Darrell Steward</p>
          </div>
          <div className="">
            <h1 className="table_header_title mb-0">Lagos State</h1>
            <p className="mb-0 table_header_text">7529 E. Pecan St.</p>
          </div>
          <div className="issues_found d-flex align-items-center justify-content-center">
            <h1 className="mb-0 issues_found_text">2 Issues found</h1>
          </div>
          <div className="">
            <div className="d-flex align-items-center">
              <svg
                width="6"
                height="7"
                viewBox="0 0 6 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3" cy="3.5" r="3" fill="#25213B" />
              </svg>
              <p className="mb-0 entries_title ms-2">10 Unique Entries</p>
            </div>
            <p className="mb-0 entries_text">Homogenous</p>
          </div>
          <div className="">
            <div className="d-flex align-items">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.10771 8.0003H13.8928"
                  stroke="#3C3AB6"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.00027 2.10775L13.8928 8.0003L8.00027 13.8929"
                  stroke="#3C3AB6"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p className="mb-0 mid_risk ms-2">Mid Risk</p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2.6667C9.46957 2.6667 8.96086 2.87742 8.58579 3.25249C8.21071 3.62756 8 4.13627 8 4.6667C8 5.19714 8.21071 5.70584 8.58579 6.08092C8.96086 6.45599 9.46957 6.6667 10 6.6667C10.5304 6.6667 11.0391 6.45599 11.4142 6.08092C11.7893 5.70584 12 5.19714 12 4.6667C12 4.13627 11.7893 3.62756 11.4142 3.25249C11.0391 2.87742 10.5304 2.6667 10 2.6667ZM10 8.00004C9.46957 8.00004 8.96086 8.21075 8.58579 8.58582C8.21071 8.96089 8 9.4696 8 10C8 10.5305 8.21071 11.0392 8.58579 11.4142C8.96086 11.7893 9.46957 12 10 12C10.5304 12 11.0391 11.7893 11.4142 11.4142C11.7893 11.0392 12 10.5305 12 10C12 9.4696 11.7893 8.96089 11.4142 8.58582C11.0391 8.21075 10.5304 8.00004 10 8.00004ZM10 13.3334C9.46957 13.3334 8.96086 13.5441 8.58579 13.9192C8.21071 14.2942 8 14.8029 8 15.3334C8 15.8638 8.21071 16.3725 8.58579 16.7476C8.96086 17.1227 9.46957 17.3334 10 17.3334C10.5304 17.3334 11.0391 17.1227 11.4142 16.7476C11.7893 16.3725 12 15.8638 12 15.3334C12 14.8029 11.7893 14.2942 11.4142 13.9192C11.0391 13.5441 10.5304 13.3334 10 13.3334Z"
                fill="#C3C3C3"
              />
            </svg>
          </div>
        </div>
        <div className="table_grid_data mt ps-3 pe-3">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </div>
          <div className="empty">
            <svg
              className="mb-1"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.97895 9.85263C7.24737 10.1211 7.73684 10.1211 8.00526 9.85263L10.8474 7.01053C11.1316 6.72632 11.1316 6.26842 10.8474 5.98421C10.5632 5.7 10.1053 5.7 9.82105 5.98421L7.5 8.30526L5.17895 5.98421C5.03684 5.84211 4.84737 5.76316 4.65789 5.76316C4.46842 5.76316 4.27895 5.84211 4.13684 5.98421C3.85263 6.26842 3.85263 6.72632 4.13684 7.01053L6.97895 9.85263Z"
                fill="#0052CC"
              />
              <path
                d="M7.5 15C11.6368 15 15 11.6368 15 7.5C15 3.36316 11.6368 0 7.5 0C3.36316 0 0 3.36316 0 7.5C0 11.6368 3.36316 15 7.5 15ZM7.5 1.45263C10.8316 1.45263 13.5474 4.16842 13.5474 7.5C13.5474 10.8316 10.8316 13.5474 7.5 13.5474C4.16842 13.5474 1.45263 10.8316 1.45263 7.5C1.45263 4.16842 4.16842 1.45263 7.5 1.45263Z"
                fill="#0052CC"
              />
            </svg>
          </div>
          <div className="">
            <p className="mb-0 table_text">Cody Fisher</p>
          </div>
          <div className="">
            <h1 className="table_header_title mb-0">Lagos State</h1>
            <p className="mb-0 table_header_text">3605 Parker Rd.</p>
          </div>
          <div className="table_status d-flex align-items-center justify-content-center">
            <h1 className="mb-0 status_no_issue">No Issue</h1>
          </div>
          <div className="">
            <div className="d-flex align-items-center">
              <svg
                width="6"
                height="7"
                viewBox="0 0 6 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3" cy="3.5" r="3" fill="#25213B" />
              </svg>
              <p className="mb-0 entries_title ms-2">8 Unique Entries</p>
            </div>
            <p className="mb-0 entries_text">Homogenous</p>
          </div>
          <div className="">
            <div className="d-flex align-items">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.10771 8.0003H13.8928"
                  stroke="#3C3AB6"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.00027 2.10775L13.8928 8.0003L8.00027 13.8929"
                  stroke="#3C3AB6"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="mb-0 mid_risk ms-2">Mid Risk</p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2.6667C9.46957 2.6667 8.96086 2.87742 8.58579 3.25249C8.21071 3.62756 8 4.13627 8 4.6667C8 5.19714 8.21071 5.70584 8.58579 6.08092C8.96086 6.45599 9.46957 6.6667 10 6.6667C10.5304 6.6667 11.0391 6.45599 11.4142 6.08092C11.7893 5.70584 12 5.19714 12 4.6667C12 4.13627 11.7893 3.62756 11.4142 3.25249C11.0391 2.87742 10.5304 2.6667 10 2.6667ZM10 8.00004C9.46957 8.00004 8.96086 8.21075 8.58579 8.58582C8.21071 8.96089 8 9.4696 8 10C8 10.5305 8.21071 11.0392 8.58579 11.4142C8.96086 11.7893 9.46957 12 10 12C10.5304 12 11.0391 11.7893 11.4142 11.4142C11.7893 11.0392 12 10.5305 12 10C12 9.4696 11.7893 8.96089 11.4142 8.58582C11.0391 8.21075 10.5304 8.00004 10 8.00004ZM10 13.3334C9.46957 13.3334 8.96086 13.5441 8.58579 13.9192C8.21071 14.2942 8 14.8029 8 15.3334C8 15.8638 8.21071 16.3725 8.58579 16.7476C8.96086 17.1227 9.46957 17.3334 10 17.3334C10.5304 17.3334 11.0391 17.1227 11.4142 16.7476C11.7893 16.3725 12 15.8638 12 15.3334C12 14.8029 11.7893 14.2942 11.4142 13.9192C11.0391 13.5441 10.5304 13.3334 10 13.3334Z"
                fill="#C3C3C3"
              />
            </svg>
          </div>
        </div>
        <div className="table_grid_data mt ps-3 pe-3">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </div>
          <div className="empty">
            <svg
              className="mb-1"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.97895 9.85263C7.24737 10.1211 7.73684 10.1211 8.00526 9.85263L10.8474 7.01053C11.1316 6.72632 11.1316 6.26842 10.8474 5.98421C10.5632 5.7 10.1053 5.7 9.82105 5.98421L7.5 8.30526L5.17895 5.98421C5.03684 5.84211 4.84737 5.76316 4.65789 5.76316C4.46842 5.76316 4.27895 5.84211 4.13684 5.98421C3.85263 6.26842 3.85263 6.72632 4.13684 7.01053L6.97895 9.85263Z"
                fill="#0052CC"
              />
              <path
                d="M7.5 15C11.6368 15 15 11.6368 15 7.5C15 3.36316 11.6368 0 7.5 0C3.36316 0 0 3.36316 0 7.5C0 11.6368 3.36316 15 7.5 15ZM7.5 1.45263C10.8316 1.45263 13.5474 4.16842 13.5474 7.5C13.5474 10.8316 10.8316 13.5474 7.5 13.5474C4.16842 13.5474 1.45263 10.8316 1.45263 7.5C1.45263 4.16842 4.16842 1.45263 7.5 1.45263Z"
                fill="#0052CC"
              />
            </svg>
          </div>
          <div className="">
            <p className="mb-0 table_text">Bessie Cooper</p>
          </div>
          <div className="">
            <h1 className="table_header_title mb-0">Lagos State</h1>
            <p className="mb-0 table_header_text">775 Rolling Green Rd.s</p>
          </div>
          <div className="issues_found d-flex align-items-center justify-content-center">
            <h1 className="mb-0 issues_found_text">1 Issue Found</h1>
          </div>
          <div className="">
            <div className="d-flex align-items-center">
              <svg
                width="6"
                height="7"
                viewBox="0 0 6 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3" cy="3.5" r="3" fill="#25213B" />
              </svg>
              <p className="mb-0 entries_title ms-2">12 Unique Entries</p>
            </div>
            <p className="mb-0 entries_text">Homogenous</p>
          </div>
          <div className="">
            <div className="d-flex align-items">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.94891 13.8921L8.05176 2.10748"
                  stroke="#B63A3A"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.10801 7.94839L8.05176 2.10748L13.8927 8.05124"
                  stroke="#B63A3A"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="mb-0 high_risk ms-2">High Risk</p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2.6667C9.46957 2.6667 8.96086 2.87742 8.58579 3.25249C8.21071 3.62756 8 4.13627 8 4.6667C8 5.19714 8.21071 5.70584 8.58579 6.08092C8.96086 6.45599 9.46957 6.6667 10 6.6667C10.5304 6.6667 11.0391 6.45599 11.4142 6.08092C11.7893 5.70584 12 5.19714 12 4.6667C12 4.13627 11.7893 3.62756 11.4142 3.25249C11.0391 2.87742 10.5304 2.6667 10 2.6667ZM10 8.00004C9.46957 8.00004 8.96086 8.21075 8.58579 8.58582C8.21071 8.96089 8 9.4696 8 10C8 10.5305 8.21071 11.0392 8.58579 11.4142C8.96086 11.7893 9.46957 12 10 12C10.5304 12 11.0391 11.7893 11.4142 11.4142C11.7893 11.0392 12 10.5305 12 10C12 9.4696 11.7893 8.96089 11.4142 8.58582C11.0391 8.21075 10.5304 8.00004 10 8.00004ZM10 13.3334C9.46957 13.3334 8.96086 13.5441 8.58579 13.9192C8.21071 14.2942 8 14.8029 8 15.3334C8 15.8638 8.21071 16.3725 8.58579 16.7476C8.96086 17.1227 9.46957 17.3334 10 17.3334C10.5304 17.3334 11.0391 17.1227 11.4142 16.7476C11.7893 16.3725 12 15.8638 12 15.3334C12 14.8029 11.7893 14.2942 11.4142 13.9192C11.0391 13.5441 10.5304 13.3334 10 13.3334Z"
                fill="#C3C3C3"
              />
            </svg>
          </div>
        </div>
        <div className="table_grid_data mt ps-3 pe-3">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </div>
          <div className="empty">
            <svg
              className="mb-1"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.97895 9.85263C7.24737 10.1211 7.73684 10.1211 8.00526 9.85263L10.8474 7.01053C11.1316 6.72632 11.1316 6.26842 10.8474 5.98421C10.5632 5.7 10.1053 5.7 9.82105 5.98421L7.5 8.30526L5.17895 5.98421C5.03684 5.84211 4.84737 5.76316 4.65789 5.76316C4.46842 5.76316 4.27895 5.84211 4.13684 5.98421C3.85263 6.26842 3.85263 6.72632 4.13684 7.01053L6.97895 9.85263Z"
                fill="#0052CC"
              />
              <path
                d="M7.5 15C11.6368 15 15 11.6368 15 7.5C15 3.36316 11.6368 0 7.5 0C3.36316 0 0 3.36316 0 7.5C0 11.6368 3.36316 15 7.5 15ZM7.5 1.45263C10.8316 1.45263 13.5474 4.16842 13.5474 7.5C13.5474 10.8316 10.8316 13.5474 7.5 13.5474C4.16842 13.5474 1.45263 10.8316 1.45263 7.5C1.45263 4.16842 4.16842 1.45263 7.5 1.45263Z"
                fill="#0052CC"
              />
            </svg>
          </div>
          <div className="">
            <p className="mb-0 table_text">Annette Black</p>
          </div>
          <div className="">
            <h1 className="table_header_title mb-0">Lagos State</h1>
            <p className="mb-0 table_header_text">8080 Railroad St.</p>
          </div>
          <div className="table_status d-flex align-items-center justify-content-center">
            <h1 className="mb-0 status_no_issue">No Issue</h1>
          </div>
          <div className="">
            <div className="d-flex align-items-center">
              <svg
                width="6"
                height="7"
                viewBox="0 0 6 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3" cy="3.5" r="3" fill="#25213B" />
              </svg>
              <p className="mb-0 entries_title ms-2">13 Unique Entries</p>
            </div>
            <p className="mb-0 entries_text">Homogenous</p>
          </div>
          <div className="">
            <div className="d-flex align-items">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.83317 5.83366L14.1665 14.167"
                  stroke="#3AB65C"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.1665 5.83366V14.167H5.83317"
                  stroke="#3AB65C"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="mb-0 risk_text ms-2">Low Risk</p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2.6667C9.46957 2.6667 8.96086 2.87742 8.58579 3.25249C8.21071 3.62756 8 4.13627 8 4.6667C8 5.19714 8.21071 5.70584 8.58579 6.08092C8.96086 6.45599 9.46957 6.6667 10 6.6667C10.5304 6.6667 11.0391 6.45599 11.4142 6.08092C11.7893 5.70584 12 5.19714 12 4.6667C12 4.13627 11.7893 3.62756 11.4142 3.25249C11.0391 2.87742 10.5304 2.6667 10 2.6667ZM10 8.00004C9.46957 8.00004 8.96086 8.21075 8.58579 8.58582C8.21071 8.96089 8 9.4696 8 10C8 10.5305 8.21071 11.0392 8.58579 11.4142C8.96086 11.7893 9.46957 12 10 12C10.5304 12 11.0391 11.7893 11.4142 11.4142C11.7893 11.0392 12 10.5305 12 10C12 9.4696 11.7893 8.96089 11.4142 8.58582C11.0391 8.21075 10.5304 8.00004 10 8.00004ZM10 13.3334C9.46957 13.3334 8.96086 13.5441 8.58579 13.9192C8.21071 14.2942 8 14.8029 8 15.3334C8 15.8638 8.21071 16.3725 8.58579 16.7476C8.96086 17.1227 9.46957 17.3334 10 17.3334C10.5304 17.3334 11.0391 17.1227 11.4142 16.7476C11.7893 16.3725 12 15.8638 12 15.3334C12 14.8029 11.7893 14.2942 11.4142 13.9192C11.0391 13.5441 10.5304 13.3334 10 13.3334Z"
                fill="#C3C3C3"
              />
            </svg>
          </div>
        </div>
        <div className="table_grid_data mt ps-3 pe-3">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </div>
          <div className="empty">
            <svg
              className="mb-1"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.97895 9.85263C7.24737 10.1211 7.73684 10.1211 8.00526 9.85263L10.8474 7.01053C11.1316 6.72632 11.1316 6.26842 10.8474 5.98421C10.5632 5.7 10.1053 5.7 9.82105 5.98421L7.5 8.30526L5.17895 5.98421C5.03684 5.84211 4.84737 5.76316 4.65789 5.76316C4.46842 5.76316 4.27895 5.84211 4.13684 5.98421C3.85263 6.26842 3.85263 6.72632 4.13684 7.01053L6.97895 9.85263Z"
                fill="#0052CC"
              />
              <path
                d="M7.5 15C11.6368 15 15 11.6368 15 7.5C15 3.36316 11.6368 0 7.5 0C3.36316 0 0 3.36316 0 7.5C0 11.6368 3.36316 15 7.5 15ZM7.5 1.45263C10.8316 1.45263 13.5474 4.16842 13.5474 7.5C13.5474 10.8316 10.8316 13.5474 7.5 13.5474C4.16842 13.5474 1.45263 10.8316 1.45263 7.5C1.45263 4.16842 4.16842 1.45263 7.5 1.45263Z"
                fill="#0052CC"
              />
            </svg>
          </div>
          <div className="">
            <p className="mb-0 table_text">Jenny Wilson</p>
          </div>
          <div className="">
            <h1 className="table_header_title mb-0">Lagos State</h1>
            <p className="mb-0 table_header_text">8080 Railroad St.</p>
          </div>
          <div className="issues_found d-flex align-items-center justify-content-center">
            <h1 className="issues_found_text mb-0 status_no_issue">
              5 Issues Found
            </h1>
          </div>
          <div className="">
            <div className="d-flex align-items-center">
              <svg
                width="6"
                height="7"
                viewBox="0 0 6 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3" cy="3.5" r="3" fill="#25213B" />
              </svg>
              <p className="mb-0 entries_title ms-2">18 Unique Entries</p>
            </div>
            <p className="mb-0 entries_text">Homogenous</p>
          </div>
          <div className="">
            <div className="d-flex align-items">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.94891 13.8921L8.05176 2.10748"
                  stroke="#B63A3A"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.10801 7.94839L8.05176 2.10748L13.8927 8.05124"
                  stroke="#B63A3A"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="mb-0 high_risk ms-2">High Risk</p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2.6667C9.46957 2.6667 8.96086 2.87742 8.58579 3.25249C8.21071 3.62756 8 4.13627 8 4.6667C8 5.19714 8.21071 5.70584 8.58579 6.08092C8.96086 6.45599 9.46957 6.6667 10 6.6667C10.5304 6.6667 11.0391 6.45599 11.4142 6.08092C11.7893 5.70584 12 5.19714 12 4.6667C12 4.13627 11.7893 3.62756 11.4142 3.25249C11.0391 2.87742 10.5304 2.6667 10 2.6667ZM10 8.00004C9.46957 8.00004 8.96086 8.21075 8.58579 8.58582C8.21071 8.96089 8 9.4696 8 10C8 10.5305 8.21071 11.0392 8.58579 11.4142C8.96086 11.7893 9.46957 12 10 12C10.5304 12 11.0391 11.7893 11.4142 11.4142C11.7893 11.0392 12 10.5305 12 10C12 9.4696 11.7893 8.96089 11.4142 8.58582C11.0391 8.21075 10.5304 8.00004 10 8.00004ZM10 13.3334C9.46957 13.3334 8.96086 13.5441 8.58579 13.9192C8.21071 14.2942 8 14.8029 8 15.3334C8 15.8638 8.21071 16.3725 8.58579 16.7476C8.96086 17.1227 9.46957 17.3334 10 17.3334C10.5304 17.3334 11.0391 17.1227 11.4142 16.7476C11.7893 16.3725 12 15.8638 12 15.3334C12 14.8029 11.7893 14.2942 11.4142 13.9192C11.0391 13.5441 10.5304 13.3334 10 13.3334Z"
                fill="#C3C3C3"
              />
            </svg>
          </div>
        </div>
        <div className="table_grid_data mt ps-3 pe-3">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </div>
          <div className="empty">
            <svg
              className="mb-1"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.97895 9.85263C7.24737 10.1211 7.73684 10.1211 8.00526 9.85263L10.8474 7.01053C11.1316 6.72632 11.1316 6.26842 10.8474 5.98421C10.5632 5.7 10.1053 5.7 9.82105 5.98421L7.5 8.30526L5.17895 5.98421C5.03684 5.84211 4.84737 5.76316 4.65789 5.76316C4.46842 5.76316 4.27895 5.84211 4.13684 5.98421C3.85263 6.26842 3.85263 6.72632 4.13684 7.01053L6.97895 9.85263Z"
                fill="#0052CC"
              />
              <path
                d="M7.5 15C11.6368 15 15 11.6368 15 7.5C15 3.36316 11.6368 0 7.5 0C3.36316 0 0 3.36316 0 7.5C0 11.6368 3.36316 15 7.5 15ZM7.5 1.45263C10.8316 1.45263 13.5474 4.16842 13.5474 7.5C13.5474 10.8316 10.8316 13.5474 7.5 13.5474C4.16842 13.5474 1.45263 10.8316 1.45263 7.5C1.45263 4.16842 4.16842 1.45263 7.5 1.45263Z"
                fill="#0052CC"
              />
            </svg>
          </div>
          <div className="">
            <p className="mb-0 table_text">Darlene Robertson</p>
          </div>
          <div className="">
            <h1 className="table_header_title mb-0">Lagos State</h1>
            <p className="mb-0 table_header_text">3890 Poplar Dr.</p>
          </div>
          <div className="issues_found d-flex align-items-center justify-content-center">
            <h1 className="mb-0 issues_found_text">2 Issue Found</h1>
          </div>
          <div className="">
            <div className="d-flex align-items-center">
              <svg
                width="6"
                height="7"
                viewBox="0 0 6 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3" cy="3.5" r="3" fill="#25213B" />
              </svg>
              <p className="mb-0 entries_title ms-2">6 Unique Entries</p>
            </div>
            <p className="mb-0 entries_text">Homogenous</p>
          </div>
          <div className="">
            <div className="d-flex align-items">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.10771 8.0003H13.8928"
                  stroke="#3C3AB6"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.00027 2.10775L13.8928 8.0003L8.00027 13.8929"
                  stroke="#3C3AB6"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="mb-0 mid_risk ms-2">Mid Risk</p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2.6667C9.46957 2.6667 8.96086 2.87742 8.58579 3.25249C8.21071 3.62756 8 4.13627 8 4.6667C8 5.19714 8.21071 5.70584 8.58579 6.08092C8.96086 6.45599 9.46957 6.6667 10 6.6667C10.5304 6.6667 11.0391 6.45599 11.4142 6.08092C11.7893 5.70584 12 5.19714 12 4.6667C12 4.13627 11.7893 3.62756 11.4142 3.25249C11.0391 2.87742 10.5304 2.6667 10 2.6667ZM10 8.00004C9.46957 8.00004 8.96086 8.21075 8.58579 8.58582C8.21071 8.96089 8 9.4696 8 10C8 10.5305 8.21071 11.0392 8.58579 11.4142C8.96086 11.7893 9.46957 12 10 12C10.5304 12 11.0391 11.7893 11.4142 11.4142C11.7893 11.0392 12 10.5305 12 10C12 9.4696 11.7893 8.96089 11.4142 8.58582C11.0391 8.21075 10.5304 8.00004 10 8.00004ZM10 13.3334C9.46957 13.3334 8.96086 13.5441 8.58579 13.9192C8.21071 14.2942 8 14.8029 8 15.3334C8 15.8638 8.21071 16.3725 8.58579 16.7476C8.96086 17.1227 9.46957 17.3334 10 17.3334C10.5304 17.3334 11.0391 17.1227 11.4142 16.7476C11.7893 16.3725 12 15.8638 12 15.3334C12 14.8029 11.7893 14.2942 11.4142 13.9192C11.0391 13.5441 10.5304 13.3334 10 13.3334Z"
                fill="#C3C3C3"
              />
            </svg>
          </div>
        </div>
        <div className="table_grid_data mt ps-3 pe-3">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </div>
          <div className="empty">
            <svg
              className="mb-1"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.97895 9.85263C7.24737 10.1211 7.73684 10.1211 8.00526 9.85263L10.8474 7.01053C11.1316 6.72632 11.1316 6.26842 10.8474 5.98421C10.5632 5.7 10.1053 5.7 9.82105 5.98421L7.5 8.30526L5.17895 5.98421C5.03684 5.84211 4.84737 5.76316 4.65789 5.76316C4.46842 5.76316 4.27895 5.84211 4.13684 5.98421C3.85263 6.26842 3.85263 6.72632 4.13684 7.01053L6.97895 9.85263Z"
                fill="#0052CC"
              />
              <path
                d="M7.5 15C11.6368 15 15 11.6368 15 7.5C15 3.36316 11.6368 0 7.5 0C3.36316 0 0 3.36316 0 7.5C0 11.6368 3.36316 15 7.5 15ZM7.5 1.45263C10.8316 1.45263 13.5474 4.16842 13.5474 7.5C13.5474 10.8316 10.8316 13.5474 7.5 13.5474C4.16842 13.5474 1.45263 10.8316 1.45263 7.5C1.45263 4.16842 4.16842 1.45263 7.5 1.45263Z"
                fill="#0052CC"
              />
            </svg>
          </div>
          <div className="">
            <p className="mb-0 table_text">Ralph Edwards</p>
          </div>
          <div className="">
            <h1 className="table_header_title mb-0">Lagos State</h1>
            <p className="mb-0 table_header_text">8558 Green Rd.</p>
          </div>
          <div className="table_status d-flex align-items-center justify-content-center">
            <h1 className="mb-0 status_no_issue">No Issue</h1>
          </div>
          <div className="">
            <div className="d-flex align-items-center">
              <svg
                width="6"
                height="7"
                viewBox="0 0 6 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3" cy="3.5" r="3" fill="#25213B" />
              </svg>
              <p className="mb-0 entries_title ms-2">14 Unique Entries</p>
            </div>
            <p className="mb-0 entries_text">Homogenous</p>
          </div>
          <div className="">
            <div className="d-flex align-items">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.83317 5.83366L14.1665 14.167"
                  stroke="#3AB65C"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.1665 5.83366V14.167H5.83317"
                  stroke="#3AB65C"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="mb-0 risk_text ms-2">Low Risk</p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2.6667C9.46957 2.6667 8.96086 2.87742 8.58579 3.25249C8.21071 3.62756 8 4.13627 8 4.6667C8 5.19714 8.21071 5.70584 8.58579 6.08092C8.96086 6.45599 9.46957 6.6667 10 6.6667C10.5304 6.6667 11.0391 6.45599 11.4142 6.08092C11.7893 5.70584 12 5.19714 12 4.6667C12 4.13627 11.7893 3.62756 11.4142 3.25249C11.0391 2.87742 10.5304 2.6667 10 2.6667ZM10 8.00004C9.46957 8.00004 8.96086 8.21075 8.58579 8.58582C8.21071 8.96089 8 9.4696 8 10C8 10.5305 8.21071 11.0392 8.58579 11.4142C8.96086 11.7893 9.46957 12 10 12C10.5304 12 11.0391 11.7893 11.4142 11.4142C11.7893 11.0392 12 10.5305 12 10C12 9.4696 11.7893 8.96089 11.4142 8.58582C11.0391 8.21075 10.5304 8.00004 10 8.00004ZM10 13.3334C9.46957 13.3334 8.96086 13.5441 8.58579 13.9192C8.21071 14.2942 8 14.8029 8 15.3334C8 15.8638 8.21071 16.3725 8.58579 16.7476C8.96086 17.1227 9.46957 17.3334 10 17.3334C10.5304 17.3334 11.0391 17.1227 11.4142 16.7476C11.7893 16.3725 12 15.8638 12 15.3334C12 14.8029 11.7893 14.2942 11.4142 13.9192C11.0391 13.5441 10.5304 13.3334 10 13.3334Z"
                fill="#C3C3C3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
