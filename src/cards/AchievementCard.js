import React from 'react';

export const AchievementCard = ({ Achievements }) => {
  return (
    <div id='achievement' className='section wb'>
      <div className='container'>
        <div className='section-title text-right'>
          <h3>Achievements</h3>
          <div className='long-line'></div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              {Achievements.map((achievement) => {
                return (
                  <div className='col-md-6 mb-5 d-flex flex-row'>
                    <h4 className='hover mr-3'>
                      <i className='fa fa-trophy fa-2x'></i>
                    </h4>
                    <div className='change' style={{ textAlign: 'left' }}>
                      {achievement.name}
                      <div className=''>{achievement.position}</div>
                      <span className=''>{achievement.organizer}</span>
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
