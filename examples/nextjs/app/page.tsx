iimport React, { useState, useEffect } from 'react';
import { DollarSign, TrendingDown, Zap, ChevronRight, Menu, X, Check, CheckCircle } from 'lucide-react';

export default function CreditCardProcessing() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    volume: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.phone && formData.business && formData.volume) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', email: '', phone: '', business: '', volume: '' });
      }, 4000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-semibold tracking-tight">ZeroPay</div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => setCurrentView('solutions')} 
                className={`text-sm hover:text-gray-600 transition-colors ${currentView === 'solutions' ? 'font-semibold' : ''}`}
              >
                Solutions
              </button>
              <button 
                onClick={() => setCurrentView('integrations')} 
                className={`text-sm hover:text-gray-600 transition-colors ${currentView === 'integrations' ? 'font-semibold' : ''}`}
              >
                Integrations
              </button>
              <a href="#benefits" onClick={() => setCurrentView('home')} className="text-sm hover:text-gray-600 transition-colors">Benefits</a>
              <a href="#savings" onClick={() => setCurrentView('home')} className="text-sm hover:text-gray-600 transition-colors">Savings</a>
              <a href="#contact" onClick={() => setCurrentView('home')} className="text-sm hover:text-gray-600 transition-colors">Contact</a>
              <a href="#contact" onClick={() => setCurrentView('home')} className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-all">
                Get Started
              </a>
            </div>

            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-6 py-4 space-y-4">
              <button 
                onClick={() => { setCurrentView('solutions'); setMobileMenuOpen(false); }} 
                className="block text-sm hover:text-gray-600 text-left w-full"
              >
                Solutions
              </button>
              <a href="#benefits" onClick={() => { setCurrentView('home'); setMobileMenuOpen(false); }} className="block text-sm hover:text-gray-600">Benefits</a>
              <a href="#savings" onClick={() => { setCurrentView('home'); setMobileMenuOpen(false); }} className="block text-sm hover:text-gray-600">Savings</a>
              <a href="#contact" onClick={() => { setCurrentView('home'); setMobileMenuOpen(false); }} className="block text-sm hover:text-gray-600">Contact</a>
              <a href="#contact" onClick={() => { setCurrentView('home'); setMobileMenuOpen(false); }} className="block w-full bg-black text-white px-6 py-2 rounded-full text-sm font-medium text-center">
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Solutions Page */}
      {currentView === 'solutions' ? (
        <div className="min-h-screen">
          {/* Solutions Hero */}
          <section className="pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-6xl md:text-7xl font-semibold tracking-tight mb-6 leading-tight">
                Payment solutions<br />for every business.
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                From mobile card readers to complete POS systems, we have the perfect 
                hardware and software to power your business.
              </p>
            </div>
          </section>

          {/* Solutions Grid */}
          <section className="py-16 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
              <SolutionDetailCard
                title="Countertop Terminals"
                description="The perfect solution for retail stores and restaurants. Our countertop terminals combine reliability with cutting-edge technology to process payments quickly and securely."
                features={[
                  "Built-in receipt printer",
                  "EMV chip certified",
                  "Apple Pay & Google Pay ready",
                  "4G/WiFi connectivity",
                  "Color touchscreen display",
                  "Encrypted card data"
                ]}
                idealFor="Retail stores, restaurants, salons"
              />
              
              <SolutionDetailCard
                title="Mobile Card Readers"
                description="Accept payments wherever your business takes you. Lightweight, portable readers that connect to your phone or tablet for ultimate flexibility."
                features={[
                  "Bluetooth 5.0 enabled",
                  "All-day battery life",
                  "Fits in your pocket",
                  "iOS & Android compatible",
                  "Instant payment confirmation",
                  "Offline transaction mode"
                ]}
                idealFor="Food trucks, delivery services, trade shows"
              />
              
              <SolutionDetailCard
                title="Point of Sale Systems"
                description="Transform how you do business with our integrated POS systems. Manage inventory, track employees, analyze sales, and process payments—all from one elegant interface."
                features={[
                  "Cloud-based reporting",
                  "Real-time inventory management",
                  "Employee time tracking",
                  "Customer loyalty programs",
                  "Multi-location support",
                  "Advanced analytics dashboard"
                ]}
                idealFor="Multi-location businesses, franchises"
              />
              
              <SolutionDetailCard
                title="Smart PIN Pads"
                description="Enterprise-grade security in a compact device. Our PIN pads integrate seamlessly with your existing systems while providing the highest level of payment security."
                features={[
                  "PCI PTS 5.x certified",
                  "End-to-end encryption",
                  "Contactless & chip ready",
                  "Easy integration",
                  "Tamper-resistant design",
                  "Multi-language support"
                ]}
                idealFor="High-volume retail, supermarkets"
              />
              
              <SolutionDetailCard
                title="Virtual Terminals"
                description="Process payments from anywhere with an internet connection. Perfect for phone orders, mail orders, or recurring billing without any physical hardware."
                features={[
                  "Access from any browser",
                  "Recurring billing engine",
                  "Professional invoice generation",
                  "Multi-user access control",
                  "Payment link creation",
                  "Transaction reporting"
                ]}
                idealFor="Service businesses, B2B companies"
              />
              
              <SolutionDetailCard
                title="E-commerce Solutions"
                description="Powerful payment gateway integration for your online store. Provide customers with a fast, secure checkout experience that builds trust and increases conversions."
                features={[
                  "One-click checkout",
                  "Mobile optimized",
                  "Advanced fraud protection",
                  "Shopping cart integration",
                  "Subscription management",
                  "Global currency support"
                ]}
                idealFor="Online stores, digital products, subscriptions"
              />
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 px-6 bg-black text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl font-semibold mb-6 tracking-tight">
                Not sure which solution fits?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Our payment specialists will help you find the perfect setup for your business.
              </p>
              <button 
                onClick={() => { setCurrentView('home'); setTimeout(() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }, 100); }}
                className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all"
              >
                Get Expert Guidance
              </button>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-12 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                <div>
                  <h3 className="font-semibold mb-4">Solutions</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li><a href="#" className="hover:text-gray-900">Retail</a></li>
                    <li><a href="#" className="hover:text-gray-900">Restaurants</a></li>
                    <li><a href="#" className="hover:text-gray-900">E-commerce</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Company</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li><a href="#" className="hover:text-gray-900">About</a></li>
                    <li><a href="#" className="hover:text-gray-900">Careers</a></li>
                    <li><a href="#" className="hover:text-gray-900">Press</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Resources</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li><a href="#" className="hover:text-gray-900">Help Center</a></li>
                    <li><a href="#" className="hover:text-gray-900">Case Studies</a></li>
                    <li><a href="#" className="hover:text-gray-900">Blog</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Legal</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li><a href="#" className="hover:text-gray-900">Privacy</a></li>
                    <li><a href="#" className="hover:text-gray-900">Terms</a></li>
                    <li><a href="#" className="hover:text-gray-900">Compliance</a></li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-300 pt-8 text-center text-sm text-gray-600">
                © 2025 ZeroPay. All rights reserved.
              </div>
            </div>
          </footer>
        </div>
      ) : (
        <>
          {/* Home Page Content */}

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tight mb-6 leading-tight">
            Zero cost.<br />Maximum profit.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Stop paying for credit card processing. Our zero-cost program eliminates processing fees 
            and puts money back into your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-all flex items-center justify-center group">
              Calculate your savings
              <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#savings" className="border-2 border-black text-black px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-all">
              Learn how it works
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="text-5xl font-semibold mb-2">$0</div>
            <div className="text-gray-600">Processing fees to you</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-semibold mb-2">100%</div>
            <div className="text-gray-600">Compliant and transparent</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-semibold mb-2">24/7</div>
            <div className="text-gray-600">Support when you need it</div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-semibold text-center mb-16 tracking-tight">
            Keep every dollar you earn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard
              icon={<DollarSign size={32} />}
              title="Eliminate Processing Fees"
              description="Say goodbye to 2-4% processing fees eating into your revenue. Our zero-cost program means customers cover the processing cost, not you."
              savings="Average savings: $3,000-$15,000/year"
            />
            <BenefitCard
              icon={<TrendingDown size={32} />}
              title="Reduce Operating Costs"
              description="Lower your overhead and increase your bottom line. Redirect processing fees straight to your profit margin or reinvest in growth."
              savings="Typical cost reduction: 2.5-3.5%"
            />
            <BenefitCard
              icon={<Zap size={32} />}
              title="Instant Cash Flow Impact"
              description="See immediate results from day one. No waiting, no complex calculations—just instant savings on every card transaction you process."
              savings="ROI visible in first month"
            />
          </div>
        </div>
      </section>

      {/* Savings Calculator Section */}
      <section id="savings" className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-semibold mb-6 tracking-tight">
            See your potential savings
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Most businesses save thousands annually by switching to zero-cost processing
          </p>
          
          <div className="bg-white rounded-3xl p-12 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="text-left">
                <div className="text-sm text-gray-600 mb-2">Monthly Card Sales</div>
                <div className="text-4xl font-semibold">$50,000</div>
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-600 mb-2">Average Processing Rate</div>
                <div className="text-4xl font-semibold">2.9%</div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600">Current Monthly Cost</span>
                <span className="text-2xl font-semibold text-red-600">-$1,450</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600">With ZeroPay</span>
                <span className="text-2xl font-semibold text-green-600">$0</span>
              </div>
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Annual Savings</span>
                  <span className="text-4xl font-bold text-green-600">$17,400</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-semibold text-center mb-16 tracking-tight">
            Simple. Transparent. Compliant.
          </h2>
          <div className="space-y-6">
            <Step 
              number="1"
              title="Customer chooses payment method"
              description="At checkout, customers see two clear options: pay with cash or card"
            />
            <Step 
              number="2"
              title="Small convenience fee for card payments"
              description="Card payments include a small service fee that covers processing costs"
            />
            <Step 
              number="3"
              title="You keep 100% of your sale"
              description="No deductions, no hidden fees. Every dollar of your sale goes directly to you"
            />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 px-6 bg-black text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl font-semibold mb-6 tracking-tight text-center">
            Start saving today
          </h2>
          <p className="text-xl text-gray-400 mb-12 text-center">
            Speak with a payment specialist to learn how much you could save
          </p>
          
          {formSubmitted ? (
            <div className="bg-green-600 rounded-3xl p-12 text-center">
              <Check size={48} className="mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Thank you!</h3>
              <p className="text-gray-100">A payment specialist will contact you within 24 hours to discuss your savings.</p>
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-12 text-gray-900">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition-all"
                    placeholder="John Smith"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Business Name *</label>
                  <input
                    type="text"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition-all"
                    placeholder="Your Business LLC"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition-all"
                      placeholder="john@business.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Monthly Card Volume *</label>
                  <select
                    name="volume"
                    value={formData.volume}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition-all bg-white"
                  >
                    <option value="">Select range</option>
                    <option value="0-10k">$0 - $10,000</option>
                    <option value="10k-50k">$10,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-500k">$100,000 - $500,000</option>
                    <option value="500k+">$500,000+</option>
                  </select>
                </div>
                
                <button
                  onClick={handleSubmit}
                  className="w-full bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all text-lg"
                >
                  Get My Free Savings Analysis
                </button>
                
                <p className="text-sm text-gray-500 text-center">
                  No obligation. No credit card required. Response within 24 hours.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Retail</a></li>
                <li><a href="#" className="hover:text-gray-900">Restaurants</a></li>
                <li><a href="#" className="hover:text-gray-900">E-commerce</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">About</a></li>
                <li><a href="#" className="hover:text-gray-900">Careers</a></li>
                <li><a href="#" className="hover:text-gray-900">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Help Center</a></li>
                <li><a href="#" className="hover:text-gray-900">Case Studies</a></li>
                <li><a href="#" className="hover:text-gray-900">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Privacy</a></li>
                <li><a href="#" className="hover:text-gray-900">Terms</a></li>
                <li><a href="#" className="hover:text-gray-900">Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-300 pt-8 text-center text-sm text-gray-600">
            © 2025 ZeroPay. All rights reserved.
          </div>
        </div>
      </footer>
        </>
      )}
    </div>
  );
}

function BenefitCard({ icon, title, description, savings }) {
  return (
    <div className="group hover:scale-105 transition-transform duration-300">
      <div className="bg-gray-50 rounded-3xl p-8 h-full hover:bg-gray-100 transition-colors">
        <div className="mb-4 text-gray-900">{icon}</div>
        <h3 className="text-2xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
        <div className="text-sm font-medium text-green-600">{savings}</div>
      </div>
    </div>
  );
}

function Step({ number, title, description }) {
  return (
    <div className="flex gap-6 items-start">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-semibold text-lg">
        {number}
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function SolutionCard({ title, description, features }) {
  return (
    <div className="group hover:scale-105 transition-transform duration-300">
      <div className="bg-gray-50 rounded-2xl p-6 h-full hover:bg-gray-100 transition-colors">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
              <CheckCircle size={16} className="flex-shrink-0 mt-0.5 text-green-600" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SolutionDetailCard({ title, description, features, idealFor }) {
  return (
    <div className="group">
      <div className="bg-gray-50 rounded-3xl p-10 h-full hover:bg-gray-100 transition-all duration-300 hover:shadow-lg">
        <h3 className="text-3xl font-semibold mb-4 tracking-tight">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
        
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features</h4>
          <ul className="space-y-2.5">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-700">
                <CheckCircle size={18} className="flex-shrink-0 mt-0.5 text-green-600" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            <span className="font-medium text-gray-900">Ideal for:</span> {idealFor}
          </p>
        </div>
      </div>
    </div>
  );
}
