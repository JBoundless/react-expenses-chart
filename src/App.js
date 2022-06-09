import React, { useEffect } from 'react';
import './style.css';
import data from './data.json';
import BarChart from './BarChart.js';

export default function App() {
  return (
    <div className="main">
      <div>
        <div className="my-balance">
          <div>
            <p>My balance</p>
            <h1>$921.48</h1>
          </div>
          <div>
            <svg
              width="72"
              height="48"
              viewBox="0 0 72 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fill-rule="evenodd">
                <circle fill="#382314" cx="48" cy="24" r="24" />
                <circle stroke="#FFF" stroke-width="2" cx="24" cy="24" r="23" />
              </g>
            </svg>
          </div>
        </div>
        <div className="card">
          <BarChart />

          <div className="week-spending">
            <div className="week-left">
              <h1>Spending - Last 7 days</h1>
              <p>Total this month:</p> <h2>$478.33</h2>
            </div>
            <div className="week-right">
              <p>
                <b>+2.4%</b> from last month
              </p>
            </div>
          </div>
        </div>
        <div class="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Jordan Pagkalinawan</a>.
        </div>
      </div>
    </div>
  );
}
