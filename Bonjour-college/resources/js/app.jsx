import './bootstrap';
import '../css/app.css'; 
import ReactDOM from 'react-dom/client';
import React from 'react';
import NavBar from '../components/NavBar';


ReactDOM.createRoot(document.getElementById('app')).render(
	<NavBar/>
);
