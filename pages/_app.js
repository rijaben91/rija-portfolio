import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';
import Navbar from '../components/shared/Navbar';
import Hero from '../components/shared/Hero';


const MyApp = ({Component, pageProps}) => {

  return (
      <div className="portfolio-app">
        <Navbar />
        {pageProps.appData}
        { Component.name === 'Home' && <Hero /> }

        <div className="container">
          <Component {...pageProps} />
        </div>

        { Component.name === 'Home' &&
              <footer id="sticky-footer" className="py-4 bg-black text-white-50 py-3">
                <div className="container text-center">
                  <small>Copyright &copy; Your Website</small>
                </div>
              </footer>
        }

      </div>
    )
}

// MyApp.getInitialProps = async (context) => {
//   const initalProps = App.getInitialProps && await App.getInitialProps(context);

//   return {pageProps: { appData: 'Hello first App data ', ... initalProps.pageProps }}
// }

export default MyApp;
