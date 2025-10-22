export const Footer = () => {
  return (
    <footer className="bg-black px-4 py-16 text-white md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Main Footer Content */}
        <div className="mb-12 flex flex-col items-start justify-around gap-8 md:flex-row">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600">
                <span className="text-lg font-semibold text-white">FB</span>
              </div>
              <h3 className="text-2xl font-semibold">Fiona Bari</h3>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-gray-300">
              Fiona Bari is a seasoned UX/UI designer who loves to create
              beautiful and functional digital experiences.
            </p>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-medium">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <img
                  className="h-4 w-4"
                  alt="Phone"
                  src="https://c.animaapp.com/mh0l998lUYJvdB/img/phone.svg"
                />
                <span className="text-sm">+1 (310) 528-6170</span>
              </div>
              <div className="flex items-center space-x-3">
                <img
                  className="h-4 w-4"
                  alt="Mail inbox app"
                  src="https://c.animaapp.com/mh0l998lUYJvdB/img/mail-inbox-app.svg"
                />
                <span className="text-sm">learnfiona@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <img
                  className="h-4 w-4"
                  alt="Location"
                  src="https://c.animaapp.com/mh0l998lUYJvdB/img/location.svg"
                />
                <span className="text-sm">Santa Clarita, CA 91351, USA</span>
              </div>
            </div>
          </div>

          {/* Additional Section - can be used for social links or other content */}
          <div className="space-y-4">
            {/* Placeholder for future content like social media links */}
          </div>
        </div>

        {/* Divider */}
        <div className="mb-8 border-t border-gray-800"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            © 2025 Fiona Bari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
