import react from 'react';
import SinglePost from "../Components/Singlepost";
import Header from "../Components/Header";


export default function Singleblog() {
  return (
    <>
    <Header /> 
    <div className="single">
      <SinglePost />
    </div>
    </>
  );
}