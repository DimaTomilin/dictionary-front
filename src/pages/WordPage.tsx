/* eslint-disable */
import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams, useLocation, useSearchParams } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { createFetchURL } from '../helpers/createFetchURL';
import { useAction } from 'hooks/useAction';
import ListOfWords from 'components/ListOfWords';

const WordPage: React.FC = () => {
  const { fetchWords } = useAction();
  const state = useContext(ThemeContext);

  const params = useParams();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const letterQueryParams = searchParams.get('letter');

  // @ts-expect-error
  fetchWords(createFetchURL(params, location.pathname, letterQueryParams));

  return (
    <div className={`App ${state?.darkMode ? 'darkmode' : 'lightmode'}`}>
      <Header />
      <hr />
      <ListOfWords />
      <Footer />
    </div>
  );
};

export default WordPage;
