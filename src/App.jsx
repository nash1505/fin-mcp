import './App.css'
import AuthProvider from './context/AuthProvider';
import Router from './components/router';
function App() {

  return (
    <>
      <AuthProvider>
        <Router/>
      </AuthProvider>
    </>
  )
}

export default App
