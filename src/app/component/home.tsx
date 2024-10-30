import Image from "next/image";

const Homme = () => {
  return (
    <>
      <div className="relative h-screen">
        
        <Image
          className="absolute inset-0 object-cover" 
          src="/img_2.jpg" 
          alt="home"
          layout="fill"
          priority 
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4">
          <h1 className="text-black text-2xl md:text-4xl lg:text-5xl font-bold shadow-lg">
            Scale personalized outreach with<br/> better data enrichment
          </h1>
          <p className="text-black mt-4 text-sm md:text-base lg:text-lg shadow-md px-4 md:px-40 lg:px-80">
            Help your RevOps & growth teams implement any outreach idea. First,
            maximize data coverage with 75+ enrichment tools & our AI agent with just your Clay account. Then,
            use AI to craft relevant outreach at scale.
          </p>
        </div>
      </div>
      
  
    </>
  );
};

export default Homme;
