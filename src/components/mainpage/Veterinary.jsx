import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

function Veterinary() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      Veterianary
    </div>
  )
}

export default Veterinary
