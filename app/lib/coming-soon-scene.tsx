import { Image } from "@nextui-org/react";

export function ComingSoonScene() {
  return (
    <div className="flex flex-col items-center py-20 rounded-lg px-4 lg:px-6 min-h-screen bg-gradient-to-br from-zinc-900 to-zinc-950">
      <h2 className="text-4xl font-semibold mb-4 text-center max-w-[24ch]">
        Coming Soon. Working on it
      </h2>
      <p className="text-slate-400 mb-6 text-lg text-center max-w-[48ch]">
        We're thrilled to announce that new features are just around the corner!
        Stay tuned!
      </p>
      <div className="flex justify-center">
        <a
          href="#"
          className="bg-blue-500 text-lg hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
        >
          Explore Marketplace
        </a>
      </div>
    </div>
  );
}

export function UnderDevelopmentComponent() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-500 to-pink-600">
      <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Stay Tuned!
        </h2>
        <p className="text-gray-600 mb-8">
          We're hard at work crafting amazing new features. Expect something
          extraordinary!
        </p>
        <div className="flex justify-center">
          <Image
            src="under_development_image.jpg"
            alt="Under Development"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="flex justify-center mt-8">
          <a
            href="#"
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Explore More
          </a>
        </div>
      </div>
    </div>
  );
}
