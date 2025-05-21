// import React from 'react';

// const MainContent: React.FC = () => {
//   return (
//     <main className="flex-1">
//       {/* Hero Section */}
//       <section className="bg-gray-100 py-20">
//         <div className="container mx-auto flex flex-col md:flex-row items-center">
//           <div className="md:w-1/2 text-center md:text-left">
//             <h1 className="text-4xl font-bold text-emerald-600 mb-4">Revolutionizing Radiology with EMR</h1>
//             <p className="text-lg mb-6">Advanced AI-powered solutions for faster, more accurate diagnoses.</p>
//             <a href="#signup" className="bg-teal-500 text-white px-6 py-3 rounded hover:bg-teal-600">Get Started</a>
//           </div>
//           <div className="md:w-1/2 mt-6 md:mt-0">
//             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/X-ray_of_normal_hand_by_dorsoplantar_projection.jpg/320px-X-ray_of_normal_hand_by_dorsoplantar_projection.jpg" alt="X-ray of a hand" className="rounded-lg shadow-md" />
//           </div>
//         </div>
//       </section>

//       {/* Infographic Section */}
//       <section className="bg-white py-16">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold text-emerald-600 mb-10">Our Impact in Radiology</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="p-6">
//               <h3 className="text-4xl font-bold text-teal-500">1M+</h3>
//               <p className="text-lg mt-2">Scans Analyzed</p>
//             </div>
//             <div className="p-6">
//               <h3 className="text-4xl font-bold text-teal-500">98%</h3>
//               <p className="text-lg mt-2">Diagnostic Accuracy</p>
//             </div>
//             <div className="p-6">
//               <h3 className="text-4xl font-bold text-teal-500">50%</h3>
//               <p className="text-lg mt-2">Time Saved per Diagnosis</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default MainContent;


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