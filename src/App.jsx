import {
  ArrowRight,
  BarChart3,
  Brain,
  Building2,
  Check,
  ChevronRight,
  Code2,
  Github,
  Linkedin,
  Play,
  Puzzle,
  Twitter,
  User2
} from 'lucide-react';
import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">3rounds.ai</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How it Works</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="#about-us" className="text-gray-600 hover:text-gray-900">About Us</a>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Transform Technical Hiring with <br />
              <span className="text-indigo-600"> AI-Powered Assessments</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Evaluate coding skills, problem-solving, and technical expertise faster and smarter with 3rounds.ai.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition flex items-center justify-center">
                Start Free Trial
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition flex items-center justify-center">
                Watch Demo
                <Play className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-16">
            <center><img
              src="src/man-photo(1).jpeg"
              alt="Platform Interface"
              className="rounded-xl shadow-2xl"
              width={1400}
              height={10}
            />
            </center>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
            <p className="mt-4 text-gray-600">Everything you need to streamline your technical hiring process</p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Brain className="h-8 w-8 text-indigo-600" />,
                title: 'AI-Driven Evaluations',
                description: 'Automatically grade coding tests, detect plagiarism, and rank candidates.',
              },
              {
                icon: <Code2 className="h-8 w-8 text-indigo-600" />,
                title: 'Customizable Assessments',
                description: 'Tailor tests to your tech stack and role-specific needs.',
              },
              {
                icon: <BarChart3 className="h-8 w-8 text-indigo-600" />,
                title: 'Real-Time Analytics',
                description: 'Get instant reports on candidate performance and code quality.',
              },
              {
                icon: <Puzzle className="h-8 w-8 text-indigo-600" />,
                title: 'Seamless Integration',
                description: 'Sync with HR tools like LinkedIn, Greenhouse, or Slack.',
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="bg-indigo-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: '01',
                title: 'Create',
                description: 'Build assessments or choose from 100+ pre-built templates.',
              },
              {
                step: '02',
                title: 'Invite',
                description: 'Share via email or link; candidates complete tests in a proctored environment.',
              },
              {
                step: '03',
                title: 'Evaluate',
                description: 'AI generates scores, code-quality insights, and candidate rankings.',
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-indigo-600 text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < 2 && (
                  <ArrowRight className="hidden md:block absolute top-6 -right-6 text-indigo-600 h-6 w-6" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center mb-8">
                <Building2 className="h-8 w-8 mr-4" />
                <h3 className="text-2xl font-bold">For Companies</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Reduce hiring time by 75%',
                  'Eliminate bias in technical assessments',
                  'Access to top-tier talent pool',
                  'Comprehensive candidate insights',
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center mb-8">
                <User2 className="h-8 w-8 mr-4" />
                <h3 className="text-2xl font-bold">For Candidates</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Fair and transparent evaluation process',
                  'Developing your testing skills',
                  'Instant feedback on performance',
                  'Showcase real-world coding skills',
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Trusted by Industry Leaders</h2>
            <p className="mt-4 text-gray-600">Join 10,000+ companies already transforming their hiring process</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "3rounds.ai has cut our hiring time in half while improving the quality of our technical hires.",
                author: "Sarah Chen",
                role: "CTO, TechStart Inc.",
              },
              {
                quote: "The AI-powered insights have been game-changing for our recruitment process.",
                author: "Michael Rodriguez",
                role: "HR Director, DevCorp",
              },
              {
                quote: "Finally, a technical assessment platform that developers actually enjoy using.",
                author: "Emily Watson",
                role: "Engineering Manager, CloudScale",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Simple, Transparent Pricing</h2>
            <p className="mt-4 text-gray-600">14-Day Free Trial, No Credit Card Required</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: '$99',
                features: [
                  'Up to 50 assessments/month',
                  'Basic AI evaluation',
                  'Email support',
                  '5 team members',
                ],
              },
              {
                name: 'Professional',
                price: '$299',
                features: [
                  'Up to 200 assessments/month',
                  'Advanced AI insights',
                  'Priority support',
                  'Unlimited team members',
                ],
                popular: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                features: [
                  'Unlimited assessments',
                  'Custom AI models',
                  'Dedicated support',
                  'Custom integrations',
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-sm p-8 ${
                  plan.popular ? 'ring-2 ring-indigo-600 scale-105' : ''
                }`}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-gray-600">/month</span>}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-indigo-600 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-semibold ${
                    plan.popular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  } transition`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Revolutionize Your Hiring Process?
          </h2>
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold">
            Book a Demo →
          </button>
        </div>
      </section>

      {/* Footer */}
      
      <footer className="bg-gray-900 text-gray-400 py-12">
      <section id='about-us'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-white">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-white">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p>© 2025 3rounds.ai. All rights reserved.</p>
          </div>
        </div>
        </section>
      </footer>
    </div>
    
  );
}

export default App;