import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-5 bg-gray-100">
      {/* Left side with a large image */}
      <div className="">
        <Image
          src="/canada.jpg" // Replace with your large image path
          alt="Large Image"
          width={500} // Adjust width accordingly
          height={600} // Adjust height accordingly
          layout="responsive"
          className="object-cover"
        />
      </div>

      {/* Right side with content */}
      <div className=" p-8">
        <h1 className="text-4xl font-bold mb-4">Title</h1>
        <div className="flex items-center mb-4">
          <Image
            src="/klein.png" // Replace with your author image path
            alt="Author"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="ml-4">
            <span className="font-semibold">Terry Jefferson</span>
            <span className="text-gray-500 ml-2">11.01.2024</span>
          </div>
        </div>
        <p className="text-gray-700 text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lure velit quisquam natus blanditiis?
          Autem, dolore consectetur sunt quod tempore voluptas ad dicta vitae magni! Aspernatur
          eveniet vel fugit exercitationem voluptates.
        </p>
      </div>
    </div>

  )
}
