import React from 'react';
import './styles.css';


const Header = () => {
  return (
    <header>
      <div id="git-header">
        <span>
          <img id="git-logo"
            src="https://res.cloudinary.com/jvfaria015/image/upload/v1597161790/Union_ou317f.svg"
            alt="github-mini-logo" />
        </span>

        <img id="github-line"
          src="https://res.cloudinary.com/jvfaria015/image/upload/v1597151996/github_explorer_o9b13r.svg"
          alt="github-line" />
      </div>


      <img id="main-background"
        src="https://res.cloudinary.com/jvfaria015/image/upload/v1597151976/githubVector_fsbppf.svg"
        alt="github-background" />
    </header>
  )
}

export default Header;
