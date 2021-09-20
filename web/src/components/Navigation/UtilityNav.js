import React from "react";

const UtilityNav = () => {
  return (
    <div id="utlity-navigation" className="bg-gray-900 py-1.5 hidden md:block">
      <div className="container">
        <div className="flex justify-between items-center text-sm text-white">
          <div>
            <i class="fas fa-phone-alt mr-1"></i>
            <a
              href="tel:952-944-9000"
              className="text-white hover:text-primary-400"
            >
              (952) 944-9000
            </a>
          </div>
          <div className="flex space-x-8">
            <div>
              <i class="fas fa-user mr-1"></i>
              <a
                href="https://www.blink.mortgage/app/login/partner/IBQG6T1S"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary-400"
              >
                Log In
              </a>
            </div>

            <div>
              <i class="fas fa-edit mr-1"></i>
              <a
                href="https://www.blink.mortgage/app/signup/p/thistlefinancialllc/markthistle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary-400"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UtilityNav;
