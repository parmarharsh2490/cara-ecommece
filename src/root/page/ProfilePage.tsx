import React, { useState } from 'react';
import Footer from '../../components/shared/Footer';
import Navigation from '../../components/shared/Navigation';
import ProfileSideBar from './ProfileSideBar';
import { Outlet } from 'react-router-dom';

interface ProfileData {
  fullName: string;
  email: string;
  phoneNumber: string;
  alternateNumber: string;
  dateOfBirth: string;
  gender: string;
}

const ProfileComponent: React.FC = () => {
  const [profile, setProfile] = useState<ProfileData>({
    fullName: 'jo',
    email: 'ok@gmail.com',
    phoneNumber: 'iojojjo',
    alternateNumber: 'ijklo',
    dateOfBirth: '',
    gender: 'kopk',
  });

 
  return (
    <>
    <Navigation/>
    <div className=' flex '>
    <ProfileSideBar/>
      <Outlet/>
    </div>
    
    <Footer/>
    </>

  );
};

export default ProfileComponent;