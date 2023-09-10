import React from 'react';
import Clock from './Clock';

function Footer() {
  return (
    <div className="container-fluid p-4">
      <footer>
        <section className="section">
          <div className="row justify-content-center">
            <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
              <div className="bg-image hover-overlay ripple shadow-1-strong rounded" data-ripple-color="light">
                <img
                  src="https://scontent.fvns1-2.fna.fbcdn.net/v/t39.30808-6/301776926_413804394180184_6443925508776570264_n.png?_nc_cat=108&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=y4OqaAe3K-cAX9DWKrG&_nc_ht=scontent.fvns1-2.fna&oh=00_AfBKCZAIuYSfRcPq5ZYe9shIjN63iXcypbLBYWREh4KclA&oe=65001B40"
                  className="w-100"
                  alt="Footer Image"
                />
                <h3 className="footercontent">Made with ♡</h3>
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Section: Images */}
        
        {/* Grid container */}
        {/* Copyright */}
        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          <a className="text-white" href="https://mdbootstrap.com/">
            <Clock />
          </a>
        </div>
        {/* Copyright */}
      </footer>
    </div>
  );
}

export default Footer;

