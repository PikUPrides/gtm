import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';

const channels = [
  // Organic/Paid Social Media Channels (1-15)
  { name: 'YouTube', type: 'Organic/Paid', contentFormat: 'Video', color: '#FF0000', status: 'Ready', budget: '$100', dimensions: { thumbnail: '1280×720 px', video: '1920×1080 px', shorts: '1080×1920 px' }, contacts: [{ name: 'Nishant', role: 'Video Editor', email: 'nishant@skillsvital.com', phone: '+977 981-6630434' }], vendors: [{ name: 'Feedbird', email: 'support@feedbird.com' }, { name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], website: 'https://www.youtube.com', adsManager: 'https://ads.google.com', analytics: 'https://studio.youtube.com', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image' },
  { name: 'TikTok', type: 'Organic/Paid', contentFormat: 'Video', color: '#00f2ea', status: 'Ready', budget: '$100', dimensions: { image: '1080×1920 px', video: '1080×1920 px' }, contacts: [{ name: 'Nishant', role: 'Video Editor', email: 'nishant@skillsvital.com', phone: '+977 981-6630434' }], vendors: [{ name: 'Feedbird', email: 'support@feedbird.com' }, { name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], website: 'https://www.tiktok.com', adsManager: 'https://ads.tiktok.com', analytics: 'https://www.tiktok.com/analytics', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image' },
  { name: 'Facebook', type: 'Organic/Paid', contentFormat: 'Video', color: '#1877F2', status: 'Ready', budget: '$100', dimensions: { feed: '1080×1080 px', landscape: '1200×630 px', story: '1080×1920 px' }, contacts: [{ name: 'Nishant', role: 'Video Editor', email: 'nishant@skillsvital.com', phone: '+977 981-6630434' }], vendors: [{ name: 'Feedbird', email: 'support@feedbird.com' }, { name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], website: 'https://www.facebook.com', adsManager: 'https://business.facebook.com', analytics: 'https://business.facebook.com/insights', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image' },
  { name: 'Instagram', type: 'Organic/Paid', contentFormat: 'Video', color: '#E4405F', status: 'Ready', budget: '$100', dimensions: { feedSquare: '1080×1080 px', feedPortrait: '1080×1350 px', stories: '1080×1920 px' }, contacts: [{ name: 'Feedbird', role: 'Dina', email: 'support@feedbird.com' }], vendors: [{ name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], website: 'https://www.instagram.com', adsManager: 'https://business.facebook.com', analytics: 'https://business.facebook.com/insights', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image' },
  { name: 'Threads', type: 'Organic/Paid', contentFormat: 'Video', color: '#000000', status: 'Ready', budget: '$100', dimensions: { image: '1080×1080 px', video: '1080×1920 px' }, contacts: [{ name: 'Feedbird', role: 'Dina', email: 'support@feedbird.com' }], vendors: [{ name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], website: 'https://www.threads.net', adsManager: 'https://business.facebook.com', analytics: 'https://business.facebook.com/insights', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image' },
  { name: 'Snapchat', type: 'Organic/Paid', contentFormat: 'Video', color: '#FFFC00', status: 'Ready', budget: '$100', dimensions: { image: '1080×1920 px', video: '1080×1920 px' }, contacts: [{ name: 'Feedbird', role: 'Dina', email: 'support@feedbird.com' }], vendors: [{ name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], website: 'https://www.snapchat.com', adsManager: 'https://ads.snapchat.com', analytics: 'https://ads.snapchat.com/manage', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image' },
  { name: 'Twitter/X', type: 'Organic/Paid', contentFormat: 'Video', color: '#000000', status: 'Ready', budget: '$100', dimensions: { singleImage: '1200×675 px', square: '1080×1080 px', video: '1080×1920 px' }, contacts: [{ name: 'Feedbird', role: 'Dina', email: 'support@feedbird.com' }], vendors: [{ name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], website: 'https://x.com', adsManager: 'https://ads.x.com', analytics: 'https://analytics.x.com', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image' },
  { name: 'LinkedIn', type: 'Organic/Paid', contentFormat: 'Video', color: '#0A66C2', status: 'Ready', budget: '$100', dimensions: { feed: '1200×1200 px', landscape: '1200×627 px', video: '1080×1920 px' }, contacts: [{ name: 'Feedbird', role: 'Dina', email: 'support@feedbird.com' }], vendors: [{ name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], website: 'https://www.linkedin.com', adsManager: 'https://www.linkedin.com/campaignmanager', analytics: 'https://www.linkedin.com/analytics', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image' },
  { name: 'Reddit', type: 'Organic/Paid', contentFormat: 'Video', color: '#FF4500', status: 'Ready', budget: '$100', dimensions: { image: '1080×1080 px', video: '1080×1920 px' }, contacts: [{ name: 'Feedbird', role: 'Dina', email: 'support@feedbird.com' }], vendors: [{ name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], website: 'https://www.reddit.com', adsManager: 'https://ads.reddit.com', analytics: 'https://ads.reddit.com', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image' },
  { name: 'Pinterest', type: 'Organic/Paid', contentFormat: 'Video', color: '#E60023', status: 'Ready', budget: '$100', dimensions: { standard: '1000×1500 px', video: '1080×1920 px' }, contacts: [{ name: 'Feedbird', role: 'Dina', email: 'support@feedbird.com' }], vendors: [{ name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], website: 'https://www.pinterest.com', adsManager: 'https://ads.pinterest.com', analytics: 'https://analytics.pinterest.com', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image' },
  { name: 'Facebook', type: 'Organic/Paid', contentFormat: 'Static + Video', color: '#1877F2', status: 'Ready', budget: '$100', dimensions: { feed: '1080×1080 px', landscape: '1200×630 px', story: '1080×1920 px', video: '1080×1080 px' }, contacts: [{ name: 'Nishant', role: 'Video Editor', email: 'nishant@skillsvital.com', phone: '+977 981-6630434' }], vendors: [{ name: 'Feedbird', email: 'support@feedbird.com' }, { name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], website: 'https://www.facebook.com', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image' },
  { name: 'Instagram', type: 'Organic/Paid', contentFormat: 'Static + Video', color: '#E1306C', status: 'Ready', budget: '$100', dimensions: { feedSquare: '1080×1080 px', feedPortrait: '1080×1350 px', stories: '1080×1920 px', reels: '1080×1920 px' }, contacts: [{ name: 'Feedbird', role: 'Social Manager', email: 'support@feedbird.com' }], vendors: [{ name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }, { name: 'MANI', email: 'rmv1108m@gmail.com' }], website: 'https://www.instagram.com', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image' },
  { name: 'Threads', type: 'Organic/Paid', contentFormat: 'Static + Video', color: '#000000', status: 'Ready', budget: '$100', dimensions: { image: '1080×1080 px or 1080×1350 px', video: '1080×1920 px' }, contacts: [{ name: 'Feedbird', role: 'Social Manager', email: 'support@feedbird.com' }], vendors: [{ name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], website: 'https://www.threads.net', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image' },
  { name: 'Snapchat', type: 'Organic/Paid', contentFormat: 'Static + Video', color: '#FFFC00', status: 'Ready', budget: '$100', dimensions: { image: '1080×1920 px', video: '1080×1920 px' }, contacts: [{ name: 'Feedbird', role: 'Social Manager', email: 'support@feedbird.com' }], vendors: [{ name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], website: 'https://www.snapchat.com', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image' },
  { name: 'Twitter/X', type: 'Organic/Paid', contentFormat: 'Static + Video', color: '#000000', status: 'Ready', budget: '$100', dimensions: { singleImage: '1200×675 px', squareImage: '1080×1080 px', landscapeVideo: '1280×720 px', vertical: '1080×1920 px' }, contacts: [{ name: 'Feedbird', role: 'Social Manager', email: 'support@feedbird.com' }], vendors: [{ name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], website: 'https://x.com', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image' },
  { name: 'LinkedIn', type: 'Organic/Paid', contentFormat: 'Static + Video', color: '#0A66C2', status: 'Ready', budget: '$100', dimensions: { feedImage: '1200×1200 px', landscape: '1200×627 px', squareVideo: '1080×1080 px', verticalVideo: '1080×1920 px' }, contacts: [{ name: 'Feedbird', role: 'Social Manager', email: 'support@feedbird.com' }], vendors: [{ name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], website: 'https://www.linkedin.com', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image' },
  { name: 'Reddit', type: 'Organic/Paid', contentFormat: 'Static + Video', color: '#FF4500', status: 'Ready', budget: '$100', dimensions: { image: '1080×1080 px or 1200×1200 px', video: '1080×1920 px' }, contacts: [{ name: 'Feedbird', role: 'Social Manager', email: 'support@feedbird.com' }], vendors: [{ name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], website: 'https://www.reddit.com', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image' },
  { name: 'Pinterest', type: 'Organic/Paid', contentFormat: 'Static', color: '#E60023', status: 'Ready', budget: '$100', dimensions: { standard: '1000×1500 px', long: '1000×1800 px', video: '1080×1920 px' }, contacts: [{ name: 'Feedbird', role: 'Social Manager', email: 'support@feedbird.com' }], vendors: [{ name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], website: 'https://www.pinterest.com', goLive: '15-Jan', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image' },
  { name: 'Quora', type: 'Organic/Paid', contentFormat: 'Static', color: '#B92B27', status: 'Ready', budget: '$100', dimensions: {}, contacts: [{ name: 'Feedbird', role: 'Social Manager', email: 'support@feedbird.com' }], vendors: [{ name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], website: 'https://www.quora.com', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image' },
  { name: 'Medium Blog', type: 'Organic', contentFormat: 'Static', color: '#00AB6B', status: 'Ready', budget: '$0', dimensions: {}, contacts: [{ name: 'GravityWriter', role: 'Tool', email: 'tool@' }], vendors: [{ name: 'Draftss', contact: 'Aditi' }], website: 'https://medium.com', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image' },
  { name: 'AYRO Blogs', type: 'Organic', contentFormat: 'Static', color: '#423DF9', status: 'Ready', budget: '$0', dimensions: {}, contacts: [{ name: 'GravityWriter', role: 'Tool', email: 'tool@gravitywrite.com' }], vendors: [{ name: 'Draftss', contact: 'Aditi' }], website: 'https://ayrorides.com/blog', checklist: 'Blog writing' },
  { name: 'Google My Business', type: 'Organic', contentFormat: 'Static', color: '#4285F4', status: 'Ready', budget: '$0', dimensions: {}, contacts: [{ name: 'Feedbird', role: 'Social Manager', email: 'support@feedbird.com' }], vendors: [{ name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], website: 'https://www.google.com/business', goLive: '15-Jan', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image' },
  { name: 'Discord', type: 'Organic', contentFormat: 'Static', color: '#5865F2', status: 'Ready', budget: '$100', dimensions: {}, contacts: [{ name: 'Feedbird', role: 'Social Manager', email: 'support@feedbird.com' }], vendors: [{ name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], website: 'https://discord.com', goLive: '15-Jan', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image' },
  
  // Paid Advertising Channels (16-28)
  { name: 'Quora Ads', type: 'Paid', contentFormat: 'Static', color: '#B92B27', status: 'Ready', budget: '$100', dimensions: {}, contacts: [{ name: 'Feedbird', role: 'Social Manager', email: 'support@feedbird.com' }], vendors: [{ name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], website: 'https://www.quora.com/business', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image' },
  { name: 'Google Ads', type: 'Paid', contentFormat: 'Static', color: '#4285F4', status: 'Ready', budget: '$100', dimensions: {}, contacts: [{ name: 'Feedbird', role: 'Social Manager', email: 'support@feedbird.com' }], vendors: [{ name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], website: 'https://ads.google.com', checklist: 'Account Creation, Profile setup' },
  { name: 'Vibe Co', type: 'Paid', contentFormat: 'Video', color: '#FF6B6B', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'All TV Channels in Texas', role: 'Vendor', email: '' }], vendors: [], website: 'https://advertising.roku.com/', checklist: 'Need inputs from JP' },
  { name: 'Audiogo (Radio)', type: 'Paid', contentFormat: 'Audio', color: '#8B5CF6', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'All FM Channels in Texas', role: 'Vendor', email: '' }], vendors: [], website: 'https://app.audiogo.com/us/login', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image' },
  { name: 'Spotify', type: 'Paid', contentFormat: 'Audio', color: '#1DB954', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'Ads Managers', role: 'Team', email: '' }], vendors: [], website: 'https://ads.spotify.com', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image' },
  { name: 'Whatsapp Marketing', type: 'Paid', contentFormat: 'Static', color: '#25D366', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'Feedbird', role: 'Social Manager', email: 'support@feedbird.com' }], vendors: [{ name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], website: 'https://www.whatsapp.com', checklist: 'Account Creation' },
  { name: 'Telegram', type: 'Organic/Paid', contentFormat: 'Static + Video', color: '#0088CC', status: 'TBD', budget: '$0', dimensions: {}, contacts: [], vendors: [], website: 'https://telegram.org', checklist: 'Account Creation' },
  { name: 'Facebook DM', type: 'Paid', contentFormat: 'Static', color: '#1877F2', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'Len Woods', role: 'Owner', email: 'lenwoods@gmail.com', phone: '+1 318-278-7525' }], vendors: [{ name: 'Abhay Singh', contact: 'ROI Hunt Pvt Ltd' }], website: 'https://www.facebook.com', checklist: 'Account Creation' },
  { name: 'Manychat', type: 'Paid', contentFormat: 'Static', color: '#6C5CE7', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'Mani', role: 'Manager', email: '' }], vendors: [], website: 'https://manychat.com', checklist: 'Account Creation' },
  { name: 'SMS Marketing', type: 'Paid', contentFormat: 'Static', color: '#00B894', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'Referral Hero', role: 'Vendor', email: '' }], vendors: [], checklist: '6 Million+ Mobile Nos' },
  { name: 'Email Marketing', type: 'Paid', contentFormat: 'Static', color: '#E17055', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'Zoho Mail', role: 'Tool', email: 'avinash.vaghela@aequitasinfotech.com' }], vendors: [], checklist: '9 Million+ Emails' },
  { name: 'Email Newsletters', type: 'Paid', contentFormat: 'Static', color: '#FD79A8', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'UTM / GA Tracking', role: 'Tracking', email: '' }, { name: 'Emily', role: 'Contact', email: 'emily@austinuni.edu' }], vendors: [], checklist: 'Account Creation' },
  { name: 'Email Oversight', type: 'Paid', contentFormat: 'Static', color: '#74B9FF', status: 'TBD', budget: '$0', dimensions: {}, contacts: [{ name: 'Bryan Jenkins', role: 'Vendor', email: 'bryan@emailoversight.com' }], vendors: [], checklist: 'Email Testing' },
  
  // Influencer, Advocacy & Referral Growth (29-31)
  { name: 'Influencer Marketing', type: 'Paid', contentFormat: 'Static + Video', color: '#A29BFE', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'HookPoint', role: 'Platform', email: 'debc@hookpoint.com' }, { name: 'Emily', role: 'Contact', email: 'emily@austinuni.edu' }], vendors: [], checklist: 'Account Creation' },
  { name: 'Referral Program', type: 'Paid', color: '#00CEC9', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'Referral Hero', role: 'Platform', email: 'julian@referralhero.com' }], vendors: [], website: 'https://referralhero.com', goLive: '15-Jan', checklist: 'Not Needed' },
  { name: 'Student Ambassador', type: 'Paid', color: '#FDCB6E', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'Austin UT & Texas AM', role: 'Universities', email: 'emily@austinuni.edu' }], vendors: [], checklist: 'OWN PROGRAM' },
  
  // Community & Grassroots Marketing (32-35)
  { name: 'Nextdoor', type: 'Organic/Paid', color: '#00B894', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'Feedbird', role: 'Social Manager', email: 'support@feedbird.com' }], vendors: [{ name: '99 Social', contact: 'Juan Restrepo' }, { name: 'Draftss', contact: 'Aditi' }], website: 'https://www.nextdoor.com', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image' },
  { name: 'Community Reach', type: 'Organic/Paid', color: '#6C5CE7', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'Tamil, Telugu, Malayalam Associations', role: 'Groups', email: '' }], vendors: [], checklist: 'Need inputs from JP' },
  { name: 'Indian Diaspora', type: 'Organic/Paid', color: '#FF7675', status: 'TBD', budget: '$100', dimensions: {}, contacts: [], vendors: [], checklist: 'Email, SMS, WhatsApp, Facebook Groups' },
  { name: 'Campus Radio', type: 'Paid', color: '#FFEAA7', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'Austin Uni & Texas AM', role: 'Universities', email: 'emily@austinuni.edu' }], vendors: [], checklist: 'VARIES' },
  
  // Offline, OOH & Experiential Marketing (36-39)
  { name: 'Airport Ads', type: 'Paid', color: '#81ECEC', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'Offline Billboard', role: 'Vendor', email: '' }], vendors: [], website: 'https://www.audiogo.com', checklist: 'In phase 2 after awareness campaign' },
  { name: 'Billboards', type: 'Paid', color: '#DFE6E9', status: 'TBD', budget: '$100', dimensions: {}, contacts: [], vendors: [], checklist: 'Outdoor Billboards' },
  { name: 'Hotels', type: 'Others', color: '#E17055', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'Marriott Partnerships', role: 'Vendor', email: '' }], vendors: [], checklist: 'Need inputs from JP' },
  { name: 'Car Dealership', type: 'Organic', color: '#2D3436', status: 'TBD', budget: '$100', dimensions: {}, contacts: [], vendors: [], checklist: '1200+ Car Dealerships in Texas' },
  
  // Press, PR & Authority Building (40-41)
  { name: 'Press & Media', type: 'Paid', color: '#636E72', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'Press Ranger, EIN Presswire, Baden Bower, Austin Uni', role: 'Vendors', email: 'emily@austinuni.edu' }], vendors: [], checklist: 'Need inputs from JP', note: '350+ Digital Media, Forbes, Inc Magazine' },
  { name: 'Magazines', type: 'Paid', color: '#B2BEC3', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'Austin Uni', role: 'Contact', email: 'emily@austinuni.edu' }], vendors: [], checklist: 'VARIES' },
  
  // Geo-Based & Hyperlocal Targeting (42)
  { name: 'GeoFencing', type: 'Paid', color: '#00CEC9', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'Geofence Pro', role: 'Platform', email: 'rishabh@bldsindia.com' }], vendors: [{ name: 'Ground Truth', contact: 'USA' }], checklist: 'Account Creation', goLive: '15-Jan' },
  
  // Events, Innovation & Brand Activation (43)
  { name: 'Hackathon', type: 'Paid', color: '#FD79A8', status: 'TBD', budget: '$100', dimensions: {}, contacts: [], vendors: [], checklist: 'All Hackathons' },
  
  // App Growth & Platform Optimization (44)
  { name: 'ASO', type: 'Paid', color: '#74B9FF', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'App Guardians', role: 'Vendor', email: '' }], vendors: [], checklist: 'After launching the app' },
  
  // Website (45)
  { name: 'Website', type: 'Organic', color: '#423DF9', status: 'TBD', budget: '$100', dimensions: {}, contacts: [{ name: 'Len Woods', role: 'Owner', email: 'lenwoods@gmail.com', phone: '+1 318-278-7525' }], vendors: [{ name: 'Draftss', contact: 'Aditi' }, { name: 'Ankit and Deepanshi', contact: 'Team' }], website: 'https://ayrorides.com' },
];

export default function RiderMarketing() {

  const groupByType = (channels) => {
    const groups = {};
    channels.forEach(ch => {
      const type = ch.type.includes('/') ? ch.type.split('/')[0] : ch.type;
      if (!groups[type]) groups[type] = [];
      groups[type].push(ch);
    });
    return groups;
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: "'DM Sans', sans-serif", background: '#fafafe' }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');`}</style>
      
      {/* Header - Full navigation like Home */}
      <Header />

      {/* Hero */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1D0652 0%, #423DF9 60%, #08D9C4 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 rounded-full" style={{ background: 'radial-gradient(circle, #08D9C4 0%, transparent 70%)' }} />
          <div className="absolute bottom-10 left-20 w-48 h-48 rounded-full" style={{ background: 'radial-gradient(circle, #7742F1 0%, transparent 70%)' }} />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4" style={{ background: 'rgba(255,255,255,0.15)', color: '#08D9C4', border: '1px solid rgba(255,255,255,0.2)' }}>
            Marketing Channels
          </div>
          <h1 className="text-white text-3xl sm:text-4xl font-bold mb-4 leading-tight">Rider Marketing Playbook</h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl leading-relaxed">
            {channels.length} marketing channels including social media, paid advertising, influencer, and offline channels.
          </p>
        </div>
        <div className="h-1" style={{ background: 'linear-gradient(90deg, #423DF9, #08D9C4, #7742F1)' }} />
      </div>

      {/* Stats Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-6 relative z-20">
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 px-6 py-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: '#423DF915' }}>
              <svg className="w-5 h-5" style={{ color: '#423DF9' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold" style={{ color: '#1D0652' }}>{channels.length}</p>
              <p className="text-xs text-gray-500">Channels</p>
            </div>
          </div>
        </div>
      </div>

      {/* Channels Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl font-bold" style={{ color: '#1D0652' }}>All Marketing Channels</h2>
            <p className="text-gray-500 text-sm mt-1">Social media, paid ads, influencer, and offline channels</p>
          </div>
          <span className="text-sm font-semibold px-3 py-1 rounded-full" style={{ background: '#423DF915', color: '#423DF9' }}>{channels.length} channels</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {channels.map(channel => (
            <div key={channel.name} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
              <div className="h-2" style={{ background: channel.color }} />
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: channel.color + '15' }}>
                      <svg className="w-6 h-6" style={{ color: channel.color }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{channel.name}</h3>
                      <p className="text-xs text-gray-400">{channel.type}</p>
                    </div>
                  </div>
                  {channel.type.includes('Paid') ? (
                      <span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-100 text-green-700">Paid</span>
                    ) : (
                      <span className="text-xs font-semibold px-2 py-1 rounded-full bg-blue-100 text-blue-700">Organic</span>
                    )}
                </div>

                {/* Content Format - Static & Video */}
                {(channel.name === 'YouTube' || channel.name === 'TikTok' || channel.name === 'Facebook' || channel.name === 'Instagram' || channel.name === 'Threads' || channel.name === 'Snapchat' || channel.name === 'Twitter/X' || channel.name === 'LinkedIn' || channel.name === 'Reddit' || channel.name === 'Pinterest' || channel.name === 'Telegram') && (
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 text-gray-600">Static</span>
                      <span className="text-xs font-medium px-2 py-1 rounded" style={{ background: '#423DF915', color: '#423DF9' }}>Video</span>
                    </div>
                    {/* Dimensions */}
                    <div className="text-xs text-gray-500 space-y-1">
                      {channel.name === 'YouTube' && (
                        <>
                          <p><span className="font-medium">Thumbnail:</span> 1280×720 px (16:9)</p>
                          <p><span className="font-medium">Video:</span> 1920×1080 px (16:9)</p>
                          <p><span className="font-medium">Shorts:</span> 1080×1920 px (9:16)</p>
                        </>
                      )}
                      {channel.name === 'TikTok' && (
                        <>
                          <p><span className="font-medium">Image:</span> 1080×1920 px (9:16)</p>
                          <p><span className="font-medium">Video:</span> 1080×1920 px (9:16)</p>
                        </>
                      )}
                      {channel.name === 'Facebook' && (
                        <>
                          <p><span className="font-medium">Feed:</span> 1080×1080 px</p>
                          <p><span className="font-medium">Landscape:</span> 1200×630 px</p>
                          <p><span className="font-medium">Story/Reels:</span> 1080×1920 px</p>
                        </>
                      )}
                      {channel.name === 'Instagram' && (
                        <>
                          <p><span className="font-medium">Feed Square:</span> 1080×1080 px</p>
                          <p><span className="font-medium">Feed Portrait:</span> 1080×1350 px</p>
                          <p><span className="font-medium">Stories/Reels:</span> 1080×1920 px</p>
                        </>
                      )}
                      {channel.name === 'Threads' && (
                        <>
                          <p><span className="font-medium">Image:</span> 1080×1080 px or 1080×1350 px</p>
                          <p><span className="font-medium">Video:</span> 1080×1920 px</p>
                        </>
                      )}
                      {channel.name === 'Snapchat' && (
                        <>
                          <p><span className="font-medium">Snap Image:</span> 1080×1920 px</p>
                          <p><span className="font-medium">Snap Video:</span> 1080×1920 px</p>
                        </>
                      )}
                      {(channel.name === 'Twitter/X' || channel.name === 'LinkedIn') && (
                        <>
                          <p><span className="font-medium">Image:</span> 1200×675 px (16:9)</p>
                          <p><span className="font-medium">Square:</span> 1080×1080 px</p>
                          <p><span className="font-medium">Video:</span> 1080×1920 px</p>
                        </>
                      )}
                      {channel.name === 'Reddit' && (
                        <>
                          <p><span className="font-medium">Image:</span> 1080×1080 px</p>
                          <p><span className="font-medium">Video:</span> 1080×1920 px</p>
                        </>
                      )}
                      {channel.name === 'Pinterest' && (
                        <>
                          <p><span className="font-medium">Standard:</span> 1000×1500 px (2:3)</p>
                          <p><span className="font-medium">Video:</span> 1080×1920 px</p>
                        </>
                      )}
                    </div>
                  </div>
                )}

                {/* Budget */}
                <div className="flex items-center justify-between mb-4 p-3 rounded-lg" style={{ background: '#423DF908' }}>
                  <span className="text-xs text-gray-500">Monthly Budget</span>
                  <span className="font-bold" style={{ color: '#423DF9' }}>{channel.budget}</span>
                </div>

                {/* Website Link */}
                {channel.website && (
                  <a 
                    href={channel.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#423DF9] hover:underline"
                  >
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Website
                  </a>
                )}
                
                {/* Ads Manager Link */}
                {channel.adsManager && (
                  <a 
                    href={channel.adsManager} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#423DF9] hover:underline ml-3"
                  >
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                    Ads Manager
                  </a>
                )}
                
                {/* Analytics Link */}
                {channel.analytics && (
                  <a 
                    href={channel.analytics} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#423DF9] hover:underline ml-3"
                  >
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Analytics
                  </a>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}