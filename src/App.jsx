import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import ProtectedRoute from './routes.jsx/ProtectedRoute'
import { AuthProvider } from './providers/AuthProvider'
import { Theme } from '@chakra-ui/react'
import { Toaster } from "./components/ui/toaster"

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Theme appearance='light'>
            <Toaster />
            <Routes>
              <Route path='/sign-in' element={<SignIn />} />
              <Route path='/sign-up' element={<SignUp />} />
              <Route path='/' element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
            </Routes>
          </Theme>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
