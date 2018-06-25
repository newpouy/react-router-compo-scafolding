import React, { Component, StyleSheet } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/mypage" component={MyPage}/>
        <Route exact path="/orderList" component={OrderList}/>
        <Route exact path="/shopBasket" component={ShopBasket}/>
        <Route exact path="/setting" component={Setting}/>
        <Route path="/order" component={Order}/>
        <Route exact path="/brand" component={Brand}/>
        <Route exact path="/support" component={Support}/>
        <Footer/>
      </div>
    );
  }
}

export default App;

const Home = () => {
  return (
    <div>Home
      <Banner/>
      <BasicButton s={default1}/>
      <YoutubePlayer/>
      <Welcome/>
      <OrderListPop/>
      <Questions/>
      <Reviews/>      
    </div>
  )
}
const Banner = () => { return <div style={default1}>Lolling Banner</div>}
const BasicButton = (props) => { return <div style={props.s}>BasicButton</div>}
const YoutubePlayer = () => { return <div style={default1}>YoutubePlayer</div>}
const Welcome = () => { return <div style={default1}>Welcome<BasicButton s={default2}/><BasicButton s={default2}/><UseProgress/></div>}
const OrderListPop = () => { return <div style={defaultpop}>OrderListPop</div>}
const UseProgress = () => { return <div style={default2}>UseProgress</div>}
const Questions = () => { return <div style={default1}>Questions<Question/><Question/><Question/></div> }
  const Question = () => { return <div style={default2}>Question</div>}
const Reviews = () => { return <div style={default1}>Reviews<Review/><Review/><Review/></div> }
  const Review = () => { return <div style={default2}>Review</div>}  

  
const MyPage= () => {
  return (
    <div>MyPage
      <TabbedSubList/>
    </div>
  )
}
const TabbedSubList = () => {return (<div style={default1}>TabbedSubList<SubProd/><SubProd/><SubProd/></div>)}
const SubProd = () => { return <div style={default2}>SubProd</div>}


const OrderList = () => {
  return (
    <div>OrderList</div>
  )
}

const ShopBasket = () => {
  return (
    <div>ShopBasket</div>
  )
}

const Setting = () => {
  return (
    <div>Setting
      <LoginSetting/>
      <PushSetting/>
      <MarkettingSetting/>
    </div>
  )
}
const LoginSetting = () => { return <div>LoginSetting</div>}
const PushSetting = () => { return <div>PushSetting</div>}
const MarkettingSetting = () => { return <div>MarkettingSetting</div>}


const Order = ({match}) => {
  console.log(match)
  return (
    <div>Order {match.pathname}
      <OrderHeader/>
      <Route path={`${match.path}/:orderId/init`} component={OrderInit}/>
      <Route path={`${match.path}/:orderId/skintype`} component={OrderSkintype}/>
      <Route path={`${match.path}/:orderId/skinproblem`} component={OrderSkinProblem}/>
      <Route path={`${match.path}/:orderId/skinproblemDetail`} component={OrderSkinProblemDetail}/>
      <Route path={`${match.path}/:orderId/basicinfo`} component={OrderBasicInfo}/>
      <Route path={`${match.path}/:orderId/materrecomguide`} component={OrderMaterRecomGuide}/>
      <Route path={`${match.path}/:orderId/materrecomlist`} component={OrderMaterRecomList}/>
      <Route path={`${match.path}/:orderId/lablewrite`} component={OrderLabelWrite}/>
      <Route path={`${match.path}/:orderId/pay`} component={OrderPay}/>
    </div>
  )
}
const OrderHeader = () => { return <div style={default2}>OrderHeader</div>}
const OrderInit = ({match}) => { return <div style={default2}>OrderInit {match.url}<GoodSelect/><DurationSelect/><SelectedList/></div>}
  const GoodSelect = () => { return <div style={default3}>GoodSelect</div>}
  const DurationSelect = () => { return <div style={default3}>DurationSelect</div>}
  const SelectedList = () => { return <div style={default3}>SelectedList<SelectedProduct/><SelectedProduct/></div>}
    const SelectedProduct = () => { return <div style={default4}>SelectedProduct</div>}
const OrderSkintype = () => { return <div style={default2}>OrderSkintype</div>}
const OrderSkinProblem = () => { return <div style={default2}>OrderSkinProblem</div>}
const OrderSkinProblemDetail = () => { return <div style={default2}>OrderSkinProblemDetail<InstaStyleOptionSelect/><InstaStyleOptionSelect/><InstaStyleOptionSelect/></div>}
  const InstaStyleOptionSelect = () => { return <div style={default3}>InstaStyleOptionSelect</div>}
const OrderBasicInfo = () => { return <div style={default2}>OrderBasicInfo</div>}
const OrderMaterRecomGuide = () => { return <div style={default2}>OrderMaterRecomGuide</div>}
const OrderMaterRecomList = () => { return <div style={default2}>OrderMaterRecomList<OrderRecomCompleted/><OrderMaterRecomPop/></div>}
  const OrderRecomCompleted = () => { return <div style={default3}>OrderRecomCompleted</div>}
  const OrderMaterRecomPop = () => { return <div style={defaultpop}>OrderMaterRecomPop<MaterSelect/><FlavorSelect/><FlavorStrengthSelect/></div>}
    const MaterSelect = () => { return <div style={default2}>MaterSelect</div>}
    const FlavorSelect = () => { return <div style={default2}>FlavorSelect</div>}
    const FlavorStrengthSelect = () => { return <div style={default2}>FlavorStrengthSelect</div>}
const OrderLabelWrite = () => { return <div style={default2}>OrderLabelWrite</div>}    
const OrderPay = () => { return <div style={default2}>OrderPay</div>}

// const MaterRecom = () => { return <div>OrderBasicInfo</div>} 


const Brand = () => {
  return (
    <div>Brand</div>
  )
}


const Support = () => {
  return (
    <div>Support</div>
  )
}


const Header = () => { return <div style={default1}>Header<Logo/><Noti/><Noti/></div>}
  const Logo = () => { return <span style={default2}>Logo</span>}
  const Noti = () => { return <span style={default2}>Noti</span>}
const Footer = () => { return <div style={default1}>Footer</div>}


const default1 = {
  border: 'solid'
}
const default2 = {
  border: 'solid',
  borderColor: '#464242'
}
const default3 = {
  border: 'solid',
  borderColor: '#797474'
}
const default4 = {
  border: 'solid',
  borderColor: '#a9a3a3'
}
const default5 = {
  border: 'solid',
  borderColor: '#d4cfcf'
}
const defaultpop = {
  border: 'solid',
  borderColor: 'red'
}