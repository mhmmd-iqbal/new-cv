import React, { useState } from 'react';
import Banowati from '../assets/img/banowati.png';
import ModalCard from './ModalCard';

export const PortofolioCard = ({ Projects }) => {
  const [modal, setModal] = useState(false);
  const [dataModal, setDataModal] = useState(null);

  const ModalToggle = (data) => {
    setModal(!modal);
    setDataModal(data);
  };
  console.log(Projects);

  return (
    <>
      <div id='portfolio' class='section lb'>
        <div class='container'>
          <div class='section-title text-left'>
            <h3>Portfolio</h3>
            <div className='long-line'></div>
          </div>
          <div class='gallery-list row'>
            {Projects.map((project) => {
              return (
                <div class='col-md-4 col-sm-6 gallery-grid gal_a gal_b'>
                  <div class='gallery-single fix'>
                    <img src={project.image} class='img-fluid' alt='Image' />
                    <div class='img-overlay'>
                      <a
                        href='javascript: void(0)'
                        onClick={() => ModalToggle(project)}
                        data-name='banowati'
                        class='hoverbutton global-radius'>
                        <i class='fa fa-picture-o'></i>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ModalCard
        show={modal}
        handleModal={setModal}
        data={dataModal}></ModalCard>
    </>
  );
};
