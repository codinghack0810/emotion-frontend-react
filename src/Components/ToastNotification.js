import React, { useState, useEffect } from 'react';

const ToastNotification = ({ message, duration, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div style={{ 
      position: 'fixed',
      top: '40px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: visible ? 'block' : 'none'
    }} className="inline-flex shrink-0 py-5 w-full md:w-[40rem] text-3xl font-bold text-center items-center justify-center rounded-xl backdrop-blur-sm bg-black/30 text-red-500 shadow-2xl shadow-green-500/50 dark:bg-cyan-800 dark:text-cyan-200">
      {message}
    </div>
  );
};
export default ToastNotification;