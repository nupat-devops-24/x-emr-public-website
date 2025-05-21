const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-500 text-white py-10 mt-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p>EMR Radiology leverages AI to empower healthcare professionals with faster, more accurate diagnostic tools.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-teal-200">Home</a></li>
            <li><a href="#about" className="hover:text-teal-200">About</a></li>
            <li><a href="#pricing" className="hover:text-teal-200">Pricing</a></li>
            <li><a href="#case-studies" className="hover:text-teal-200">Case Studies</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Info</h3>
          <p>Email: support@emrradiology.com</p>
          <p>Phone: +1-800-555-1234</p>
          <p>Address: 123 Health St, MedCity, USA</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-teal-200">Twitter</a>
            <a href="#" className="hover:text-teal-200">LinkedIn</a>
            <a href="#" className="hover:text-teal-200">Facebook</a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-sm">"Seeing Beyond the Scan – Precision in Every Pixel."</p>
        <p className="text-sm mt-2">© 2025 EMR Radiology. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;