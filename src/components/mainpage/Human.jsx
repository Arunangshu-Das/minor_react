import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

function Human() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      Human
    </div>
  )
}

export default Human
