import React from 'react';

import { companies } from '../utils/constant';

import { BsDot } from '.';

import { useStateContext } from '../state/context/ContextProvider';

const CompanyText = ({ active }) => {
  const { screenSize } = useStateContext();

  return (
    <div>
      {companies
        .filter((company) => company.id === active)
        .map((filteredCompany) => (
          <div key={filteredCompany.id}>
            <div className="job-title">
              <p>{filteredCompany.job_title}</p>
              {screenSize > 640 ? (
                <p className="compamy-name"> - {filteredCompany.name}</p>
              ) : null}
            </div>
            <p className="job-location">{filteredCompany.job_location}</p>
            <div className="job-period">
              {filteredCompany.job_start} - {filteredCompany.job_end} <BsDot />
              {filteredCompany.job_type}
            </div>
            <hr />

            <ul className="responsibility">
              <li>
                {filteredCompany.responsibility1 ? (
                  <div className="responsibility-container">
                    <div className="second-title-line"></div>
                    <div className="text">
                      {filteredCompany.responsibility1}
                    </div>
                  </div>
                ) : null}
              </li>
              <li>
                {filteredCompany.responsibility2 ? (
                  <div className="responsibility-container">
                    <div className="second-title-line"></div>
                    <div className="text">
                      {filteredCompany.responsibility2}
                    </div>
                  </div>
                ) : null}
              </li>
              <li>
                {filteredCompany.responsibility3 ? (
                  <div className="responsibility-container">
                    <div className="second-title-line"></div>
                    <div className="text">
                      {filteredCompany.responsibility3}
                    </div>
                  </div>
                ) : null}
              </li>
              <li>
                {filteredCompany.responsibility4 ? (
                  <div className="responsibility-container">
                    <div className="second-title-line"></div>
                    <div className="text">
                      {filteredCompany.responsibility4}
                    </div>
                  </div>
                ) : null}
              </li>
            </ul>
          </div>
        ))}
    </div>
  );
};

export default CompanyText;
