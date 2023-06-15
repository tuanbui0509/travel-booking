import styled from "styled-components";
import { mobile } from "../responsive";

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
    padding: 20px;
    border-radius: 2.5%;
    background-color: white;
    ${mobile({ width: "70%" })};
`
const Title = styled.div`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 14px;
    margin: 20px 0px;
    text-align: center;
`

const Span = styled.span`
    font-size: 14px;
    color: #006680;
  justify-content: space-between;
  
`
const Button = styled.button`
    width: 100%;
    border: none;
    padding: 15px 20px;
    background-color: #006680;
    color: white;
    cursor: pointer;
`


const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Tạo tài khoản</Title>
                <Form>
                    <Input placeholder="Username"/>
                    <Input placeholder="Họ tên"/>
                    <Input placeholder="Email"/>
                    <Input placeholder="Số điện thoại"/>
                    <Input placeholder="Mật khẩu"/>
                    <Input placeholder="Nhập lại mật khẩu"/>
                    <Agreement>
                        Bằng việc đăng ký, bạn đã đồng ý với XYZ về
                            <Span> Điều khoản sử dụng  </Span> và
                            <Span> Chính sách bảo mật</Span>
                    </Agreement>
                    <Button>Tạo</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login