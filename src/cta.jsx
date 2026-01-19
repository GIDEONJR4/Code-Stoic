export default function Cta() {
  return (
    // This parent container handles the centering on the page
    <div
      id="cta"
      className="min-h-screen w-full flex items-center justify-center bg-white px-4 scroll-mt-80  lg:-scroll-mt-20 py-32"
    >
      {/* Your original CTA component */}
      <div className="flex flex-col items-center justify-center max-w-5xl w-full rounded-2xl shadow-md bg-gray-600 px-8 py-20 text-center">
        <div className="flex items-center -space-x-7">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
            alt="image"
            className="h-16 w-16 rounded-full border-4 border-white object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
            alt="image"
            className="h-16 w-16 rounded-full border-4 border-white object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
            alt="image"
            className="h-16 w-16 rounded-full border-4 border-white object-cover"
          />
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="image"
            className="h-16 w-16 rounded-full border-4 border-white object-cover"
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mt-6">
          Partner with Us
        </h1>
        <p className="text-white mt-4 max-w-md opacity-90">
          We partner with pioneering AI companies and researchers to deliver
          tailored solutions that meet the unique demands of diverse industries
          and domains.
        </p>

        <button className="bg-red-600 hover:scale-105 transition-transform font-medium text-white rounded-lg px-20 py-3 mt-10 text-sm shadow-lg">
          LEARN MORE
        </button>
      </div>
    </div>
  );
}
