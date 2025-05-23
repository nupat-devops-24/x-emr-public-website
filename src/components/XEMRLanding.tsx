'use client'

import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight, Play, Users, Shield, Activity, FileText, Clock, Database } from 'lucide-react';

export default function XEMRLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Digital Records",
      description: "Comprehensive electronic medical records with intelligent organization"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "HIPAA Compliant",
      description: "Enterprise-grade security ensuring patient data protection"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Real-time Analytics",
      description: "Advanced healthcare analytics and reporting dashboards"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Efficient Workflow",
      description: "Streamlined processes that save time and reduce errors"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Seamless communication between healthcare providers"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Integration",
      description: "Connect with existing systems and medical devices"
    }
  ];

  const stats = [
    { number: "50K+", label: "Healthcare Providers" },
    { number: "99.9%", label: "Uptime" },
    { number: "2M+", label: "Patient Records" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-teal-500/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-green-600 rounded-lg flex items-center justify-center">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              X-EMR
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="hover:text-emerald-300 transition-colors">Features</a>
            <a href="#solutions" className="hover:text-emerald-300 transition-colors">Solutions</a>
            <a href="#pricing" className="hover:text-emerald-300 transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-emerald-300 transition-colors">Contact</a>
            <button className="px-4 py-2 text-emerald-300 hover:text-white transition-colors">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-emerald-600 to-green-600 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-t border-slate-700">
            <div className="px-6 py-4 space-y-4">
              <a href="#features" className="block hover:text-emerald-300 transition-colors">Features</a>
              <a href="#solutions" className="block hover:text-emerald-300 transition-colors">Solutions</a>
              <a href="#pricing" className="block hover:text-emerald-300 transition-colors">Pricing</a>
              <a href="#contact" className="block hover:text-emerald-300 transition-colors">Contact</a>
              <button className="w-full text-emerald-300 hover:text-white transition-colors py-2 text-left">
                Sign In
              </button>
              <button className="w-full bg-gradient-to-r from-emerald-600 to-green-600 px-6 py-2 rounded-full">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-600/20 to-green-600/20 rounded-full border border-emerald-500/30 mb-8">
              <Shield className="w-4 h-4 mr-2 text-emerald-400" />
              <span className="text-sm">HIPAA Compliant & Secure</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-green-200 bg-clip-text text-transparent leading-tight">
              Modern Healthcare
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                Records Management
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Streamline your practice with X-EMR&apos;s comprehensive electronic medical records system. 
              Enhance patient care, improve efficiency, and ensure compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="group bg-gradient-to-r from-emerald-600 to-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group flex items-center justify-center px-8 py-4 rounded-full border border-slate-600 hover:border-emerald-500 transition-all duration-300 text-lg">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Comprehensive EMR Features
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Everything your healthcare practice needs in one integrated platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-emerald-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Why Choose X-EMR?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Reduce Administrative Burden</h3>
                    <p className="text-slate-400">Automate routine tasks and focus more on patient care</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Improve Patient Outcomes</h3>
                    <p className="text-slate-400">Access comprehensive patient history instantly</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Ensure Compliance</h3>
                    <p className="text-slate-400">Built-in HIPAA compliance and audit trails</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-900/30 to-green-900/30 backdrop-blur-sm p-8 rounded-3xl border border-emerald-700/30">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Practice?</h3>
                <p className="text-slate-300 mb-6">Join thousands of healthcare providers using X-EMR</p>
                <button className="bg-gradient-to-r from-emerald-600 to-green-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-emerald-900/50 to-green-900/50 backdrop-blur-sm p-12 rounded-3xl border border-slate-700/50">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Start Your Digital Transformation
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Experience the future of healthcare records management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-600 to-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105">
                Sign Up Now
              </button>
              <button className="px-8 py-4 rounded-full border border-slate-600 hover:border-emerald-500 transition-all duration-300 text-lg">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-slate-400" />
      </div>
    </div>
  );
}