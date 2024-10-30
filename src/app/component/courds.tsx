import Image from "next/image";

const Courds = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        <div className="bg-gray-100 rounded-md p-4">
          <Image 
            className="rounded-md object-cover w-full h-52" 
            alt="courds" 
            src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66b1d628d8d2c551e76e54c1_img-automated-inbound.webp" 
            width={400} 
            height={200} 
            layout="responsive"
          />
          <h2 className="font-bold mt-2">Courds</h2>
          <p className="opacity-75 mt-1 text-sm">
            Help your RevOps & growth teams implement any outreach idea. First, maximize data coverage with 75+ enrichment tools & our AI agent with
          </p>
        </div>

        <div className="bg-gray-100 rounded-md p-4">
          <Image 
            className="rounded-md object-cover w-full h-52" 
            alt="courds" 
            src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667aaad3cf4abed74dcdfc01_templates.webp" 
            width={400} 
            height={200} 
            layout="responsive"
          />
          <h2 className="font-bold mt-2">Courds</h2>
          <p className="opacity-75 mt-1 text-sm">
            Help your RevOps & growth teams implement any outreach idea. First, maximize data coverage with 75+ enrichment tools & our AI agent with
          </p>
        </div>

        <div className="bg-gray-100 rounded-md p-4">
          <Image 
            className="rounded-md object-cover w-full h-52" 
            alt="courdss" 
            src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667aaad276b3f971b3cb3947_templat.webp" 
            width={400} 
            height={200} 
            layout="responsive"
          />
          <h2 className="font-bold mt-2">Courds</h2>
          <p className="opacity-75 mt-1 text-sm">
            Help your RevOps & growth teams implement any outreach idea. First, maximize data coverage with 75+ enrichment tools & our AI agent with
          </p>
        </div>

        <div className="bg-gray-100 rounded-md p-4">
          <Image 
            className="rounded-md object-cover w-full h-52" 
            alt="courdsss" 
            src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/667ad04b00efbba934486bff_blog-grain.webp" 
            width={400} 
            height={200} 
            layout="responsive"
          />
          <h2 className="font-bold mt-2">Courds</h2>
          <p className="opacity-75 mt-1 text-sm">
            Help your RevOps & growth teams implement any outreach idea. First, maximize data coverage with 75+ enrichment tools & our AI agent with
          </p>
        </div>
      </div>
    </>
  );
};

export default Courds;
