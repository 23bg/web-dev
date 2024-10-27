import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-blue-100 py-16">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        
        {/* How It Works Section */}
        <div className="text-gray-600 uppercase font-semibold tracking-wide mb-8">
          How it Works
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {['Import/create a lead list', 'Enrich your data with 75+ tools', 'Use our AI research agent', 'Scale your outreach'].map((item, index) => (
            <div key={index} className="bg-white px-4 py-2 shadow-md rounded-md border border-gray-300 text-gray-700">
              {item}
            </div>
          ))}
        </div>
        
        {/* Main Call-to-Action */}
        <div className="mt-16">
          <span className="inline-block bg-blue-500 text-white py-1 px-3 rounded-md font-semibold text-sm uppercase mb-4">
            List Building
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Import or create a targeted list</h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Sync a list of leads from your CRM, or prospect from scratch to build targeted lead lists. We have 10+ built-in sources to help you find companies, people, and open jobs.
          </p>
          <button className="mt-6 bg-black text-white py-2 px-6 rounded hover:bg-gray-800">
            Start 14 day Pro trial
          </button>
        </div>

        {/* CRM and Data Sources */}
        <div className="mt-16 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { src: '/salesforce.png', label: 'Salesforce' },
            { src: '/hubspot.png', label: 'HubSpot' },
            { src: '/close.png', label: 'Close' },
            { src: '/typeform.png', label: 'Typeform' },
            { src: '/loxo.png', label: 'Loxo' },
            { src: '/companies.png', label: 'Companies & people' },
            { src: '/googlemaps.png', label: 'Google Maps' },
            { src: '/ocean.png', label: 'Ocean.io' },
            { src: '/github.png', label: 'GitHub stargazers' },
            { src: '/storeleads.png', label: 'Storeleads' },
            { src: '/importcompany.png', label: 'Import company list' },
            { src: '/importpeople.png', label: 'Import people list' },
            { src: '/importjobs.png', label: 'Import jobs list' },
            { src: '/chrome.png', label: 'Import Chrome ext. list' },
            { src: '/recruiting.png', label: 'Recruiting sales managers' }
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-start bg-white p-4 shadow-md rounded-md border border-gray-200">
              <Image src={item.src} alt={item.label} width={30} height={30} />
              <span className="ml-4 text-gray-700">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
