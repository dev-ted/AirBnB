import React from "react";
// import { GlobeAltIcon } from "@heroicons/react/solid";
// import {RiFacebookFill ,RiTwitterFill,RiInstagramFill} from 'react-icons/ri'

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4  gap-y-10 px-32 py-14 bg-gray-100 text-grey-600">
      <div className="space-y-4">
        <h5 className="font-bold text-gray-800">About</h5>
        <p >How Airbnb works</p>
        <p>Newsroom</p>
        <p>Airbnb 2021</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
        <p>HotelTonight</p>
        <p>Airbnb for Work</p>
        <p>Made possible by Hosts</p>
        <p>Careers</p>
        <p>Founders' Letter</p>
      </div>
      <div className="space-y-4">
        <h5  className="font-bold text-gray-800">Community</h5>
        <p>Diversity & Belonging</p>
        <p>Host Afghan refugees</p>
        <p>Accessibility</p>
        <p>Guest Referrals</p>
        <p>Airbnb Associates</p>
        <p>Airbnb.org</p>
      </div>
      <div className="space-y-4">
        <h5  className="font-bold text-gray-800">Hosts</h5>
        <p>Host your home</p>
        <p>Responsible hosting</p>
        <p>Host an Online Experience</p>
        <p>Resource Center</p>
        <p>Host an Experience</p>
        <p>Community Center</p>
      </div>
      <div className="space-y-4">
        <h5  className="font-bold text-gray-800">Support</h5>
        <p>Our COVID-19 Response</p>
        <p>Neighborhood Support</p>
        <p>Help Center</p>
        <p>Trust & Safety</p>
        <p>Cancellation options</p>
      </div>
      {/* <div className = "flex items-center justify-between bg-red-100 w-24 w-full ">
          
        <div className = "flex  items-center space-x-5 bg-red-400">
          <small>© 2021 Airbnb, Inc.</small>
          <small>Privacy.</small>
          <small>Terms</small>
          <small>Site Map</small>
        </div>
        <div className = "flex items-center">
          <span className = "flex items-center space-x-3">
            <GlobeAltIcon className = "h-6" />
             English
          </span>
          <span>R ZAR</span>

          <div className = "flex items-center space-x-3">
              <RiFacebookFill/>
              <RiTwitterFill/>
              <RiInstagramFill/>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Footer;
