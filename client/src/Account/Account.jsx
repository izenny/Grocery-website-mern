import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

const Account = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="w-screen h-screen bg-yellow-300 flex flex-col justify-center items-center">
      {isLogin ? <Login toggleForm={toggleForm} /> : <Signup toggleForm={toggleForm} />}
    </div>
  );
};

export default Account;
