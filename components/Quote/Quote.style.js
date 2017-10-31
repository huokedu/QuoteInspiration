import styled from "styled-components/native";


export const QuoteContainer = styled.View`
  align-items: flex-end;
  justify-content: center;
  padding: 30px;
`;
export const QuoteText = styled.Text`
  
  font-size: ${props => props.size ? props.size:15};
  font-family: fjallaone-regular;
  text-align: center;
  color: #FFF;
`;
export const Author = styled.Text`
  
  font-weight: bold;
  font-size: 17;
  margin-top: 15;
  color: rgba(0, 0, 0, 0.4);
`;
