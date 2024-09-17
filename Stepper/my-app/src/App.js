import logo from './logo.svg';
import './App.css';
import CheckoutStepper from './components/CheckoutStepper';
const CHECKOUT_STEPS=[
  {
    name:"Customer Info",
    Component:()=> <div>Provide your Contact details</div>,
  },
  {
    name:"Shipping Info",
    Component:()=> <div>Provide your Shipping address</div>,
  },
  {
    name:"Payment",
    Component:()=> <div>Complete your Payment</div>,
  },
  {
    name:"Delivered",
    Component:()=> <div>You order has been delivered</div>,
  }
]
function App() {
  return (
    <div className="App">
      <h2>Checkout</h2>
      <CheckoutStepper stepsConfig={CHECKOUT_STEPS}/>
    </div>
  );
}

export default App;
