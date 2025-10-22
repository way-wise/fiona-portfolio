import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-950 px-4 py-16 text-white md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-600 shadow-lg">
                <span className="text-lg font-bold text-white">FB</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Fiona Bari</h3>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-slate-300">
              Fiona Bari is a seasoned UX/UI designer who loves to create
              beautiful and functional digital experiences.
            </p>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:+13105286170"
                className="flex items-center space-x-3 text-sm text-slate-300 transition-colors hover:text-white"
                aria-label="Call Fiona Bari"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+1 (310) 528-6170</span>
              </a>
              <a
                href="mailto:learnfiona@gmail.com"
                className="flex items-center space-x-3 text-sm text-slate-300 transition-colors hover:text-white"
                aria-label="Email Fiona Bari"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>learnfiona@gmail.com</span>
              </a>
              <div className="flex items-center space-x-3 text-sm text-slate-300">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Santa Clarita, CA 91351, USA</span>
              </div>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Follow Me</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
                aria-label="Follow on GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
                aria-label="Follow on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
                aria-label="Follow on Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-8 border-t border-slate-800"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Fiona Bari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
