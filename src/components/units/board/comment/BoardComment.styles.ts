import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  border-top: 1px solid #bdbdbd;
  margin: 100px;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardWrapper = styled.div`
  width: 1200px;
  
`;

export const Header = styled.div`
font-weight: 500;
font-size: 18px;
  display: flex;
  margin-bottom: 30px;
`;

export const HeaderTitle = styled.div`

  
`;

export const HeaderImage = styled.img`
margin-right: 20px;
  
`;

export const InFor = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`;

export const InForWriter = styled.input`
background: white;
border: solid 1px  gold;
  width: 180px;
height: 52px;
  margin-right: 20px;
  padding-left: 20px;
  border-radius: 4px;
`;

export const InForPassword = styled.input`
background: white;
border: solid 1px  gold;
width: 180px;
height: 52px;
padding-left: 20px;
margin-right: 20px;
border-radius: 4px;
`;

export const Scope = styled.img`
margin-left: 3px; 
width: 20px;
height: 20px;
cursor: pointer;
`;

export const Body = styled.div`
  width: 1200px;
  height: 161px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  background: rgb(255, 255, 255);
  border-radius: 4px;
  box-shadow: rgb(63 71 77 / 15%) 0px 2px 6px;
`;

export const BodyInput = styled.input`
width: 100%;
height: 108px;
padding-left: 20px;
border: none;
background: rgb(255, 255, 255);
border-top-left-radius: 4px;
border-top-right-radius: 4px;
box-shadow: rgb(63 71 77 / 15%) 0px 2px 6px;
border-bottom: 1px solid gold;
`;

export const BodyNumberTie = styled.div`
display: flex;
`
export const BodyNumber = styled.div`
width: 1100px;
height: 55px; 
color: #bdbdbd;
padding-left: 20px;
display: flex;
align-items: center;
background: rgb(247, 248, 250);
border-bottom-left-radius: 4px;
box-shadow: rgb(63 71 77 / 15%) 0px 2px 6px;
`;

export const BodyButton = styled.button`
width: 100px;
height: 55px;
border: none;
background-color: gold;
border-bottom-right-radius: 4px;
box-shadow: rgb(63 71 77 / 15%) 0px 2px 6px;
cursor: pointer;
:hover {
    background-color: #ebc600;
    border-color: #ebc600;
  }
`;

export const Footer = styled.div`
width: 1200;
display: flex;
align-items: center;
padding-bottom: 50px;
border-radius: 4px;
    background-color: #FFFFFF;
    box-shadow: 0 2px 10px rgb(63 71 77 / 25%);
    margin-bottom: 20px;
    padding-top: 30px;
`;

export const FooterInfoPicture = styled.img`
width: 40px;
height: 40px;
margin-right: 20px;
margin-left: 30px;
`;

export const FooterCommentInfor = styled.div`
width: 1020px;  
`;

export const CommentNameScope = styled.div`
display: flex;
align-items: center;

`;

export const CommentName = styled.div`
font-weight: 600;
font-size: 16px;
margin-bottom: 5px;
margin-right: 10px;
`;

export const CommentScope = styled.div`

`;

export const CommentContent = styled.div`
font-weight: 400;
font-size: 16px;
margin-top: 10px;
margin-bottom: 15px;
margin-left: 2px;
margin-right: 20px;
`;

export const CommentRegistrationTime = styled.div`
font-weight: 400;
font-size: 12px;
color: #bdbdbd;
`;

export const FooterEditDelete = styled.div`
margin-bottom: 40px;
`;

export const CommentEdit = styled.img`
margin-right: 20px;
cursor: pointer;
`;

export const CommentDelete = styled.img`
cursor: pointer;  
`;

