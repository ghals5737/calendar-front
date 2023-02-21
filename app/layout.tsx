'use client';
import '../styles/globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html >
      <head>              
        <link href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css' rel='stylesheet' type='text/css'/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <link rel="icon" href="../img/favicon.ico" />
        <title>MINICAL</title>
      </head>
      <body>            
        {children}
      </body>
    </html>
  )
}
