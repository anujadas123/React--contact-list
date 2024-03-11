
import '../App.css';
import Header from '../components/Header'
import Table from'../components/Table'
import AddContact from '../components/AddContact';
import Delete from '../components/Delete';
import React from 'react';
import Edit from '../components/Edit';



function App() {
  return (
    <>
    <Header/>
    <AddContact/>
    <Table/>
    <Delete/>
    <Edit/> 
   

    </>


   
  );
}

export default App;
