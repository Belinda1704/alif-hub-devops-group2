const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-blue-50 to-white shadow-md border-t border-gray-200 mt-20 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16 md:h-20 py-4">
          <p className="text-gray-700 text-sm md:text-base text-center font-medium">
            © {currentYear} Alif Mentorship Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;