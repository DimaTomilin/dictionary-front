import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import AlertMessage from './AlertMessage';

export default function SearchPage() {
  return (
    <div className="App">
      <Header />
      <hr />
      <AlertMessage />
      <Main />
      <hr />
      <Footer />
    </div>
  );
}
