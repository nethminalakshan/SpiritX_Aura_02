import React from 'react';
import './NewsUpdates.css';

const NewsSlider = () => {
  return (
    <div className="box">
      <h2 className="title">
        <span style={{ fontSize: '30px', fontWeight: 'bold', color: '#cd5226' }}>|</span> Latest News
      </h2>

      <div className="card-container">
        <div className="card">
          <img
            src="https://img.freepik.com/free-photo/male-football-player-field-rain_23-2150888371.jpg?t=st=1741433002~exp=1741436602~hmac=89472e204d9160ed6fcbc2410549c5ae5f67001b9786b513f89a56e8e28d177b&w=1380"
            alt="News Image"
          />
          <div className="card-content">
            <p className="date">March 15, 2025</p>
            <p className="category">Match, Medal, Rain</p>
            <h3 className="card-title">UOM VS RUH match abandoned due to rain</h3>
            <p className="description">Both teams have three points after two games in Group B...</p>
          </div>
        </div>

        <div className="card">
          <img
            src="https://scontent.fcmb2-2.fna.fbcdn.net/v/t39.30808-6/466965535_586263180588995_6127633282163926818_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=x1FDRdaSef0Q7kNvgEL2W4A&_nc_oc=Adjm1z4FtqqCI6QTlENpMXVr33E-CuTvAJ_179HJTzMhbv4feV1PygskTM45Dql8we9KY49scsLU0XXxMqfOqL70&_nc_zt=23&_nc_ht=scontent.fcmb2-2.fna&_nc_gid=AnW6y8jNT0vvkJ_o5OEvece&oh=00_AYH8HcfSkIJZVvFZDRQrovekgndlfNmsiOfLCwnm4Qj2lQ&oe=67D21DC0"
            alt="News Image"
          />
          <div className="card-content">
            <p className="date">March 08, 2025</p>
            <p className="category">Cup, Champions, Win</p>
            <h3 className="card-title">Former Champions Knockedout</h3>
            <p className="description">
              Former Champions of Spirit.11 Fantasy Cricket Cup Team UOJ, Knockedout with their loss to RUH team
              yesterday...
            </p>
          </div>
        </div>

        <div className="card">
          <img
            src="https://scontent.fcmb2-2.fna.fbcdn.net/v/t39.30808-6/482214178_659151396784701_4724097218634839080_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=RGH_pPv5X_cQ7kNvgFOEMp9&_nc_oc=Adg2-pTXM4JKs8FO2KuRgiFLf5zw9intsP_N7GAgooWu91jZ8yWcrLhf43xv2sk20STKzUR7cpn4SjOmWKA6Eo-X&_nc_zt=23&_nc_ht=scontent.fcmb2-2.fna&_nc_gid=APnGpq_UorP0OwMYYINSYkW&oh=00_AYGPHupEdekbbBbdxjV26MS_hFuAWqGp0LbxjW_gQrV4Mg&oe=67D21772"
            alt="News Image"
          />
          <div className="card-content">
            <p className="date">March 1, 2025</p>
            <p className="category">Metal, Mining, Polymer</p>
            <h3 className="card-title">Registration Closed</h3>
            <p className="description">
              Registrations for the Spirit11 Fantasy Cricket Tournament are now closed! Thank you to everyone who signed
              up...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSlider;