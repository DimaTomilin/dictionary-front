/* eslint-disable */
import React, { useContext, useEffect } from 'react';
import Header from '../comp/Header';
import Footer from '../comp/Footer';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import {
  useNavigate,
  useParams,
  useLocation,
  useSearchParams,
} from 'react-router-dom';
import { takeWord } from '../helpers/wordTaken';
import { ThemeContext } from '../context/ThemeContext';
import { checkRouteParamsAndGetWord } from '../helpers/compareParamsToState';

export default function WordPage() {
  const { words } = useSelector((state) => state);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const location = useLocation();
  const [searchParams] = useSearchParams();
  const letterQueryParams = searchParams.get('letter');

  useEffect(() => {
    checkRouteParamsAndGetWord(
      dispatch,
      params,
      location.pathname,
      letterQueryParams
    );
  }, [location.pathname]);

  const clickHandle = () => {
    navigate('/');
  };

  let wordToHeader = '';
  if (words.length != 0) {
    wordToHeader =
      words[0].Word.charAt(0).toUpperCase() + words[0].Word.slice(1);
  }

  const findWord = async (e) => {
    if (e.ctrlKey === true) {
      const word = takeWord();
      navigate(`/${word}`);
    }
  };

  return (
    <div className={`App ${darkMode ? 'darkmode' : 'lightmode'}`}>
      <Header />
      <hr />
      <div className="word-page">
        <h2>{wordToHeader}</h2>
        {words.map((word) => {
          return (
            <div key={word.Definition.slice(0, 5)}>
              <p className="part-of-speech">{word.Part_of_speech}</p>
              <p className="definition" onClick={findWord}>
                {word.Definition}
              </p>
            </div>
          );
        })}
        <Button variant="info" className="form-btn" onClick={clickHandle}>
          To main page
        </Button>
      </div>
      <hr />
      <Footer />
    </div>
  );
}
