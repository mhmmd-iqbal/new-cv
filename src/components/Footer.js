import React, { useState } from 'react';

export const Footer = ({ Profile }) => {
  const [nowYear, setNowYear] = useState(new Date().getFullYear());

  return (
    <div class='copyrights'>
      <div class='container'>
        <div class='footer-distributed'>
          <footer class='page-footer font-small teal pt-4'>
            <div class='container-fluid text-center text-md-left'>
              <div class='row'>
                <div class='col-md-6 mt-md-0 mt-3'>
                  <ul style={{ listStyle: 'none' }}>
                    <li>
                      <i class='fa fa-map-marker'></i> {Profile.address}
                    </li>
                    <li>
                      <i class='fa fa-phone'></i> {Profile.phone}
                    </li>
                    <li>
                      <i class='fa fa-envelope'></i> {Profile.address}
                    </li>
                    <li>
                      <i class='fa fa-linkedin'></i> {Profile.linkedin}
                    </li>
                    <li>
                      <i class='fa fa-internet-explorer'></i> {Profile.website}
                    </li>
                  </ul>
                </div>
                <hr class='clearfix w-100 d-md-none pb-3' />
                <div class='col-md-6 mb-md-0 mb-3 text-right'>
                  <div style={{ fontSize: '12px' }}></div>
                </div>
              </div>
            </div>
            <div class='footer-copyright text-center py-3'>
              Teknik Informatika © {nowYear}
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
