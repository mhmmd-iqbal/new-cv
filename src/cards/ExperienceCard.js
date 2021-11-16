import React from 'react';

export const ExperienceCard = ({ Experiences }) => {
  return (
    <div id='education' className='section wb'>
      <div className='container'>
        <div className='section-title text-right'>
          <h3>Experiences</h3>
          <div className='long-line'></div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              {Experiences.map((experience) => {
                return (
                  <div className='col-md-6 mb-5 degree d-flex flex-row'>
                    <h4 className='hover mr-3'>
                      <i className='fa fa-university fa-2x'></i>
                    </h4>
                    <div className='change'>
                      {experience.name}
                      <div className=''>{experience.position}</div>
                      <span className=''>{experience.year}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
