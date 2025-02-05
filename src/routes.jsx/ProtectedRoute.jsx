import { Navigate } from "react-router-dom"
import { useAuth } from "../providers/AuthProvider"

function ProtectedRoute({ children }) {
    const { signedIn } = useAuth()

    return signedIn ? children : <Navigate to="/sign-in" />
}

export default ProtectedRoute