
const Menubar = (props) => {
      
    return (
      <NavContainer>
        <TextLink to={'/'}>
          <LogoImage src={require("public\media\logo.png")} alt={`logo`} />
        </TextLink>
        <MenuWrapper>
          <TextLink to={'/'}>
            <LogoImage src={require("public\media\home_icon.png")} alt={`home`} />
            <Text>서비스 소개 페이지</Text>
          </TextLink>

          <TextLink to={'/dashboard'}>
            <LogoImage src={require("public\media\dashboard_icon.png")} alt={`dashboard`} />
            <Text>커스텀 대시보드 페이지</Text>
          </TextLink>

          <TextLink to={'/chart'}>
            <LogoImage src={require("public\media\chart_icon.png")} alt={`chart`} />
            <Text>통계 자료 데이터 목록 페이지</Text>
          </TextLink>

          <TextLink to={'/news'}>
            <LogoImage src={require("public\media\news_icon.png")} alt={`news`} />
            <Text>뉴스 요약 페이지</Text>
          </TextLink>

          <TextLink to={'/rank'}>
            <LogoImage src={require("public\media\rank_icon.png")} alt={`rank`} />
            <Text>데이터 활용 차트 순위 목록 페이지</Text>
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