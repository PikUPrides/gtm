import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';

const platforms = [
  { name: 'Indeed', type: 'Job Board', profileUrl: 'https://employers.indeed.com/employer-settings/organization', website: 'https://www.indeed.com/hire', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image', notes: 'Check the uber and Lyft job posting and come up with similar job posting content', contact: '', phone: '', links: 'https://docs.google.com/document/d/1-0dfquHNhbUReF6gg_47ihh2UC2TjkixBEWKYW1B5Kk/edit?usp=sharing', budget: '$1,000', approved: 'TBD', goLive: 'TBD', thingsToDo: 'Get approval from len woods for the content, we have to create a url genius, update the credit card and phone number, research on uber jobs on search for dallas, plan which we can buy - how many jobs for a month(may 15)', status: 'Active' },
  { name: 'ZipRecruiter', type: 'Job Board', profileUrl: 'https://www.ziprecruiter.com/user/details?user_id=1ae27caf', website: 'https://www.ziprecruiter.com/jobboard.io', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image', notes: '', contact: 'support@ziprecruiter.co.uk', phone: '', links: 'https://docs.google.com/document/d/1lUjfKLxlP4i6hB0Oir8T97r4OPRxg0xJ7roXVF7SxyM/edit?usp=sharing', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Active' },
  { name: 'iHire Transportation', type: 'Industry-Specific Job Board', profileUrl: 'https://www.ihiretransportation.com/orgs/774554/ayrorides', website: 'https://www.ihiretransportation.com/', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image', notes: 'Create a email template to send email and also fill in the contact us form', contact: 'customersuccess@ihire.com', phone: '', links: 'https://docs.google.com/document/d/1ou_I-llb5r3DHDzrbWzhgvlrLOmY_Uy9PvePmdPuiFg/edit?usp=sharing', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Active' },
  { name: 'TransForce', type: 'Industry-Specific Job Board', profileUrl: '', website: 'https://www.transforce.com/', checklist: '', notes: 'Create a email template to send email and also fill in the contact us form', contact: 'recruiting@transforce.com', phone: '1 800-308-698', links: 'https://docs.google.com/document/d/1ou_I-llb5r3DHDzrbWzhgvlrLOmY_Uy9PvePmdPuiFg/edit?usp=sharing', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Pending' },
  { name: 'Craigslist', type: 'Classifieds Marketplace', profileUrl: 'https://prnt.sc/9AzwFWI9c9qs', website: 'https://craigslist.org', checklist: '', notes: "We're sorry, but we're unable to create an account at this time. Check the uber and Lyft job posting and come up with similar job posting content", contact: '', phone: '', links: 'https://docs.google.com/document/d/1bW-sz-ypmtXjWbNqNqAC1GT9en5fNU5izdBOqehAi70/edit?usp=sharing', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Blocked' },
  { name: 'Gridwise', type: 'Driver App / Gig Economy Platform', profileUrl: '', website: 'https://www.gridwise.io', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image', notes: 'Write email and contact the Advertising Team and get the quote', contact: 'support@gridwise.io', phone: '', links: 'https://docs.google.com/document/d/1ou_I-llb5r3DHDzrbWzhgvlrLOmY_Uy9PvePmdPuiFg/edit?usp=sharing', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Pending' },
  { name: 'The Rideshare Guy', type: 'Media Platform / Driver Community', profileUrl: '', website: 'https://therideshareguy.com/', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image', notes: 'Waiting for len to get the content verified and then will contact them - Write email and contact the Advertising Team and get the quote', contact: 'hello@therideshareguy.com', phone: '', links: 'https://docs.google.com/document/d/1ou_I-llb5r3DHDzrbWzhgvlrLOmY_Uy9PvePmdPuiFg/edit?usp=sharing', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Pending' },
  { name: 'Solo', type: 'Driver Network', profileUrl: '', website: 'https://www.worksolo.com/advertise-with-us', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image', notes: 'Waiting for len to get the content verified and then will contact them - Write email and contact the Advertising Team and get the quote', contact: '', phone: '', links: 'https://docs.google.com/document/d/1ou_I-llb5r3DHDzrbWzhgvlrLOmY_Uy9PvePmdPuiFg/edit?usp=sharing', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Pending' },
  { name: 'Platinum Drivers', type: 'Driver Staffing & Recruitment Agency', profileUrl: '', website: 'https://platinumdrivers.com', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image', notes: 'Waiting for len to get the content verified and then will contact them', contact: 'info@platinumdrivers.com', phone: '', links: '', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Pending' },
  { name: 'Casual Driver Leasing', type: 'Driver Leasing & Staffing Company', profileUrl: '', website: 'https://casualdriverleasingservices.com/', checklist: '', notes: 'Waiting for len to get the content verified and then will contact them', contact: 'brian@casualdriverleasingservices.com', phone: '', links: '', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Pending' },
  { name: 'Ground Truth', type: 'Market Research & Data Platform', profileUrl: '', website: 'https://www.groundtruth.com/', checklist: '', notes: 'How ground truth is helping to get the drivers? Do we need to send them a message?', contact: 'info@groundtruth.com', phone: '', links: '', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'In Progress' },
  { name: 'SEM Nexus', type: 'App Marketing & Growth Agency', profileUrl: 'https://prnt.sc/XY67baxjQhb6', website: 'https://semnexus.com/', checklist: '', notes: 'Sorry, you have been blocked', contact: 'hello@semnexus.com', phone: '', links: '', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Blocked' },
  { name: 'Your Driver Mike', type: 'Personal Brand', profileUrl: '', website: 'https://www.yourdrivermike.com/', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image', notes: 'Waiting for len to get the content verified and then will contact them', contact: 'hello@yourdrivermike.com', phone: '', links: 'https://drive.google.com/file/d/19y8YvJQZbyjsgyh0n1AirNQck5scQi5m/view', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Pending' },
  { name: 'Uberpeople.net', type: 'Job board', profileUrl: 'https://www.uberpeople.net/members/ayrorides.275491/', website: 'https://www.uberpeople.net/', checklist: '', notes: '', contact: '', phone: '', links: '', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Active' },
  { name: 'AudioGo', type: 'Audio Platform', profileUrl: 'https://app.audiogo.com/us/account/settings', website: '', checklist: '', notes: '', contact: '', phone: '', links: '', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Active' },
  { name: 'Roku', type: 'Streaming Platform', profileUrl: '', website: '', checklist: '', notes: "The email address or password provided does not match our records. Tip: You can verify your Roku account email address from your device by visiting Settings.", contact: '', phone: '', links: '', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Blocked' },
  { name: 'Vibe.co', type: 'CTV Advertising', profileUrl: 'My First CTV Campaign', website: 'https://www.vibe.co/', checklist: '', notes: '', contact: '', phone: '', links: '', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'In Progress' },
  { name: 'Rideshare Professor', type: 'Media Platform', profileUrl: '', website: '', checklist: '', notes: 'Waiting for len to get the content verified and then will contact them', contact: '', phone: '', links: '', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Pending' },
  { name: 'Snagajob', type: 'Job board', profileUrl: 'https://prnt.sc/LqZwHev5IfON', website: 'https://www.snagajob.com/employer', checklist: '', notes: 'Address issue at my end, need to choose city, state, zip code', contact: '', phone: '', links: '', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'In Progress' },
  { name: 'SalutemyJob', type: 'Job board', profileUrl: 'https://salutemyjob.com/recruiter/', website: 'https://salutemyjob.com/', checklist: '', notes: '', contact: '', phone: '', links: '', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Active' },
  { name: 'Glassdoor', type: 'Job board', profileUrl: '', website: '', checklist: '', notes: 'We take profile verification very seriously at Glassdoor and we appreciate your patience as we verify that you are a representative of your company. We will send an update to socialmedia@pikup.us within 24-hrs about your account status.', contact: '', phone: '', links: '', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Pending' },
  { name: 'Heartland Express', type: 'Job board', profileUrl: '', website: 'https://www.heartlandexpress.com/contact-us', checklist: '', notes: 'Waiting for len to get the content verified and then will contact them', contact: '', phone: '', links: '', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Pending' },
  { name: 'Monster', type: 'Job board', profileUrl: 'https://manage.monster.com/en-us/companyProfile', website: 'https://www.monster.com', checklist: '', notes: '', contact: '', phone: '', links: '', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Active' },
  { name: 'Easy.jobs', type: 'Job board', profileUrl: '', website: 'https://easy.jobs/contact/', checklist: '', notes: '', contact: '', phone: '', links: '', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Pending' },
  { name: 'Easy Careers', type: 'Job board', profileUrl: '', website: '', checklist: '', notes: 'Waiting for len to get the content verified and then will contact them', contact: '', phone: '', links: '', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Pending' },
  { name: 'CDLLife Jobs', type: 'Job board', profileUrl: '', website: 'https://contact.cdlconnect.io/contact-cdllife?dl=https%3A%2F%2Fcdllife.com%2Fnews%2F', checklist: '', notes: 'Waiting for len to get the content verified and then will contact them', contact: '', phone: '', links: '', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Pending' },
  { name: 'Facebook Group', type: 'Community / Social Network', profileUrl: '', website: '', checklist: '', notes: 'Vendor', contact: '', phone: '', links: '', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Pending' },
  { name: 'Website Careers', type: 'Careers Page', profileUrl: '', website: '', checklist: '', notes: '', contact: '', phone: '', links: '', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Pending' },
  { name: 'Sulekha', type: 'Job board', profileUrl: '', website: 'https://www.sulekha.com', checklist: '', notes: '', contact: '', phone: '', links: '', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Pending' },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'Active': return { bg: '#dcfce7', text: '#166534' };
    case 'Pending': return { bg: '#fef3c7', text: '#92400e' };
    case 'Blocked': return { bg: '#fee2e2', text: '#991b1b' };
    case 'In Progress': return { bg: '#dbeafe', text: '#1e40af' };
    default: return { bg: '#f3f4f6', text: '#6b7280' };
  }
};

const getTypeColor = (type) => {
  if (type.includes('Job Board')) return '#423DF9';
  if (type.includes('Industry')) return '#08D9C4';
  if (type.includes('Driver') || type.includes('Gig')) return '#7742F1';
  if (type.includes('Media') || type.includes('Community')) return '#F59E0B';
  if (type.includes('Streaming') || type.includes('Audio') || type.includes('CTV')) return '#EC4899';
  return '#6B7280';
};

export default function DriverMarketing() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'DM Sans', sans-serif", background: '#fafafe' }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');`}</style>
      
      {/* Header */}
      <Header />

      {/* Hero */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1D0652 0%, #7742F1 60%, #08D9C4 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 rounded-full" style={{ background: 'radial-gradient(circle, #08D9C4 0%, transparent 70%)' }} />
          <div className="absolute bottom-10 left-20 w-48 h-48 rounded-full" style={{ background: 'radial-gradient(circle, #7742F1 0%, transparent 70%)' }} />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4" style={{ background: 'rgba(255,255,255,0.15)', color: '#08D9C4', border: '1px solid rgba(255,255,255,0.2)' }}>
            Driver Recruitment
          </div>
          <h1 className="text-white text-3xl sm:text-4xl font-bold mb-4 leading-tight">Driver Marketing Playbook</h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl leading-relaxed">
            {platforms.length} platforms for driver recruitment including job boards, driver communities, and staffing agencies.
          </p>
        </div>
        <div className="h-1" style={{ background: 'linear-gradient(90deg, #7742F1, #08D9C4, #423DF9)' }} />
      </div>

      {/* Stats Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-6 relative z-20">
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 px-6 py-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: '#7742F115' }}>
              <svg className="w-5 h-5" style={{ color: '#7742F1' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h-1.5a1.5 1.5 0 0 1 0-3H12m0 0a1.5 1.5 0 0 0 0-3h-1.5m0 0a1.5 1.5 0 0 1 0-3H12" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold" style={{ color: '#1D0652' }}>{platforms.length}</p>
              <p className="text-xs text-gray-500">Platforms</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 px-6 py-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: '#dcfce715' }}>
              <svg className="w-5 h-5" style={{ color: '#166534' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold" style={{ color: '#166534' }}>{platforms.filter(p => p.status === 'Active').length}</p>
              <p className="text-xs text-gray-500">Active</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 px-6 py-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: '#fef3c715' }}>
              <svg className="w-5 h-5" style={{ color: '#92400e' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold" style={{ color: '#92400e' }}>{platforms.filter(p => p.status === 'Pending').length}</p>
              <p className="text-xs text-gray-500">Pending</p>
            </div>
          </div>
        </div>
      </div>

      {/* Platforms Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl font-bold" style={{ color: '#1D0652' }}>All Driver Recruitment Platforms</h2>
            <p className="text-gray-500 text-sm mt-1">Job boards, driver apps, staffing agencies, and communities</p>
          </div>
          <span className="text-sm font-semibold px-3 py-1 rounded-full" style={{ background: '#7742F115', color: '#7742F1' }}>{platforms.length} platforms</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, index) => {
            const statusColor = getStatusColor(platform.status);
            const typeColor = getTypeColor(platform.type);
            
            return (
              <div key={`${platform.name}-${index}`} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
                <div className="h-2" style={{ background: typeColor }} />
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: typeColor + '15' }}>
                        <svg className="w-6 h-6" style={{ color: typeColor }} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{platform.name}</h3>
                        <p className="text-xs text-gray-400">{platform.type}</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ background: statusColor.bg, color: statusColor.text }}>
                      {platform.status}
                    </span>
                  </div>

                  {/* Budget */}
                  {platform.budget && (
                    <div className="flex items-center justify-between mb-4 p-3 rounded-lg" style={{ background: '#7742F108' }}>
                      <span className="text-xs text-gray-500">Budget</span>
                      <span className="font-bold" style={{ color: '#7742F1' }}>{platform.budget}</span>
                    </div>
                  )}

                  {/* Notes */}
                  {platform.notes && (
                    <div className="mb-4 p-3 rounded-lg bg-gray-50">
                      <p className="text-xs text-gray-600 line-clamp-3">{platform.notes}</p>
                    </div>
                  )}

                  {/* Contact Info */}
                  {platform.contact && (
                    <div className="mb-2 text-xs">
                      <span className="text-gray-400">Contact: </span>
                      <span className="text-gray-600">{platform.contact}</span>
                    </div>
                  )}
                  {platform.phone && (
                    <div className="mb-2 text-xs">
                      <span className="text-gray-400">Phone: </span>
                      <span className="text-gray-600">{platform.phone}</span>
                    </div>
                  )}

                  {/* Links */}
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                    {platform.website && (
                      <a 
                        href={platform.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-[#7742F1] hover:underline"
                      >
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Website
                      </a>
                    )}
                    {platform.profileUrl && platform.profileUrl.startsWith('http') && (
                      <a 
                        href={platform.profileUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-[#7742F1] hover:underline"
                      >
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        Profile
                      </a>
                    )}
                    {platform.links && (
                      <a 
                        href={platform.links} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-[#7742F1] hover:underline"
                      >
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Docs
                      </a>
                    )}
                  </div>

                  {/* Things to do */}
                  {platform.thingsToDo && (
                    <div className="mt-4 p-3 rounded-lg" style={{ background: '#FEF3C7' }}>
                      <p className="text-xs font-medium text-amber-800">Things to do:</p>
                      <p className="text-xs text-amber-700 mt-1">{platform.thingsToDo}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Back to Index */}
        <div className="mt-12 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#7742F1] transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}