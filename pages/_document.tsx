import React from 'react';
import NextDocument, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components';
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/core';

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const styledComponentSheet = new StyledComponentSheets();
    const materialUiSheets = new MaterialUiServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            styledComponentSheet.collectStyles(materialUiSheets.collect(<App {...props} />)),
        });

      const initialProps = await NextDocument.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: [
          <React.Fragment key="styles">
            {initialProps.styles}
            {materialUiSheets.getStyleElement()}
            {styledComponentSheet.getStyleElement()}
          </React.Fragment>,
        ],
      };
    } finally {
      styledComponentSheet.seal();
    }
  }

  // addGoogleAnalyticsScript() {
  //   return {
  //     __html: `
  //       window.dataLayer = window.dataLayer || [];
  //       function gtag(){ dataLayer.push(arguments); }
  //       gtag('js', new Date());
  //       gtag('config', '');
  //     `,
  //   };
  // }

  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
          {/* <script async src={`https://www.googletagmanager.com/gtag/js?id=`}></script>
          <script dangerouslySetInnerHTML={this.addGoogleAnalyticsScript()}></script> */}
          <script
            type="text/javascript"
            src="//dapi.kakao.com/v2/maps/sdk.js?appkey=cb7fbb517422329066a684821bffb14c"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                var container = document.getElementById('map');
                var options = {
                  center: new kakao.maps.LatLng(37.48534283502681, 126.89509534007323),
                  level: 3
                };
                var map = new kakao.maps.Map(container, options);

                var markerPosition  = new kakao.maps.LatLng(37.48534283502681, 126.89509534007323); 
                var marker = new kakao.maps.Marker({
                    position: markerPosition
                });
                marker.setMap(map);
              `,
            }}
          ></script>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </body>
      </Html>
    );
  }
}
