import Chai from './chai.jsx'
function App() {
  const userName='chai aur codes'
  return (
    <>
    {/*it only accept one elment so we use fragment (<> </>)inside thiswe can use as many as elements */}
     <Chai/>
     <p>hi {userName}</p>
     <h4>hi</h4>
    </>
   
  )
}

export default App
