import React from 'react';
import CSSModules from 'react-css-modules';
import app from './App.css';
import axios from 'axios';
import DetailsBox from './DetailsBox.jsx';
import Dates from './Dates.jsx';
import Buttons from './Buttons.jsx';
import DeliverModal from './DeliverModal.jsx';
import AddToListModal from './AddToListModal.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       price: '',
    };
    this.child = React.createRef();
    this.clickOutside = this.clickOutside.bind(this);
    this.getData = this.getData.bind(this);
  }
  componentDidMount() {
    this.getData();
  }

  getData() {
    const urlArray = document.URL.split('/');
    const productID = Number(urlArray[urlArray.length - 1]);
    // const userId = Number(urlArray[urlArray.length - 1]);
    console.log(urlArray, productID);
    axios.get(`/api/${productID}/`)
      .then((res) => {
        console.log(typeof(res.data.rows[0].price));
          this.setState({ price: res.data.rows[0].price });
          console.log(this.state)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  clickOutside(event) {
    if (event.target.className === 'body' || event.target.className === 'container') {
      this.child.current.setState({ clicked: false });
    }
  }

  render() {
    const { price } = this.state;
    const style = { display: price ? 'flex' : 'none' };
    return (
      <div className={app.container} style={style}>
        <div className={app.priceChris}>
          {' '}
          { price }
          {' '}
        </div>
        <div className={app.freeshipping}>
            &
          {' '}
          <b>FREE Shipping</b>
          {' '}
          on orders over $25 shipped by Amazon.
          {' '}
          <DetailsBox ref={this.child} />
          <Dates />
          <Buttons />
          <DeliverModal />
          <AddToListModal />
        </div>
      </div>

    );
  }
}

export default App;
