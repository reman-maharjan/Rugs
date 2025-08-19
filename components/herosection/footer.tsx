import React from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export default function Footer() {
  const features = [
    {
      icon: "📞",
      title: "24/7 Customer Service",
      description: "Trouble with your order? Drop us a line by phone any time, day or night!"
    },
    {
      icon: "📦",
      title: "Fast & Free Shipping",
      description: "Over 4 million rugs in stock. All rugs ship within one business day!"
    },
    {
      icon: "🚚",
      title: "Free Returns",
      description: "New rug not working out? Send it back for no charge within 30 days."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 py-16">
      {/* Newsletter Signup Section */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <div 
          className="flex flex-col lg:flex-row items-center justify-between p-8 rounded-3xl shadow-2xl"
          style={{ backgroundColor: '#6A5ACD' }}
        >
          <div className="text-white mb-8 lg:mb-0 lg:mr-8 flex-1">
            <h1 className="text-4xl font-bold mb-4">Be First To Know</h1>
            <h2 className="text-2xl mb-4">Get access to exclusive sales, new arrivals, and save up to 80% Off Retail.</h2>
          </div>

          <div className="flex-1 max-w-md">
            <div className="flex gap-2 mb-4">
              <Input 
                placeholder="Email Address" 
                className="flex-1 bg-white text-gray-800"
              />
              <Button className="font-bold text-lg bg-white text-purple-600 hover:bg-gray-100">
                Join Now
              </Button>
            </div>
            <p className="text-white text-sm opacity-90 leading-relaxed">
              You will receive offers from us in accordance with our Privacy Policy. 
              By continuing, you acknowledge and agree to our Privacy Policy and Terms of Service
            </p>
          </div>
        </div>
      </div>

      {/* Customer Service Features Section */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-16 shadow-2xl border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden group"
              >
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon container */}
                <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-cyan-200 to-pink-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                
                {/* Title */}
                <h3 className="relative z-10 text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="relative z-10 text-gray-600 text-base leading-relaxed max-w-xs mx-auto">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}