
const Menubar = (props) => {
      
    return (
      <NavContainer>
        <TextLink to={'/'}>
          <LogoImage src={require("public\media\logo.png")} alt={`GGG logo`} />
        </TextLink>
        <MenuWrapper>
          <TextLink to={'/'}>
            <Text>메인화면</Text>
          </TextLink>
          <TextLink to={'/select'}>
            <Text>스테이지 선택</Text>
          </TextLink>
          <TextLink to={'/my'}>
            <Text>일러스트 열람</Text>
          </TextLink>
        </MenuWrapper>
        { user ? (
            <>
              <AuthWrapper>
                <TextLink to={'/my'}>
                  <Text>마이페이지</Text>
                </TextLink>
                <TextLink to={'/logout'}>
                  <Text>로그아웃</Text>
                </TextLink>
              </AuthWrapper>
            </>
        ) : (
          <>
            <AuthWrapper>
              <TextLink to={'/login'}>
                <Text>로그인</Text>
              </TextLink>
              <TextLink to={'/signup'}>
                <Text>회원가입</Text>
              </TextLink>
            </AuthWrapper>
          </>
        )}
      </NavContainer>
    );
  };
  
  export default Menubar;