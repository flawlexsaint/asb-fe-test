import React from "react";
import "./metric.css";

const Metric = () => {
  return (
    <div className="mt-4 container-fluid mb-4">
      <div className="d-flex align-items-center ms-2">
        <a href="#">
          <h1 className="metric_header_title mb-0 me-1">Division</h1>
        </a>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.4042 8.35889L5.58321 12.1799C5.16921 12.5939 5.16921 13.2659 5.58321 13.6799C5.99721 14.0939 6.66921 14.0939 7.08321 13.6799L11.6972 9.06589C12.0882 8.67489 12.0882 8.04189 11.6972 7.65189L7.08321 3.03789C6.66921 2.62389 5.99721 2.62389 5.58321 3.03789C5.16921 3.45189 5.16921 4.12389 5.58321 4.53789L9.4042 8.35889Z"
            fill="#0A5685"
          />
        </svg>
        <a href="#">
          <h1 className="metric_header_title mb-0 ms-1">Module</h1>
        </a>
      </div>
      <div className="mt-4">
        <div className="grid_area">
          <div className="metric_grid p-4">
            <div className="d-flex align-items-start justify-content-between">
              <div className="">
                <h1 className="metric_grid_title">31454</h1>
                <p className="metric_grid_text mb-0">Ongoing metric</p>
              </div>
              <svg
                class="metric_svg mt-2"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path>
              </svg>
            </div>
          </div>
          <div className="metric_grid p-4">
            <div className="d-flex align-items-start justify-content-between">
              <div className="">
                <h1 className="metric_grid_title">2344</h1>
                <p className="metric_grid_text">Past metric</p>
              </div>
              <svg
                class="metric_svg mt-2"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path>
              </svg>
            </div>
          </div>
          <div className="metric_grid p-4">
            <div className="d-flex align-items-start justify-content-between">
              <div className="">
                <h1 className="metric_grid_title">14224</h1>
                <p className="metric_grid_text">Missed metric</p>
              </div>
              <svg
                class="metric_svg mt-2"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path>
              </svg>
            </div>
          </div>
          <div className="metric_grid p-4">
            <div className="d-flex align-items-start justify-content-between">
              <div className="">
                <h1 className="metric_grid_title">635</h1>
                <p className="metric_grid_text">Failed metric</p>
              </div>
              <svg
                class="metric_svg mt-2"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path>
              </svg>
            </div>
          </div>
          <div className="metric_grid p-4">
            <div className="d-flex align-items-start justify-content-between">
              <div className="">
                <h1 className="metric_grid_title">11334</h1>
                <p className="metric_grid_text">Pending metric</p>
              </div>
              <svg
                class="metric_svg mt-2"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metric;
