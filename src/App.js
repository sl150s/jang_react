import './App.css';

//bootstrap css 로딩하기 


function App() {
  let myName = "김구라"
  return (
    <div className='container'>
      <h1>인덱스 페이지 입니다. </h1>
      {/* myName이라는 변수안에 있는 내용 사용하기  */}
      <p>내이름은 <strong>{myName}</strong></p>
      <button className="btn btn-primary">눌러보셈</button>
    </div>
  );
}

export default App;
