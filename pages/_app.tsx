/* eslint-disable react/jsx-props-no-spreading */
import { ThemeProvider } from '@material-ui/core';
import { ThemeProvider as ThemeProviderStyled } from 'styled-components';
import Head from 'next/head';
import App from 'next/app';
import theme from 'src/common/styles/MUTheme';
import themeStyled from 'src/common/styles/theme';
import GlobalStyle from 'src/common/styles/globalStyle';
import Router from 'next/router';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import config from 'next/config';
import GlobalProvider from 'src/components/commonComponents/globalProvider/GlobalProvider';
import { breakPoints } from 'src/common/styles/responsiveBreakpoint';

const {
  BACKEND_SCHEME,
  BACKEND_HOST,
  BACKEND_PORT,
  BACKEND_GRAPHQL_ENDPOINT,
} = config().publicRuntimeConfig;

declare global {
  interface Window {
    gtag: any;
    historyStack: (() => void)[];
  }
}

class MyApp extends App<any> {
  state = {};

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) jssStyles.parentElement.removeChild(jssStyles);

    // GA
    // const handleRouteChangeComplete = () => {
    //   if (typeof window === 'object') {
    //     const { title } = window.document;
    //     const { href, pathname } = window.location;

    //     window.gtag('config', '', {
    //       page_title: title,
    //       page_location: href,
    //       page_path: pathname,
    //     });
    //   }
    // };
    // Router.events.on('routeChangeComplete', handleRouteChangeComplete);

    // HistoryStack 초기화
    window.historyStack = [];
  }

  public render() {
    const { Component, router, pageProps /* apollo */ } = this.props;
  
    console.log('BACKEND_HOST', BACKEND_HOST);

    const client = new ApolloClient({
      uri: `${BACKEND_SCHEME}://${BACKEND_HOST}:${BACKEND_PORT}/${BACKEND_GRAPHQL_ENDPOINT}`,
      cache: new InMemoryCache(),
    });

    // 메인화면
    return (
      <div>
        <Head>
          {/* 기본 */}
          <title>코드캠프 - 개발회사에서 만든 실무 코딩 부트캠프</title>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="개발회사에서 만든 실무 코딩 부트캠프 || 개발자로 커리어점프 하다."
          ></meta>
          <meta name="subject" content="" />
          <meta name="rating" content="General" />

          {/* 태블릿 화면 - 웹의 80%로 축소 */}
          {typeof window !== 'undefined' &&
            window?.innerWidth > Number(breakPoints.mobile.match(/\d+/)?.[0]) && (
              <meta
                name="viewport"
                content="initial-scale=0.8, width=device-width, user-scalable=no"
              />
            )}

          {/* 네이버 서치어드바이저 */}
          <meta name="NaverBot" content="All" />
          <meta name="NaverBot" content="index,follow" />
          <meta name="Yeti" content="All" />
          <meta name="Yeti" content="index,follow" />

          {/* 페이스북 오픈그래프(OG) */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="코드캠프" />
          <meta
            property="og:description"
            content="개발회사에서 만든 실무 코딩 부트캠프 || 개발자로 커리어점프 하다."
          />
          <meta
            property="og:image"
            content="https://codebootcamp.co.kr/images/meta/main-thumb.png"
          />
          <meta property="og:url" content="https://codebootcamp.co.kr" />

          {/* 대표URL */}
          <link rel="canonical" href="https://codebootcamp.co.kr/home" />

          {/* 폰트 */}
          <link
            href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-jp.css"
            rel="stylesheet"
            type="text/css"
          />
        </Head>
        <ApolloProvider client={client}>
          <GlobalProvider>
            <ThemeProviderStyled theme={themeStyled}>
              <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Component {...pageProps} url={router} />
              </ThemeProvider>
            </ThemeProviderStyled>
          </GlobalProvider>
        </ApolloProvider>
      </div>
    );
  }
}

export default MyApp;
