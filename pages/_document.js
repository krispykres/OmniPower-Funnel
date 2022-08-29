import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
        <Head>
            <Script id="google-tag-manager" strategy="afterInteractive">
                {`
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-PHBB3B4');
                `}
            </Script>
            <Script id="facebook-pixel" strategy="afterInteractive">
                {`
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '704719686821979');
                    fbq('track', 'PageView');
                `}
            </Script>
            <noscript
                dangerouslySetInnerHTML={{ __html:
                    `<img height="1" width="1" style="display:none"
                    src="https://www.facebook.com/tr?id=704719686821979&ev=PageView&noscript=1"/>`
                }}
            ></noscript>
			<title>Omni Power Solar Quote</title>
			<meta name="description" content="Get your FREE quote with Omni Power" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
        <body>
            <noscript
                dangerouslySetInnerHTML={{ __html:
                    `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PHBB3B4"
                    height="0" width="0" style="display:none;visibility:hidden"></iframe>`
                }}
            ></noscript>
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}