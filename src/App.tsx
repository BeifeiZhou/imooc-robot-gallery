import React, { useState, useEffect } from 'react';
import logo from './assets/images/logo.svg';
import styles from './App.module.css';
import robots from './mockdata/robots.json'
import Robot from './components/Robot'
import RobotDiscount from './components/RobotDiscount'
import ShoppingCart from './components/ShoppingCart'



interface Props {
}
interface State {
  robotGallery: any[];
  count: number
}
const App: React.FC = (props) => {

  // count: 变量
  // setCount: 函数
  const [count, setCount] = useState<number>(0)
  const [robotGallery, setRobotGallery] = useState<any>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>()

  // componentDidUpdate: If there is no second parameter, then the useEffect will be executed recursively
  // componentDidMount: If [] is empty, then useEffect is similar as componentDidMount which
  // will be only executed once when the component is mounted
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const responses = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        // .then(response => response.json())
        // .then(data => setRobotGallery(data))
        const data = await responses.json();
        setRobotGallery(data);
      } catch (e) {
        setError((e as Error).message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  // The title of the page will change whenever count is changed
  useEffect(() => {
    document.title = `点击${count}次`
  }, [count])

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>Robot online shopping</h1>
      </div>
      <button
        onClick={() => { setCount(count + 1) }}
      >Click</button>
      <span>count: {count}</span>
      <ShoppingCart />
      {(!error || error !== "") && <div>网站出错：{error}</div>}
      {!loading ? (
        <div className={styles.robotList}>
          {robotGallery.map((r, index) =>
            index % 2 == 0 ?
              <RobotDiscount id={r.id} name={r.name} email={r.email} /> :
              <Robot id={r.id} name={r.name} email={r.email} />
          )}
        </div>
      ) : (
        <h2>loading 加载中...</h2>
      )
      }
    </div>
  );

}

export default App;
