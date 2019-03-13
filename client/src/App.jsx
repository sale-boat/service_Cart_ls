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
       price: '123.34',
    };
    this.child = React.createRef();
    this.clickOutside = this.clickOutside.bind(this);
    this.getData = this.getData.bind(this);
  }
  componentDidMount() {
    console.log('This is luke')
    this.getData();
  }


  // componentDidMount() {
  //   // const urlArray = document.URL.split('/');
  //   // const productID = Number(urlArray[urlArray.length - 1]);
  //   // axios.get(`/api/product/${productID}`)
  //   //   .then((res) => {
  //   //     this.setState({ price: res.data[0].price });
  //   //   })
  //   //   .catch((err) => {
  //   //     console.log(err);
  //   //   });
  //   console.log("I came from componendid mount")
  //   this.getData();
  // }

  getData() {
    const urlArray = document.URL.split('/');
    const productID = Number(urlArray[urlArray.length - 2]);
    const userId = Number(urlArray[urlArray.lenght - 1]);
    console.log(urlArray, productID, userId);
    axios.get(`/${productID}/${userId}`)
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
