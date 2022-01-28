import styled from "styled-components";

export const ProductInfoContainer = styled.div`
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  width: 75%;
  justify-content: center;
  padding: 20px;
  margin: 20px auto;
  font-size: 1.3rem;

  h4 {
    margin-top: 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }


  .productInfo-img-btn{
    margin-right: 10px;
  }
`;

export const Title = styled.span`
  width: 160px;
  border-right: 1px solid #eee;
  min-height: 65px;
  display: flex;
  align-items: center;
`;

export const ItemContainer = styled.ul`
  width: 100%;
  height: 100%;
`;

export const Item = styled.li`
  display: flex;
  border: 1px solid #eee;
  :not(:last-child) {
    border-bottom: none;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  padding: 10px 12px;
  width: 100%;
`;

export const ListContainer = styled.ul`
  height: 200px;
  overflow: scroll;
  width: ${(props) => props.width};
  border-radius: 4px;
  border: 1px solid #eee;
`;

export const ListItem = styled.li``;

export const Tag = styled.li`
  background-color: #ddd;
  border: 1px solid cornflowerblue;
  border-radius: 4px;
  padding: 6px 8px;
  margin-bottom: 8px;
`;

export const Check = styled.input``;

export const InputContainer = styled.div`

border: 1px solid #eee;
border-radius: 4px;
width: 100%;
padding: 4px 6px;
height: 60%;
align-self: center;

input{
  height: 100%;
  width: 95%;
  background: none;
  outline: none;
  border: none;
  font-size: 14px;
}
`

export const ProductContainer = styled.div`

width: 100%;
display: flex;
justify-content: space-around;

span{
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}

span:nth-child(1){
  border-right: 1px solid #eee;
}
`

export const ScrollContainer = styled.div`
  border: 1px solid #eee;
  border-radius: 4px;
  width: 70%;
  padding: 4px 6px;

  input {
    height: 100%;
    width: 90%;
    background: none;
    outline: none;
    border: none;
  }
`;