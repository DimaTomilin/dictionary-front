/* eslint-disable */
import React, { useContext } from 'react';
import { useParams, useLocation, useSearchParams } from 'react-router-dom';
import Header from '../../components/ui/Header/Header';
import Footer from '../../components/ui/Footer/Footer';
import ListOfWords from '../../components/ListOfWords';
import { ThemeContext } from '../../context/ThemeContext';
import { createFetchURL } from '../../helpers/createFetchURL';
import { useAction } from 'hooks/useAction';
import './wordPage.scss';

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
