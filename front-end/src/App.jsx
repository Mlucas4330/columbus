import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import ProtectedRoute from './routes.jsx/ProtectedRoute'
import { AuthProvider } from './providers/AuthProvider'
import { CreateProvider } from './providers/CreateProvider'
import { Theme } from '@chakra-ui/react'
import { Toaster } from "./components/ui/toaster"
import { ProductsProvider } from './providers/ProductsProvider'

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <CreateProvider>
            <ProductsProvider>
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
            </ProductsProvider>
          </CreateProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
