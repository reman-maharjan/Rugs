import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Mock icons for social media (you can replace with actual icons from react-icons or lucide-react)
const FacebookIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348S9.746 16.988 8.449 16.988zM12.017 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348S13.314 16.988 12.017 16.988zM15.586 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348S16.883 16.988 15.586 16.988z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

const PinterestIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.719-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.739.099.120.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.544-1.378l-.701 2.684c-.24.943-.9 2.125-1.378 2.896 1.025.317 2.108.491 3.233.491C18.624 24.013 23.99 18.624 23.99 11.987 23.989 5.367 18.622.001 12.001.001z"/>
  </svg>
);

const StarIcon = ({ filled = true }) => (
  <svg className={`w-4 h-4 ${filled ? 'text-teal-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
  </svg>
);

export default function Footer1() {
  return (
    <footer className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-teal-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-2xl font-bold text-teal-800">Rugs.com</span>
            </div>
            
            <div className="space-y-2 text-sm text-gray-600">
              <Link href="/terms" className="text-blue-500 hover:underline">Terms of Use</Link>
              <span> | </span>
              <Link href="/privacy" className="text-blue-500 hover:underline">Privacy Policy</Link>
            </div>
            
            <p className="text-sm text-gray-600">© 2025 Rugs.com</p>
          </div>

          {/* First Column Links */}
          <div className="space-y-3">
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <Link href="/charlotte-fc" className="hover:text-teal-600 transition-colors">
                  Proud Partners of the Charlotte FC
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-teal-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/store-location" className="hover:text-teal-600 transition-colors">
                  Store Location
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="hover:text-teal-600 transition-colors">
                  Site Map
                </Link>
              </li>
              <li>
                <Link href="/affirm" className="hover:text-teal-600 transition-colors">
                  Affirm
                </Link>
              </li>
              <li>
                <Link href="/bestsellers" className="hover:text-teal-600 transition-colors">
                  Bestsellers
                </Link>
              </li>
              <li>
                <Link href="/trade-program" className="hover:text-teal-600 transition-colors">
                  Trade Program
                </Link>
              </li>
              <li>
                <Link href="/giveaway" className="hover:text-teal-600 transition-colors">
                  Enter Daily Giveaway
                </Link>
              </li>
            </ul>
          </div>

          {/* Second Column Links */}
          <div className="space-y-3">
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <Link href="/contact" className="hover:text-teal-600 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/order-status" className="hover:text-teal-600 transition-colors">
                  Order Status
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-teal-600 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-teal-600 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/rugs-101" className="hover:text-teal-600 transition-colors">
                  Rugs 101
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-teal-600 transition-colors">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="hover:text-teal-600 transition-colors">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media and Reviews */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Follow Us</h3>
              <div className="flex space-x-4 mb-4">
                <Link href="https://facebook.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <FacebookIcon />
                </Link>
                <Link href="https://instagram.com" className="text-gray-600 hover:text-pink-600 transition-colors">
                  <InstagramIcon />
                </Link>
                <Link href="https://tiktok.com" className="text-gray-600 hover:text-black transition-colors">
                  <TikTokIcon />
                </Link>
                <Link href="https://pinterest.com" className="text-gray-600 hover:text-red-600 transition-colors">
                  <PinterestIcon />
                </Link>
              </div>
              
              {/* App Store Badge */}
              <div className="mb-4">
                <Link href="#" className="inline-block">
                  <div className="bg-black text-white px-4 py-2 rounded-lg text-xs flex items-center space-x-2">
                    <span>📱</span>
                    <div>
                      <div className="text-xs">Download on the</div>
                      <div className="font-semibold">App Store</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Reviews Section */}
            <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
              <div className="flex justify-center space-x-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} filled={true} />
                ))}
              </div>
              <p className="text-center text-sm font-semibold text-gray-800">50,000+ REVIEWS!</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}