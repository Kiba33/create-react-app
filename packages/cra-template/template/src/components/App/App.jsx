import React from 'react';
import Layout from '../Layout/Layout';

import './App.css';

function App() {

      return (
          <HashRouter>
              <ContextProvider>
                  <Layout>
                      <div className="main-content">
                          <Switch location={this.props.location}>
                              <Route exact path='/' component={Home} />
                          </Switch>
                      </div>
                  </Layout>
              </ContextProvider>
          </HashRouter>
      );
}

export default App;
