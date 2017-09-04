import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()

    return (
      <html>
        <Head>
          {styleTags}
          <style>{`body { margin: 0; }`}</style>
          <meta name="theme-color" content="#000"/>
          <title>GG;EZ | thechun.xyz - Chun Rapeepat</title>
          <meta name="description" content="GG;EZ is a website that can help you manage your schedule for the exams duration, It provide interesting features such as Manage & Print your schedule, Share with your friend and a Bot system that can help you manage book-reading schedule automatically."/>
          <meta name="author" content="Chun Rapeepat <chunza2542@hotmail.com>"/>
          <meta name="keywords" content="chunza2542, Chun Rapeepat, thechun, education, Kasertsart, University, exam, schedule, management"/>
          <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body>
          <div className="root">
            {main}
          </div>
          <NextScript />
        </body>
      </html>
    )
  }
}
