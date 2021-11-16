import React from 'react';

export const OrganizationalCard = ({ Organizationals }) => {
  console.log(Organizationals);
  return (
    <div id='organization' className='section lb'>
      <div className='container'>
        <div className='section-title text-left'>
          <h3>Organizationals</h3>
          <div className='long-line'></div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              {Organizationals.map((organizationl) => {
                return (
                  <div className='col-md-6 mb-5  d-flex flex-row'>
                    <h4 className='hover mr-3'>
                      <i className='fa fa-sitemap fa-2x'></i>
                    </h4>
                    <div className='change' style={{ textAlign: 'left' }}>
                      {organizationl.name}
                      <div className=''>{organizationl.position}</div>
                      <span className=''>{organizationl.year}</span>
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
