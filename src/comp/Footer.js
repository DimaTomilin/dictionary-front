import React, { useContext } from 'react';
import '../styles/footer.scss';
import { BsTwitter, BsGithub, BsFacebook, BsInstagram } from 'react-icons/bs';
import { ThemeContext } from '../context/ThemeContext';

export default function Footer() {
  const marginBottom = { marginBottom: '10px' };
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className={`footer-basic ${darkMode ? 'darkmode' : 'lightmode'}`}>
      <footer>
        <div className="social">
          <a href="https://www.instagram.com/tomilin.dimon/" target="blank">
            <BsInstagram style={marginBottom} />
          </a>
          <a href="https://github.com/DimaTomilin" target="blank">
            <BsGithub style={marginBottom} />
          </a>
          <a href="https://twitter.com/TomilinDima" target="blank">
            <BsTwitter style={marginBottom} />
          </a>
          <a href="https://www.facebook.com/tomilin.dimon" target="blank">
            <BsFacebook style={marginBottom} />
          </a>
        </div>
        <p className="copyright">Dima Project © 2022</p>
      </footer>
    </div>
  );
}
