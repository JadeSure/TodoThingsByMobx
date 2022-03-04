import styled from "styled-components";

export const Button = styled.button`
display: inline-block;
padding: 4px 12px;
margin-bottom: 0;
font-size: 14px;
line-height: 20px;
text-align: center;
vertical-align: middle;
border: none;
cursor: pointer;
box-shadow: insert 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
border-radius: 4px;
margin-right: 5px;

background-color: ${({ bg }) => bg || "#fff"};
color: ${({ color }) => color || "#333"};

&:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;



