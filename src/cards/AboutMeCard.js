import React from 'react';
import PhotoProfile from './../assets/img/photo.jpg';
import { RateListCard } from './RateListCard';

const table = {
  border: 'none',
};

export const AboutMeCard = ({ Profile }) => {
  return (
    <div id='about' className='section wb'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8'>
            <div className='message-box'>
              <h2>About Me</h2>
              <div className='short-line'></div>
              <p> </p>
              <p className='text-justify'>{Profile.bio}</p>
              <div className='row'>
                <div className='col-md-6'>
                  <div style={{ fontWeight: 'bold' }} className='text-left'>
                    {' '}
                    Skill :{' '}
                  </div>
                  <table style={table}>
                    <RateListCard name={'PHP'} rate={5}></RateListCard>
                    <RateListCard name={'Javascript'} rate={5}></RateListCard>
                    <RateListCard name={'PostgresSQL'} rate={3}></RateListCard>
                    <RateListCard name={'MonggoDB'} rate={3}></RateListCard>
                  </table>
                </div>
                <div className='col-md-6'>
                  <div style={{ fontWeight: 'bold' }} className='text-left'>
                    {' '}
                    Languange :{' '}
                  </div>
                  <table style={table}>
                    <RateListCard name={'English'} rate={5}></RateListCard>
                    <RateListCard name={'Indonesian'} rate={5}></RateListCard>
                  </table>
                </div>
              </div>

              <div
                style={{ position: 'relative', top: '10px' }}
                className='text-right'>
                <a
                  href='https://drive.google.com/file/d/1olOVbUq0TMC2LrtfKcDWVedHMEl7rhNU/view?usp=sharing'
                  target='_blank'
                  className='sim-btn btn-hover-new'
                  data-text='Download CV'
                  download>
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='right-box-pro wow fadeIn'>
              <img
                src={PhotoProfile}
                alt=''
                className='img-fluid img-rounded'
                style={{ maxHeight: '400px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
