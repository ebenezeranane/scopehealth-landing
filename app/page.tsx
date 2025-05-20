import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 font-sans">
    {/* Navigation */}
    <nav className="backdrop-blur-lg bg-white/30 border-b border-white/20 fixed w-full z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            ScopeHealth
          </span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-800 hover:text-blue-600 transition">Features</a>
          <a href="#how-it-works" className="text-gray-800 hover:text-blue-600 transition">How it Works</a>
          <a href="#testimonials" className="text-gray-800 hover:text-blue-600 transition">Testimonials</a>
          <a href="#faq" className="text-gray-800 hover:text-blue-600 transition">Faq</a>
        </div>
        <div>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5">
            Download App
          </button>
        </div>
      </div>
    </nav>

    {/* Hero Section */}
    <header className="pt-32 pb-20 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800 mb-6">
            Healthcare At Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Fingertips</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Connect with licensed doctors instantly through secure video consultations. 
            Get prescriptions, medical advice and care from the comfort of your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5">
              Get Started
            </button>
            <button className="backdrop-blur-md bg-white/30 border border-white/20 text-gray-800 px-8 py-3 rounded-full font-medium shadow hover:shadow-lg transition transform hover:-translate-y-0.5">
              Learn More
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            {/* <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 blur opacity-30"></div> */}
            {/* <div className="relative backdrop-blur-lg bg-white/40 border border-white/20 rounded-3xl shadow-xl overflow-hidden max-w-sm"> */}
              <img 
                src="/hero-img.png"  
                alt="ScopeHealth App Screenshot" 
                className="w-full"
              />
            </div>
          {/* </div> */}
        </div>
      </div>
    </header>

    {/* Features Section */}
    <section id="features" className="py-20 px-6 bg-blue-50">
      <div className="container mx-auto">
        <h2 className="text-3xl  sm:text-4xl lg:text-4xl font-bold text-center mb-16 text-gray-800">
          Why Choose <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">ScopeHealth</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition"></div>
            <div className="relative backdrop-blur-md bg-white/40 border border-white/20 p-8 rounded-2xl shadow-lg h-full">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-14 h-14 rounded-xl flex items-center justify-center text-white mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">24/7 Doctor Access</h3>
              <p className="text-gray-600">Connect with qualified medical professionals anytime, day or night, for urgent or routine care.</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition"></div>
            <div className="relative backdrop-blur-md bg-white/40 border border-white/20 p-8 rounded-2xl shadow-lg h-full">
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 w-14 h-14 rounded-xl flex items-center justify-center text-white mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Secure & Private</h3>
              <p className="text-gray-600">All consultations are encrypted and HIPAA-compliant, keeping your medical information safe.</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition"></div>
            <div className="relative backdrop-blur-md bg-white/40 border border-white/20 p-8 rounded-2xl shadow-lg h-full">
              <div className="bg-gradient-to-br from-teal-400 to-teal-600 w-14 h-14 rounded-xl flex items-center justify-center text-white mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Digital Prescriptions</h3>
              <p className="text-gray-600">Get prescriptions sent directly to your preferred pharmacy without leaving home.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* How It Works */}
    <section id="how-it-works" className="py-10 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-800  sm:text-4xl lg:text-4xl">
          How does it <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">work</span>
        </h2>
            <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
        </div>

        <div className="relative mt-12 lg:mt-20">
            <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
            </div>

            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                <div>
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow hover:bg-blue-500 hover:text-white">
                        <span className="text-xl font-semibold text-gray-700 "> 1 </span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Create a free account</h3>
                    <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>

                <div>
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow  hover:bg-blue-500 hover:text-white">
                        <span className="text-xl font-semibold text-gray-700"> 2 </span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Connect with a Health Provider</h3>
                    <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>

                <div>
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow  hover:bg-blue-500 hover:text-white">
                        <span className="text-xl font-semibold text-gray-700"> 3 </span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Receive Consultation </h3>
                    <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
            </div>
        </div>
    </div>
</section>



{/* testimonial */}
<section>
    <div className="py-10 bg-gradient-to-r from-fuchsia-600 to-blue-600">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold leading-tight text-center text-white sm:text-4xl lg:text-5xl">You’ll be in great company</h2>
        </div>
    </div>

    <div className="grid grid-cols-4 md:grid-cols-6 xl:grid-cols-11">
        <div>
            <div className="aspect-w-1 aspect-h-1">
                <img className="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-1.jpg" alt="" />
            </div>
        </div>

        <div>
            <div className="aspect-w-1 aspect-h-1">
                <img className="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-2.jpg" alt="" />
            </div>
        </div>

        <div>
            <div className="aspect-w-1 aspect-h-1">
                <img className="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-3.jpg" alt="" />
            </div>
        </div>

        <div>
            <div className="aspect-w-1 aspect-h-1">
                <img className="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-4.jpg" alt="" />
            </div>
        </div>

        <div>
            <div className="bg-orange-500 aspect-w-1 aspect-h-1">
                <div className="p-3 sm:p-5 xl:py-6 2xl:py-8 2xl:px-5">
                    <p className="text-sm font-semibold leading-tight text-white sm:text-lg sm:leading-tight">Floyd Miles</p>
                    <p className="mt-2 text-sm text-white truncate">Doctor</p>
                </div>
            </div>
        </div>

        <div>
            <div className="aspect-w-1 aspect-h-1">
                <img className="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-5.jpg" alt="" />
            </div>
        </div>

        <div>
            <div className="aspect-w-1 aspect-h-1">
                <img className="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-6.jpg" alt="" />
            </div>
        </div>

        <div>
            <div className="aspect-w-1 aspect-h-1">
                <img className="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-7.jpg" alt="" />
            </div>
        </div>

        <div>
            <div className="aspect-w-1 aspect-h-1">
                <img className="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-8.jpg" alt="" />
            </div>
        </div>

        <div>
            <div className="aspect-w-1 aspect-h-1">
                <img className="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-9.jpg" alt="" />
            </div>
        </div>

        <div>
            <div className="aspect-w-1 aspect-h-1">
                <img className="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-10.jpg" alt="" />
            </div>
        </div>

        <div>
            <div className="aspect-w-1 aspect-h-1">
                <img className="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-11.jpg" alt="" />
            </div>
        </div>

        <div>
            <div className="aspect-w-1 aspect-h-1">
                <img className="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-12.jpg" alt="" />
            </div>
        </div>

        <div>
            <div className="bg-blue-500 aspect-w-1 aspect-h-1">
                <div className="p-3 sm:p-5 xl:py-6 2xl:py-8 2xl:px-5">
                    <p className="text-sm font-semibold leading-tight text-white sm:text-lg sm:leading-tight">Bessie Cooper</p>
                    <p className="mt-2 text-sm text-white truncate">Nerosurgeon</p>
                </div>
            </div>
        </div>

        <div>
            <div className="aspect-w-1 aspect-h-1">
                <img className="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-13.jpg" alt="" />
            </div>
        </div>

        <div>
            <div className="aspect-w-1 aspect-h-1">
                <img className="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-14.jpg" alt="" />
            </div>
        </div>

        <div>
            <div className="aspect-w-1 aspect-h-1">
                <img className="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-15.jpg" alt="" />
            </div>
        </div>

        <div>
            <div className="aspect-w-1 aspect-h-1">
                <img className="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-16.jpg" alt="" />
            </div>
        </div>

        <div>
            <div className="bg-gray-700 aspect-w-1 aspect-h-1">
                <div className="p-3 sm:p-5 xl:py-6 2xl:py-8 2xl:px-5">
                    <p className="text-sm font-semibold leading-tight text-white sm:text-lg sm:leading-tight">Annette Black</p>
                    <p className="mt-2 text-sm text-white truncate">Optometrist</p>
                </div>
            </div>
        </div>

        <div>
            <div className="aspect-w-1 aspect-h-1">
                <img className="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-17.jpg" alt="" />
            </div>
        </div>

        <div>
            <div className="aspect-w-1 aspect-h-1">
                <img className="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-18.jpg" alt="" />
            </div>
        </div>

        <div>
            <div className="aspect-w-1 aspect-h-1">
                <img className="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-19.jpg" alt="" />
            </div>
        </div>

        <div>
            <div className="aspect-w-1 aspect-h-1">
                <img className="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-20.jpg" alt="" />
            </div>
        </div>

        <div>
            <div className="aspect-w-1 aspect-h-1">
                <img className="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-21.jpg" alt="" />
            </div>
        </div>

        <div>
            <div className="aspect-w-1 aspect-h-1">
                <img className="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-22.jpg" alt="" />
            </div>
        </div>

        <div>
            <div className="aspect-w-1 aspect-h-1">
                <img className="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-23.jpg" alt="" />
            </div>
        </div>

        <div>
            <div className="aspect-w-1 aspect-h-1">
                <img className="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-24.jpg" alt="" />
            </div>
        </div>

        <div>
            <div className="bg-green-400 aspect-w-1 aspect-h-1">
                <div className="p-3 sm:p-5 xl:py-6 2xl:py-8 2xl:px-5">
                    <p className="text-sm font-semibold leading-tight text-white sm:text-lg sm:leading-tight">Leslie Alexander</p>
                    <p className="mt-2 text-sm text-white truncate">Nurse</p>
                </div>
            </div>
        </div>

        <div>
            <div className="aspect-w-1 aspect-h-1">
                <img className="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-25.jpg" alt="" />
            </div>
        </div>

        <div>
            <div className="aspect-w-1 aspect-h-1">
                <img className="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-26.jpg" alt="" />
            </div>
        </div>

        <div>
            <div className="aspect-w-1 aspect-h-1">
                <img className="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-27.jpg" alt="" />
            </div>
        </div>

        <div>
            <div className="bg-red-500 aspect-w-1 aspect-h-1">
                <div className="p-3 sm:p-5 xl:py-6 2xl:py-8 2xl:px-5">
                    <p className="text-sm font-semibold leading-tight text-white sm:text-lg sm:leading-tight">Wade Warren</p>
                    <p className="mt-2 text-sm text-white truncate">Physician Assistant</p>
                </div>
            </div>
        </div>

        <div>
            <div className="aspect-w-1 aspect-h-1">
                <img className="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-28.jpg" alt="" />
            </div>
        </div>

        <div>
            <div className="aspect-w-1 aspect-h-1">
                <img className="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-29.jpg" alt="" />
            </div>
        </div>

        <div>
            <div className="bg-gray-800 aspect-w-1 aspect-h-1">
                <div className="p-3 sm:p-5 xl:py-6 2xl:py-8 2xl:px-5">
                    <p className="text-sm font-semibold leading-tight text-white sm:text-lg sm:leading-tight">Guy Hawkins</p>
                    <p className="mt-2 text-sm text-white truncate">Nurse</p>
                </div>
            </div>
        </div>

        <div>
            <div className="aspect-w-1 aspect-h-1">
                <img className="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-30.jpg" alt="" />
            </div>
        </div>

        <div>
            <div className="aspect-w-1 aspect-h-1">
                <img className="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-31.jpg" alt="" />
            </div>
        </div>

        <div>
            <div className="aspect-w-1 aspect-h-1">
                <img className="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-32.jpg" alt="" />
            </div>
        </div>

        <div>
            <div className="aspect-w-1 aspect-h-1">
                <img className="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-33.jpg" alt="" />
            </div>
        </div>

        <div>
            <div className="aspect-w-1 aspect-h-1">
                <img className="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-34.jpg" alt="" />
            </div>
        </div>

        <div>
            <div className="bg-indigo-500 aspect-w-1 aspect-h-1">
                <div className="p-3 sm:p-5 xl:py-6 2xl:py-8 2xl:px-5">
                    <p className="text-sm font-semibold leading-tight text-white sm:text-lg sm:leading-tight">Ralph Edwards</p>
                    <p className="mt-2 text-sm text-white truncate">Nurse</p>
                </div>
            </div>
        </div>

        <div>
            <div className="aspect-w-1 aspect-h-1">
                <img className="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-35.jpg" alt="" />
            </div>
        </div>

        <div>
            <div className="aspect-w-1 aspect-h-1">
                <img className="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-4.jpg" alt="" />
            </div>
        </div>

        <div>
            <div className="aspect-w-1 aspect-h-1">
                <img className="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-3.jpg" alt="" />
            </div>
        </div>
    </div>
</section>

    

 
    

        <section className="bg-blue-600 2xl:py-24 2xl:bg-white">
    <div className="px-4 mx-auto overflow-hidden bg-blue-600 max-w-7xl sm:px-6 lg:px-8">
        <div className="py-10 sm:py-16 lg:py-24 2xl:pl-24">
            <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20">
                <div>
                    <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">Download our App </h2>
                    <p className="mt-4 text-base text-gray-50">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                    <div className="flex flex-row items-center mt-8 space-x-4 lg:mt-12">
                        <a href="#" title="" className="flex" role="button">
                            <img className="w-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/btn-app-store.svg" alt="" />
                        </a>

                        <a href="#" title="" className="flex" role="button">
                            <img className="w-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/btn-play-store.svg" alt="" />
                        </a>
                    </div>
                </div>

                <div className="relative px-12">
                    <svg className="absolute inset-x-0 bottom-0 left-1/2 -translate-x-1/2 -mb-48 lg:-mb-72 text-yellow-300 w-[460px] h-[460px] sm:w-[600px] sm:h-[600px]" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                    </svg>
                    <img className="relative w-full max-w-xs mx-auto -mb-60 lg:-mb-64" src="/hero-img.png" alt="" />
                </div>
            </div>
        </div>
    </div>
</section>

<section className="py-10 bg-gray-900 sm:py-16 lg:py-24" id="faq">
    <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-4xl">Questions & Answers</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-300">Explore the common questions and answers about Celebration</p>
        </div>

        <div className="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
            <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                    <span className="text-lg font-semibold text-white">?</span>
                </div>
                <div className="ml-4">
                    <p className="text-xl font-semibold text-white">How to create an account?</p>
                    <p className="mt-4 text-base text-gray-400">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
            </div>

            <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                    <span className="text-lg font-semibold text-white">?</span>
                </div>
                <div className="ml-4">
                    <p className="text-xl font-semibold text-white">How can I make payment?</p>
                    <p className="mt-4 text-base text-gray-400">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
            </div>

            <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                    <span className="text-lg font-semibold text-white">?</span>
                </div>
                <div className="ml-4">
                    <p className="text-xl font-semibold text-white">Do you provide discounts?</p>
                    <p className="mt-4 text-base text-gray-400">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
            </div>

            <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                    <span className="text-lg font-semibold text-white">?</span>
                </div>
                <div className="ml-4">
                    <p className="text-xl font-semibold text-white">How do you provide support?</p>
                    <p className="mt-4 text-base text-gray-400">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-center mt-12 md:mt-20">
            <div className="px-8 py-4 text-center bg-gray-800 rounded-full">
                <p className="text-gray-50">Didn’t find the answer you are looking for? <a href="#" title="" className="text-yellow-300 transition-all duration-200 hover:text-yellow-400 focus:text-yellow-400 hover:underline">Contact our support</a></p>
            </div>
        </div>
    </div>
</section>


    
<section className="py-10 bg-white sm:pt-16 lg:pt-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-8 xl:gap-x-12">
            <div className="col-span-2 md:col-span-4 xl:pr-8">
                {/* <img className="w-auto h-9" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="" /> */}

                <p className="text-base leading-relaxed text-gray-600 mt-7">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>

                <a href="#" title="" className="inline-flex items-center justify-center px-6 py-4 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700 mt-7">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Start Live Chat
                </a>
            </div>

            <div className="lg:col-span-2">
                <p className="text-base font-semibold text-gray-900">ScopeHealth</p>

                <ul className="mt-6 space-y-5">
                    <li>
                        <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> About </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Features </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Works </a>
                    </li>

                    
                </ul>
            </div>

            <div className="lg:col-span-2">
                <p className="text-base font-semibold text-gray-900">Help</p>

                <ul className="mt-6 space-y-4">
                    <li>
                        <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Customer Support </a>
                    </li>

                  

                    <li>
                        <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Terms & Conditions </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Privacy Policy </a>
                    </li>
                </ul>
            </div>

           

            <div className="lg:col-span-2">
                <p className="text-base font-semibold text-gray-900">Extra Links</p>

                <ul className="mt-6 space-y-5">
                    <li>
                        <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Customer Support </a>
                    </li>

                  

                    <li>
                        <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Terms & Conditions </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Privacy Policy </a>
                    </li>
                </ul>
            </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <div className="sm:flex sm:items-center sm:justify-between">
            <p className="text-sm text-gray-600">© Copyright 2025, All Rights Reserved by ScopeTech</p>

            <ul className="flex items-center mt-5 space-x-3 md:order-3 sm:mt-0">
                <li>
                    <a
                        href="#"
                        title=""
                        className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white focus:text-white hover:bg-orange-600 hover:border-orange-600 focus:border-orange-600"
                    >
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                            ></path>
                        </svg>
                    </a>
                </li>

                <li>
                    <a
                        href="#"
                        title=""
                        className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white focus:text-white hover:bg-orange-600 hover:border-orange-600 focus:border-orange-600"
                    >
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                        </svg>
                    </a>
                </li>

                <li>
                    <a
                        href="#"
                        title=""
                        className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white focus:text-white hover:bg-orange-600 hover:border-orange-600 focus:border-orange-600"
                    >
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                            <circle cx="16.806" cy="7.207" r="1.078"></circle>
                            <path
                                d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"
                            ></path>
                        </svg>
                    </a>
                </li>

                <li>
                    <a
                        href="#"
                        title=""
                        className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white focus:text-white hover:bg-orange-600 hover:border-orange-600 focus:border-orange-600"
                    >
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                            ></path>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</section>

     

 </div>
  );
}
