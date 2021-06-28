import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';


function Notifications() {

    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
            />
        </div>
    )
}

export default Notifications;
