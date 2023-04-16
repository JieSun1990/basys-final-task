import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: var(--white);
  height: 130px;
  border-radius: 7px;
  font-size: 1rem;
  padding: 15px;
  max-width: 700px;
  font-weight: 500;
  transition: 0.15s ease-in-out;
  font-weight: 600;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* gap: 10px; */
  margin: 7px 0;
  
  :hover {
    background-color: var(--secBlue);
    color: var(--white);

  }
  div{
    padding:8px;
    flex-grow:1;
    
  }
  span{
    display: flex;
    justify-content:flex-start;
    align-items: center;
    padding: 2px;
    p{
        padding-left: 5px;
    }
  }
  
`;