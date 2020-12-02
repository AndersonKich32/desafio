import React from 'react';
  import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
  
  export default function Test({type, message}){

    switch (type) {
      case 'success':
        toast.success(message, {
          position: toast.POSITION.TOP_LEFT
        });
        break;
      case 'warn':
        toast.warn(message,{
          position: toast.POSITION.TOP_LEFT
        });
        break;
      case 'error':
        toast.error(message,{
          position: toast.POSITION.TOP_LEFT
        });
        break;
      default:
        toast.info(message,{
          position: toast.POSITION.TOP_LEFT
        });
    }
    
    return (
      <div style={{zIndex:999}}>        
        <ToastContainer />
      </div>
    );
  }