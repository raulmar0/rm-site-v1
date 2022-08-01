import { AppConfig } from "../utils/AppConfig";
import { Navbar } from "./Navbar";
import { SocialIcons } from "./SocialList";


const Shell = (props) => (
  <div className="antialiased w-full text-gray-700 px-3 md:px-0">
    <div className="max-w-screen-md mx-auto">
      <div className="border-b border-gray-300">
        <div className="pt-16 pb-4">
          <div className="font-semibold text-3xl text-gray-900">
            {AppConfig.title}
          </div>
          <div className="text-xl">{AppConfig.description}</div>
        </div>
        <SocialIcons></SocialIcons>
        <div className="navbar-scroll">
          <Navbar location={props.location} >

          </Navbar>
          <style jsx>
            {`
              .navbar-scroll {
                overflow: auto;
              }
            `}
          </style>
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
  </div>
);

export { Shell };