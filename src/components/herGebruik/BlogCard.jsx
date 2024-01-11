import Image from "next/image";
import Link from "next/link";


export default function BlogCard({ title, description, date }) {
    return (
      <div className="bg-[#0a071a] text-white flex flex-wrap rounded overflow-hidden shadow-lg my-2 hover:shadow-md transition-shadow duration-300">
        <Image src="/java_image.jpg" width={800} height={800} objectFit="auto" alt="home foto" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{date}</span>
        </div>
        <div className="px-6 pt-4 pb-2">
          <Link href="/blog/post" className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Read More</Link>
        </div>
      </div>
    );
  }