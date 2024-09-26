import './App.css'
import AppBar from './components/AppBar.tsx';
import Header from './components/Header.tsx';
import List from './components/List.tsx'
import kitties from './assets/catimagelol.jpg'
function App() 
{
  return (
<>
    <AppBar />
    <Header/>
    <img src={kitties} width="600" height="600"/>;
    <List/>
 
</>
  );
}

export default App
