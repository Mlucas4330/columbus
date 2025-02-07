import { Navigate } from "react-router-dom"
import { useAuth } from "../providers/AuthProvider"

function ProtectedRoute({ children }) {
    const { token } = useAuth()

    return token ? children : <Navigate to="/sign-in" />
}

export default ProtectedRoute