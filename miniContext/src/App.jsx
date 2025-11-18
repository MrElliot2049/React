import UserContextProvider from './context/UserContextProvider'
import './App.css'
import Profile from './components/Profile'
import Login from './components/login'


function App() {
  

  return (
    <UserContextProvider>
      <h1>My context</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
