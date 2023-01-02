import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 68px;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: var(--color-text-light);

  span{
    color: var(--color-secondary);
    font-size: large
  }
  form{
    width: 365px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input{
    width: 100%;
    height: 90%;
    border-radius: 8px;
    border: solid 1px var(--color-text-light);
    padding: 10px;
  }
  button{
    width: 107px;
    height: 40px;
    background-color: var(--color-primary);
    color: var(--color-text-light);
    border-radius: 8px;
    border: solid 1px var(--color-primary);
    position: relative;
    right: 90px;
  }

  
  @media (max-width: 414px) {

  width: 100%;
  height: 139px;
  display: flex;
  flex-direction: column;


  form{
    width: 100%;
    height: 60px;
    display: -webkit-box;
  }

  input{
    width: 362px;
    height: 60px;
    border-radius: 8px;
    border: solid 1px var(--color-text-light);
    padding: 10px;
    
  }

  button{
    width: 107px;
    height: 40px;
    position: relative;
    left: 240px;
    bottom: 51px;
  }

}
`;
