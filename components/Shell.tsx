import { AppConfig } from "../utils/AppConfig";
import { Navbar } from "./Navbar";
import { SocialIcons } from "./SocialList";


const Shell = (props) => (
  <div className="antialiased w-fit mx-auto text-gray-700 mt-12 md:px-0 main-card">
    <div className="max-w-screen-md px-6">
      <div className="border-b border-gray-300">
        <div className="pt-4 pb-4">
          <div className="font-semibold text-3xl text-gray-900">
            {AppConfig.title}
          </div>
          <div className="text-xl">{AppConfig.description}</div>
        </div>
        <SocialIcons></SocialIcons>
        <div className="navbar-scroll">
          <Navbar location={props.location} >

          </Navbar>
        </div>
      </div>

      <div className="text-xl py-5">{props.children}</div>

      <footer className="border-t border-gray-300 text-center py-8 text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Powered with{' '}
        <span role="img" aria-label="Love">
          ♥
        </span>{' '}
        by raulmar with inspo from <a href="https://creativedesignsguru.com">CDG</a>
      </footer>
    </div>
    <style jsx>
      {`
        .navbar-scroll {
          overflow: auto;
        }
        .main-card {
          animation: fade 0.5s linear forwards;
          opacity: 0;

          /* From https://css.glass */
          background: rgba(255, 255, 255, 0);
          border-radius: 16px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(1.7px);
          -webkit-backdrop-filter: blur(1.7px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        @keyframes fade {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        
      `}
    </style>
  </div>
);

export { Shell };