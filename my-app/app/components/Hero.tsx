import Image from 'next/image';
import h1 from '../assets/h1.png';
import h2 from '../assets/h2.webp';

export default function Hero() {
  return (
    <div className="flex flex-col items-center text-center bg-gray-100 py-16 px-4 lg:px-8">
      {/* Top Section */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 leading-tight">
          Scale personalized outreach with better data enrichment
        </h1>
        <h2 className="mt-4 text-lg text-gray-600">
          Help your RevOps & growth teams implement any outreach idea. First, maximize data coverage
          with 75+ enrichment tools & our AI agent with just your Clay account. Then, use AI to craft
          relevant outreach at scale.
        </h2>
        
        {/* Rating & Button Section */}
        <div className="flex items-center justify-center mt-6 space-x-4">
          <div className="text-gray-500">
            ⭐ 4.9 rating &nbsp;|&nbsp; 15k+ growth community &nbsp;|&nbsp; 150+ testimonials
          </div>
          <button className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800">
            Start building for free
          </button>
        </div>
      </div>

      {/* Flow and Logo Images */}
      <div className="flex justify-between items-center mt-12 w-full max-w-5xl">
        <div className="relative w-1/4">
          <Image src={h1} alt="Left Flow" layout="responsive" width={100} height={100} />
        </div>
        
        <div className="flex flex-col items-center space-y-4 mx-4">
          <div className="bg-white p-4 shadow-md rounded-lg border border-gray-200">
            Import / build a lead list
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg border border-gray-200">
            Enrich your leads with 75+ data providers
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg border border-gray-200">
            Use our AI research agent
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg border border-gray-200">
            Scale personalized outreach
          </div>
        </div>

        <div className="relative w-1/4">
          <Image src={h2} alt="Right Flow" layout="responsive" width={100} height={100} />
        </div>
      </div>

      <div className="mt-8 w-full max-w-5xl grid grid-cols-9 gap-4">
        {[
          { src: '/intercom.png', name: 'Intercom' },
          { src: '/verkada.png', name: 'Verkada' },
          { src: '/brex.png', name: 'Brex' },
          { src: '/notion.png', name: 'Notion' },
          { src: '/vanta.png', name: 'Vanta' },
          { src: '/replit.png', name: 'Replit' },
          { src: '/anthropic.png', name: 'Anthropic' },
          { src: '/ramp.png', name: 'Ramp' },
          { src: '/hightouch.png', name: 'Hightouch' },
          { src: '/mercury.png', name: 'Mercury' },
          { src: '/dbt.png', name: 'dbt' },
          { src: '/hex.png', name: 'Hex' },
          { src: '/dropbox.png', name: 'Dropbox' },
          { src: '/deel.png', name: 'Deel' },
          { src: '/grafana.png', name: 'Grafana Labs' },
          { src: '/sigma.png', name: 'Sigma' },
          { src: '/square.png', name: 'Square' },
          { src: '/launchdarkly.png', name: 'LaunchDarkly' }
        ].map((logo, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image src={logo.src} alt={logo.name} width={50} height={50} />
            <span className="mt-2 text-sm text-gray-600">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
