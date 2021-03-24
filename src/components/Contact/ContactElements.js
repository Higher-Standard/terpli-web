import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`

position: relative;
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 0;
overflow: scroll;
background: #321F46;

@media screen and (max-width: 1024px) {
    height: 800px;
  
  }

  @media screen and (max-width: 768px) {
    height: 700px;
    overflow: hidden;
  }

  @media screen and (max-width: 400px) {
   height: 800px;
  }


`;


export const FormWrap = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: scroll;

  @media screen and (max-width: 767px) {
  
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #C2E531;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 767px) {
   
  }
`;

export const FormColumn = styled.div `
flex-direction: column;
overflow: scroll;

`

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 300px;
  overflow: scroll;

  @media screen and (max-width: 767px) {
    
  }
`;

export const FormElement = styled.form`
  background: #D5E690;
  max-width: 600px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin:  50px;
  padding: 80px 32px;
  // border-radius: 20px;
  // box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  overflow: scroll;

  @media screen and (max-width: 1024px) {
    padding: 32px 32px;
    height: 90%;
    width: 90%;
    margin-left: 20%;
  
  }

  @media screen and (max-width: 768px) {
    padding: 32px 32px;
    height: 80%;
    width: 80%;
    margin-left: 80px;
  
  }
  @media screen and (max-width: 400px) {
    padding: 15px 0px;
    height: 700px;
    width: 90%;
    margin-left: 20px;
  }

  @media screen and (max-width: 285px) {
 
  }
`;
// changed border-radius from 4px to 20px

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #38165E;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  @media screen and (max-width: 400px) {
    margin-bottom: -25px;
  }
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #38165E;
  margin-left: 5px;
  @media screen and (max-width: 767px) {
    height: 10px;
    width: 100%;
  }

  @media screen and (max-width: 400px) {
    margin-top: -30px;
    margin-left: 30px;
    margin-right: 10px;
  }
`;
export const FormInput = styled.input`
  padding: 10px 16px;
  margin-bottom: 16px;
  border: none;
  border-radius: 20px;
  overflow: scroll;

  @media screen and (max-width: 767px) {
   
  }

  
  


  
 
`;

export const FormMessageInput = styled.input `
padding: 16px 16px;
margin-bottom: 32px;
border: none;
border-radius: 20px;
margin-left: 10px;
lineheight: 100px;
height: 10px;
align-items: top-left;
overflow: scroll;



`

export const FormButton = styled.button`
  background: #38165E;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #C2E531;
  font-size: 20px;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    width: 300px;
    margin: 5%;
    padding: 0;
  }
  
`;

export const FormButton2 = styled.button`
  background: #5F3A84;
  padding: 10px 16px;
  // margin-left: 20px;
  border: none;
  border-radius: 20px;
  color: #C2E531;
  font-size: 16px;
  cursor: pointer;
  font-size: 24px;
  
  @media screen and (max-width: 400px) {
    width: 10px;
  }
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #38165E;
  font-size: 14px;

  
`;
