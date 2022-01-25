import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import AlertMessage from './AlertMessage';
import { useSelector } from 'react-redux';

export default function SearchPage() {
  const { mode } = useSelector((state) => state);

  return (
    <div className="App" style={mode}>
      <Header />
      <hr />
      <AlertMessage />
      <Main />
      <hr />
      <Footer />
    </div>
  );
}
