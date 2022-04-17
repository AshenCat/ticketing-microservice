import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import buildClient from '../api/build-client';
import Header from '../components/Header';

function AppComponent({Component, pageProps, currentUser}) {
  return <div>
    <Header currentUser={currentUser} />
    <Component {...pageProps} />
  </div>
}

AppComponent.getInitialProps = async (appContext) => {
  const {data} = await buildClient(appContext.ctx).get('/api/users/currentUser');
  
  let pageProps= {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }

  console.log(pageProps)
  return data;
}

export default AppComponent