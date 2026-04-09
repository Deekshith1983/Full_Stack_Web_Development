//conditional Rendering
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate=useNavigate();
    const token=sessionStorage.getItem("token");

    const logout=()=>{
        sessionStorage.removeItem("token");
        navigate("/");
    };

    return (
        <div>
            <h1>My App</h1>
            {token ? (
                <>
                <button onClick={()=>navigate('/dashboard')}>
                    Dashboard
                </button>
                <button onClick={logout}>
                    Logout
                </button>
                </>
            ) : (
                <>  
                <button onClick={()=>navigate('/')}>
                    Login
                </button>
                <button onClick={()=>navigate('/register')}>
                    Register
                </button>
                </>
            )}
        </div>
    );
}

export default Navbar;