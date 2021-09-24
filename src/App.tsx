import React from 'react';
import logo from './assets/images/logo.svg';
import styles from './App.module.css';
import robots from './mockdata/robots.json'
import Robot from './components/Robot'
import ShoppingCart from './components/ShoppingCart'

interface Props { }
interface State {
  robotGallery: any[];
  count: number
}
class App extends React.Component<Props, State> {

  // 生命周期第一阶段： 初始化
  constructor(props) {
    super(props);
    this.state = {
      robotGallery: [],
      count: 0
    }
  }

  // 在组建初始化的时候调用一次
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState({ robotGallery: data }))
  }

  // 组建更新后调用
  componentDidUpdate() { }

  // 组建销毁后调用
  componentWillUnmount() { }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h1>Robot online shopping</h1>
        </div>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 }, () => {
              console.log("count ", this.state.count)
            })
          }}
        >Click</button>
        <span>count: {this.state.count}</span>
        <ShoppingCart />
        <div className={styles.robotList}>
          {this.state.robotGallery.map(r => <Robot id={r.id} name={r.name} email={r.email} />)}
        </div>
      </div>
    );
  }
}

export default App;
