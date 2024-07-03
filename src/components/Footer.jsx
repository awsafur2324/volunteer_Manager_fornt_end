const Footer_Section = () => {
  return (
    <div className="z-50">
      <footer className="px-4 py-12 mx-auto max-w-7xl ">
        <div className="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-12 lg:gap-20">
          <div className="col-span-3">
            <a href="/" title="Go to volunteer.com Home Page" className="font-banner1 text-error font-semibold text-2xl font-">
              Volunteer.com
            </a>
            <p className="my-4 text-xs leading-normal text-gray-500">
              Bring together your discussions, memberships, and content.
              Integrate a thriving community wherever your audience is, all
              under your own brand.
            </p>
          </div>
          <nav className="col-span-1 md:col-span-1 lg:col-span-2">
            <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
              Product
            </p>
            <a
              href="#howWeWork"
              className="flex mb-3 text-sm font-medium transition-all duration-300 ease-in-out text-gray-800 dark:text-gray-500 md:mb-2 hover:text-primary hover:ml-1"
            >
              Features
            </a>
            <a
              href="#"
              className="flex mb-3 text-sm font-medium transition-all duration-300 ease-in-out text-gray-800 dark:text-gray-500 md:mb-2 hover:text-primary hover:ml-1"
            >
              Integrations
            </a>
            <a
              href="#"
              className="flex mb-3 text-sm font-medium transition-all duration-300 ease-in-out text-gray-800 dark:text-gray-500 md:mb-2 hover:text-primary hover:ml-1"
            >
              Documentation
            </a>
            <a
              href="#"
              className="flex mb-3 text-sm font-medium transition-all duration-300 ease-in-out text-gray-800 dark:text-gray-500 md:mb-2 hover:text-primary hover:ml-1"
            >
              FAQs
            </a>
            <a
              href="#"
              className="flex mb-3 text-sm font-medium transition-all duration-300 ease-in-out text-gray-800 dark:text-gray-500 md:mb-2 hover:text-primary hover:ml-1"
            >
              Pricing
            </a>
          </nav>
          <nav className="col-span-1 md:col-span-1 lg:col-span-2">
            <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
              About
            </p>
            <a
              href="#"
              className="flex mb-3 text-sm font-medium transition-all duration-300 ease-in-out text-gray-800 dark:text-gray-500 md:mb-2 hover:text-primary hover:ml-1"
            >
              Press-Kit
            </a>
            <a
              href="#"
              className="flex mb-3 text-sm font-medium transition-all duration-300 ease-in-out text-gray-800 dark:text-gray-500 md:mb-2 hover:text-primary hover:ml-1"
            >
              Company
            </a>
            <a
              href="#"
              className="flex mb-3 text-sm font-medium transition-all duration-300 ease-in-out text-gray-800 dark:text-gray-500 md:mb-2 hover:text-primary hover:ml-1"
            >
              Privacy
            </a>
            <a
              href="#"
              className="flex mb-3 text-sm font-medium transition-all duration-300 ease-in-out text-gray-800 dark:text-gray-500 md:mb-2 hover:text-primary hover:ml-1"
            >
              Blog
            </a>
          </nav>
          <nav className="col-span-2 md:col-span-1 lg:col-span-2">
            <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
              Contact
            </p>
            <a
              href="#"
              className="flex mb-3 text-sm font-medium transition-all duration-300 ease-in-out text-gray-800 dark:text-gray-500 md:mb-2 hover:text-primary hover:ml-1"
            >
              Twitter
            </a>
            <a
              href="#"
              className="flex mb-3 text-sm font-medium transition-all duration-300 ease-in-out text-gray-800 dark:text-gray-500 md:mb-2 hover:text-primary hover:ml-1"
            >
              Instagram
            </a>
            <a
              href="#"
              className="flex mb-3 text-sm font-medium transition-all duration-300 ease-in-out text-gray-800 dark:text-gray-500 md:mb-2 hover:text-primary hover:ml-1"
            >
              Email
            </a>
            <a
              href="#"
              className="flex mb-3 text-sm font-medium transition-all duration-300 ease-in-out text-gray-800 dark:text-gray-500 md:mb-2 hover:text-primary hover:ml-1"
            >
              Advertising
            </a>
            <a
              href="#"
              className="flex mb-3 text-sm font-medium transition-all duration-300 ease-in-out text-gray-800 dark:text-gray-500 md:mb-2 hover:text-primary hover:ml-1"
            >
              Chat
            </a>
          </nav>
          <div className="col-span-3">
            <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
              SUBSCRIBE TO OUR NEWSLETTER
            </p>
            <form action="#" className="mb-2">
              <div className="form-append flex flex-col gap-1">
                <input
                  className="form-input form-input-sm"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className="p-2 bg-red-700 text-white font-display2 w-fit" type="submit">
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-xs leading-normal text-gray-500">
              Get lessons and insights on how to grow your freelance business.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-100 md:flex-row md:items-center">
          <p className="mb-6 text-sm text-left text-gray-600 md:mb-0">
            © Copyright 2024 Volunteer. All Rights Reserved.
          </p>
          <div className="flex items-start justify-start space-x-6 md:items-center md:justify-center">
            <a
              href="#"
              className="text-sm text-gray-600 transition hover:text-primary"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-sm text-gray-600 transition hover:text-primary"
            >
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer_Section;
