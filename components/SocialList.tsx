/* eslint-disable react/jsx-no-target-blank */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import {
  faAt,
} from "@fortawesome/free-solid-svg-icons";

import { AppConfig } from "../utils/AppConfig";

const SocialIcons = () => (
  <>
    <div className="px-4 py-3 rounded max-w-fit bg-indigo-200">
      <a
        title="Linkedin"
        href={`https://linkedin.com/in/${AppConfig.linkedin_account}`}
        target="_blank"
        rel="noopener"
      >
        <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: 20, color: "indigo" }}/>
      </a>
      <a
        title="GitHub"
        href={`https://github.com/${AppConfig.github_account}`}
        target="_blank"
        rel="noopener"
      >
        <FontAwesomeIcon icon={faGithub} style={{ fontSize: 20, color: "indigo" }}/>        
      </a>
      <a
        title="Mail"
        href={`mailto:${AppConfig.email}`}
        target="_blank"
        rel="noopener"
      >
        <FontAwesomeIcon icon={faAt} style={{ fontSize: 20, color: "indigo" }}/>        
      </a>
      <style jsx>{`
        a {
          display: inline-block;
        }
        a:not(:last-child) {
          margin-right: 2em;
        }
      `}</style>
    </div>
  </>
);

export { SocialIcons };