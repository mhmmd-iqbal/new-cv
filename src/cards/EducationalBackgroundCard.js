import React from 'react';

export default EducationalBackgroundCard = () => {
  return (
    <div id='education' className='section wb'>
      <div className='container'>
        <div className='section-title text-right'>
          <h3>Educational Background</h3>
          <div className='long-line'></div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-6 degree d-flex flex-row'>
                <h4 className='hover mr-3'>
                  <i className='fa fa-university fa-2x'></i>
                </h4>
                <div className='change'>
                  Politeknik Negeri Lhokseumawe
                  <div className=''>Bachelor's Degree</div>
                  <span className=''>2015 - 2019</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
