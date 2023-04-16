import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -5px;
    strong {
      font-size: 2.5rem;
    }
    ul {
      list-style-type: none;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15px;
      li {
        span {
          font-size: 2rem;
        }
        position: relative;
      }
    }
  }
  .box {
    display: flex;
    flex-grow: 1;
    justify-content: space-evenly;
    gap: 30px;
    width: 100%;
    h2 {
      padding-bottom: 10px;
    }
    form {
      display: flex;
      flex-direction: column;
      /* width: 100%; */
      /* height: 100%; */
      height: min(90%, 410px);

      background-color: var(--white);
      /* height: 130px; */
      border-radius: 7px;
      font-size: 1rem;
      padding: 10px;
      margin-top:8px;
      max-width: 700px;
      font-weight: 500;
      transition: 0.15s ease-in-out;
      font-weight: 600;

      justify-content: space-around;
    }
    .patient-info{
      min-width: 600px;
    }
    .patient-search{
      display: flex;
      justify-content: space-between;
      input{
        width:50%;
        /* height: 100%; */
        border-radius: 10px;
        border: none;
        margin: 20px 5px;
        padding:2px;
      }
    }
    .patient-form {
      flex-grow: 1;
      margin-right: 10px;
      
    }
    .patient-list {
      flex-grow: 1;
      height: min(90%, 430px);
      min-height:430px;
      border-radius: 15px;
      /* margin-top: 5px; */
      padding-right: 10px;
      overflow-x: hidden;
      overflow-y: auto;
      /* width */
      ::-webkit-scrollbar {
        width: 8px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey; 
        border-radius: 10px;
      }
      
      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: var(--secBlue); 
        border-radius: 10px;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: var(--secBlue); 
      }
      strong{
        padding: 10px;
      }
    }
    .field {
      display: flex;
      justify-content: space-between;
      label {
        padding: 5px;
        /* display: flex;
        justify-content: space-around; */
        font-size: 1.25 rem;
      }
      input {
        /* margin-left: auto; */
        font-size: 1.25 rem;
        padding-left: 10px;
        border-radius: 5px;
        width: 70%;
      }
    }
    .next-btn {
      margin-left: auto;
      width: 20%;
      height: 40px;
      border-radius: 5px;
      background-color: var(--secBlue);
        color: var(--white);
      font-size: 1.1rem;
      text-align:center;

      :hover {
        background-color: var(--white);
        color: var(--secBlue);
      }
    }
  }
`;
export const NavContainer = styled.div`
  border-radius: 15px;
  padding: 40px 15px;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-direction: column;
`;
export const Draggable = styled.div`
  min-width: 500px;
  cursor: move;
`;