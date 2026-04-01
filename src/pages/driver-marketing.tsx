import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const platforms = [
  { id: 1, name: 'Indeed', type: 'Job Board', username: 'socialmedia@pikup.us', password: 'Cloud135$', profileUrl: 'https://employers.indeed.com/employer-settings/organization', website: 'https://www.indeed.com/hire', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image', notes: 'Check the uber and Lyft job posting and come up with similar job posting content', docLink: 'https://docs.google.com/document/d/1-0dfquHNhbUReF6gg_47ihh2UC2TjkixBEWKYW1B5Kk/edit?usp=sharing', budget: '$1,000', approved: 'TBD', goLive: 'TBD', thingsToDo: 'Get approval from len woods for the content, create a url genius, update the credit card and phone number, research on uber jobs on search for dallas, plan which we can buy - how many jobs for a month (may 15)', status: 'In Progress' },
  { id: 2, name: 'ZipRecruiter', type: 'Job Board', username: 'socialmedia@pikup.us', password: 'Cloud135$', profileUrl: 'https://www.ziprecruiter.com/user/details?user_id=1ae27caf', website: 'https://www.ziprecruiter.com/jobboard.io', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image', notes: 'support@ziprecruiter.co.uk - Check the uber and Lyft job posting and come up with similar job posting content', docLink: 'https://docs.google.com/document/d/1lUjfKLxlP4i6hB0Oir8T97r4OPRxg0xJ7roXVF7SxyM/edit?usp=sharing', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'In Progress' },
  { id: 3, name: 'iHire Transportation', type: 'Industry-Specific Job Board', username: 'socialmedia@pikup.us', password: 'Cloud135$', profileUrl: 'https://www.ihiretransportation.com/orgs/774554/ayrorides', website: 'https://www.ihiretransportation.com/', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image', notes: 'customersuccess@ihire.com - Create a email template to send email and also fill in the contact us form', docLink: 'https://docs.google.com/document/d/1ou_I-llb5r3DHDzrbWzhgvlrLOmY_Uy9PvePmdPuiFg/edit?usp=sharing', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Pending' },
  { id: 4, name: 'TransForce', type: 'Industry-Specific Job Board', username: 'N/A', password: 'N/A', profileUrl: '', website: 'https://www.transforce.com/', checklist: '', notes: 'recruiting@transforce.com - Create a email template to send email and also fill in the contact us form', docLink: 'https://docs.google.com/document/d/1ou_I-llb5r3DHDzrbWzhgvlrLOmY_Uy9PvePmdPuiFg/edit?usp=sharing', contact: '1 800-308-698', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Truck drivers focus' },
  { id: 5, name: 'Craigslist', type: 'Classifieds Marketplace', username: 'N/A', password: 'N/A', profileUrl: 'https://prnt.sc/9AzwFWI9c9qs', website: 'https://craigslist.org', checklist: '', notes: "We're sorry, but we're unable to create an account at this time.", docLink: 'https://docs.google.com/document/d/1bW-sz-ypmtXjWbNqNqAC1GT9en5fNU5izdBOqehAi70/edit?usp=sharing', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Blocked' },
  { id: 6, name: 'Gridwise', type: 'Driver App / Gig Economy Platform', username: 'N/A', password: 'N/A', profileUrl: '', website: 'https://www.gridwise.io', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image', notes: 'support@gridwise.io - Write email and contact the Advertising Team and get the quote', docLink: 'https://docs.google.com/document/d/1ou_I-llb5r3DHDzrbWzhgvlrLOmY_Uy9PvePmdPuiFg/edit?usp=sharing', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Waiting for response' },
  { id: 7, name: 'The Rideshare Guy', type: 'Media Platform / Driver Community', username: 'N/A', password: 'N/A', profileUrl: '', website: 'https://therideshareguy.com/', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image', notes: 'hello@therideshareguy.com - Write email and contact the Advertising Team and get the quote (Waiting for Len to verify content)', docLink: 'https://docs.google.com/document/d/1ou_I-llb5r3DHDzrbWzhgvlrLOmY_Uy9PvePmdPuiFg/edit?usp=sharing', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Pending' },
  { id: 8, name: 'Solo App', type: 'Driver Network', username: 'N/A', password: 'N/A', profileUrl: '', website: 'https://www.worksolo.com/advertise-with-us', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image', notes: 'Write email and contact the Advertising Team and get the quote (Waiting for Len to verify content)', docLink: 'https://docs.google.com/document/d/1ou_I-llb5r3DHDzrbWzhgvlrLOmY_Uy9PvePmdPuiFg/edit?usp=sharing', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Pending' },
  { id: 9, name: 'Platinum Drivers', type: 'Driver Staffing & Recruitment Agency', username: 'N/A', password: 'N/A', profileUrl: '', website: 'https://platinumdrivers.com', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image', notes: 'info@platinumdrivers.com (Waiting for Len to verify content)', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Pending' },
  { id: 10, name: 'Casual Driver Leasing', type: 'Driver Leasing & Staffing Company', username: 'N/A', password: 'N/A', profileUrl: '', website: 'https://casualdriverleasingservices.com/', checklist: '', notes: 'brian@casualdriverleasingservices.com (Waiting for Len to verify content)', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Pending' },
  { id: 11, name: 'Ground Truth', type: 'Market Research & Data Platform', username: 'N/A', password: 'N/A', profileUrl: '', website: 'https://www.groundtruth.com/', checklist: '', notes: 'info@groundtruth.com - How ground truth is helping to get the drivers? Do we need to send them a message?', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Research needed' },
  { id: 12, name: 'SEM Nexus', type: 'App Marketing & Growth Agency', username: 'N/A', password: 'N/A', profileUrl: 'https://prnt.sc/XY67baxjQhb6', website: 'https://semnexus.com/', checklist: '', notes: 'hello@semnexus.com - Blocked', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Blocked' },
  { id: 13, name: 'Your Driver Mike', type: 'Personal Brand', username: 'N/A', password: 'N/A', profileUrl: '', website: 'https://www.yourdrivermike.com/', checklist: 'Account Creation, Profile setup, Description, Logo Updated, Website details, Profile Image', notes: 'hello@yourdrivermike.com (Waiting for Len to verify content)', docLink: 'https://drive.google.com/file/d/19y8YvJQZbyjsgyh0n1AirNQck5scQi5m/view', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Pending' },
  { id: 14, name: 'Uberpeople.net', type: 'Job board', username: 'socialmedia@pikup.us', password: 'Cloud135$', profileUrl: 'https://www.uberpeople.net/members/ayrorides.275491/', website: 'https://www.uberpeople.net/', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Active' },
  { id: 15, name: 'AudioGo', type: 'Audio Platform', username: 'socialmedia@pikup.us', password: 'Cloud135$', profileUrl: 'https://app.audiogo.com/us/account/settings', website: '', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Setup complete' },
  { id: 16, name: 'Roku', type: 'CTV Advertising', username: 'N/A', password: 'N/A', profileUrl: '', website: '', notes: 'The email address or password provided does not match our records', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Login issue' },
  { id: 17, name: 'Vibe.co', type: 'CTV Advertising', username: 'socialmedia@pikup.us', password: 'Cloud135$', profileUrl: 'My First CTV Campaign', website: 'https://www.vibe.co/', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Campaign created' },
  { id: 18, name: 'Rideshare Professor', type: 'Media Platform', username: 'N/A', password: 'N/A', profileUrl: '', website: '', notes: 'Waiting for Len to verify content', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Pending' },
  { id: 19, name: 'Snagajob', type: 'Job board', username: 'socialmedia@pikup.us', password: 'Cloud135$', profileUrl: 'https://prnt.sc/LqZwHev5IfON', website: 'https://www.snagajob.com/employer', notes: 'Address issue at my end, need to choose city, state, zip code', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Setup issue' },
  { id: 20, name: 'SalutemyJob', type: 'Job board', username: 'socialmedia@pikup.us', password: 'Cloud135$', profileUrl: 'https://salutemyjob.com/recruiter/', website: '', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Active' },
  { id: 21, name: 'Glassdoor', type: 'Job board', username: 'socialmedia@pikup.us', password: 'Cloud135$', profileUrl: 'Account verification pending', website: '', notes: 'Profile verification in progress - will receive update within 24 hours', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Pending verification' },
  { id: 22, name: 'Generic Account', type: 'General', username: 'socialmedia@pikup.us', password: 'Cloud135$', profileUrl: '', website: '', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Available' },
  { id: 23, name: 'Heartland Express', type: 'Job board', username: 'N/A', password: 'N/A', profileUrl: '', website: 'https://www.heartlandexpress.com/contact-us', notes: 'Waiting for Len to verify content', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Pending' },
  { id: 24, name: 'Monster', type: 'Job board', username: 'socialmedia@pikup.us', password: 'Cloud135$', profileUrl: 'https://manage.monster.com/en-us/companyProfile', website: '', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Active' },
  { id: 25, name: 'Easy.jobs', type: 'Job board', username: 'N/A', password: 'N/A', profileUrl: '', website: 'https://easy.jobs/contact/', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Contact needed' },
  { id: 26, name: 'Easy Careers', type: 'Job board', username: 'N/A', password: 'N/A', profileUrl: '', website: '', notes: 'Waiting for Len to verify content', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Pending' },
  { id: 27, name: 'CDLLife Jobs', type: 'Job board', username: 'N/A', password: 'N/A', profileUrl: '', website: 'https://contact.cdlconnect.io/contact-cdllife?dl=https%3A%2F%2Fcdllife.com%2Fnews%2F', notes: 'Waiting for Len to verify content', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Pending' },
  { id: 28, name: 'Facebook Group', type: 'Community / Social Network', username: 'N/A', password: 'N/A', profileUrl: '', website: '', notes: 'Vendor', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'Vendor' },
  { id: 29, name: 'Website Careers', type: 'Website', username: 'N/A', password: 'N/A', profileUrl: '', website: '', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'To be added' },
  { id: 30, name: 'Sulekha', type: 'Job board', username: 'N/A', password: 'N/A', profileUrl: '', website: '', budget: '', approved: '', goLive: '', thingsToDo: '', status: 'To be added' },
];

const getStatusColor = (status) => {
  const s = status?.toLowerCase() || '';
  if (s.includes('active') || s.includes('complete') || s.includes('live')) return 'bg-green-100 text-green-800';
  if (s.includes('pending') || s.includes('waiting')) return 'bg-yellow-100 text-yellow-800';
  if (s.includes('blocked') || s.includes('issue')) return 'bg-red-100 text-red-800';
  if (s.includes('progress')) return 'bg-blue-100 text-blue-800';
  return 'bg-gray-100 text-gray-800';
};

const DriverMarketing = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [selectedPlatform, setSelectedPlatform] = useState(null);

  const types = ['All', ...new Set(platforms.map(p => p.type))];
  const statuses = ['All', ...new Set(platforms.map(p => p.status))];

  const filtered = platforms.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.notes?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'All' || p.type === filterType;
    const matchesStatus = filterStatus === 'All' || p.status === filterStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Driver Marketing Platforms</h1>
            <p className="text-gray-600 mt-1">Track job boards and driver recruitment channels</p>
          </div>
          <Link to="/" className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
            ← Back to Dashboard
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex flex-wrap gap-4">
            <input
              type="text"
              placeholder="Search platforms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 min-w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              {types.map(t => <option key={t} value={t}>{t === 'All' ? 'All Types' : t}</option>)}
            </select>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              {statuses.map(s => <option key={s} value={s}>{s === 'All' ? 'All Statuses' : s}</option>)}
            </select>
          </div>
        </div>

        <div className="grid gap-4">
          {filtered.map(platform => (
            <div key={platform.id} className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{platform.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(platform.status)}`}>
                      {platform.status}
                    </span>
                    <span className="text-sm text-gray-500">{platform.type}</span>
                  </div>
                  
                  {platform.website && (
                    <a href={platform.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm mr-4">
                      Visit Website →
                    </a>
                  )}
                  
                  {platform.profileUrl && !platform.profileUrl.startsWith('http') === false && (
                    <a href={platform.profileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm mr-4">
                      View Profile →
                    </a>
                  )}

                  {platform.notes && <p className="text-gray-600 mt-2">{platform.notes}</p>}

                  {(platform.username && platform.username !== 'N/A') && (
                    <div className="mt-3 flex gap-4 text-sm">
                      <span className="text-gray-500">Email: <span className="text-gray-700 font-medium">{platform.username}</span></span>
                      {platform.password && platform.password !== 'N/A' && (
                        <span className="text-gray-500">Password: <span className="text-gray-700 font-medium">{platform.password}</span></span>
                      )}
                    </div>
                  )}

                  {platform.docLink && (
                    <a href={platform.docLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 px-3 py-1 bg-purple-100 text-purple-700 rounded text-sm hover:bg-purple-200">
                      📄 View Documentation
                    </a>
                  )}

                  {platform.thingsToDo && (
                    <div className="mt-3 p-3 bg-orange-50 rounded-lg">
                      <span className="text-orange-800 font-medium text-sm">📋 To Do: </span>
                      <span className="text-orange-700 text-sm">{platform.thingsToDo}</span>
                    </div>
                  )}

                  {platform.budget && (
                    <div className="mt-3 flex gap-4 text-sm">
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded">Budget: {platform.budget}</span>
                      {platform.approved && <span className="text-gray-500">Approved: {platform.approved}</span>}
                      {platform.goLive && <span className="text-gray-500">Go Live: {platform.goLive}</span>}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center text-gray-500">
          Showing {filtered.length} of {platforms.length} platforms
        </div>
      </div>
    </div>
  );
};

export default DriverMarketing;