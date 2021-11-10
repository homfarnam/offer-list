import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import OfferListing from './components/OffersListing';
import OfferDetail from './components/OfferDetail';
const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Switch>
            <Route path='/' component={OfferListing} exact />
            <Route path='/offer/:id' component={OfferDetail} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
