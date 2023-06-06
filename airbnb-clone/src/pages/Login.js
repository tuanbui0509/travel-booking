import styled from "styled-components";
import {mobile} from "../responsive";
import { Link } from  "react-router-dom"

    const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ),
      url("https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
        center;
        background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
    const Wrapper = styled.div`
    width: 40%;
    padding: 50px;
    background-color: white;
    border-radius: 2.5%;  
    display: flex;
    flex-direction: column;
    ${mobile({ width: "70%" })};
`
    const Title = styled.div`
    font-size: 36px;
    text-align: center;  
    font-weight: 400;
`
    const Form = styled.form`
    display: flex;
    flex-direction: column;
`
    const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`
    const Button = styled.button`
      width: 100%;
      border: none;
      padding: 15px 20px;
      background-color: #006680;
      color: white;
      cursor: pointer;
      margin-bottom: 10px;
    `
    const LinkText = styled.a`
    margin: 5px 0px;
    font-size: 18px;
    text-decoration: underline;
    cursor: pointer;
`
    const WrapperLink = styled.div`
    display: flex;
    justify-content: space-between;`

    const Login = () => {
        return (
            <Container>
                <Wrapper>
                    <Title>Đăng nhập</Title>
                    <Form>
                        <Input placeholder="Username"/>
                        <Input placeholder="Mật khẩu"/>
                        <Button>ĐĂNG NHẬP</Button>
                    </Form>
                    <WrapperLink>
                        <LinkText>Quên mật khẩu?</LinkText>
                        <Link to={"/register"}><LinkText>Tạo tài khoản mới</LinkText></Link>
                    </WrapperLink>

                </Wrapper>
            </Container>
        )
}
export default Login;
