import './App.css'

const PI=3.14;
function mul(a,b){
    return a*b;
}

function My_firstcompo() {
  return (
    <>
      <h1 className='hero'>This is my first component</h1>
      <p>Value of PI is {PI}</p>
      <p>Value of multiplication is {mul(5,6)}</p>
    </>
  )
}
export default My_firstcompo;