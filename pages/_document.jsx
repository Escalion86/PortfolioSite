import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ru">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Pattaya&display=swap"
            rel="stylesheet"
          />
          <meta charSet="UTF-8" />
          <meta
            name="description"
            content="Профессиональный FullStack разработчик сайтов. Разработка от лендингов, до крупных проектов с базами данных и административной панелью."
          />
          <meta
            name="keywords"
            content="Программист, Разработчик сайтов, Разработка сайтов, Разработчик приложений, Разработчик приложения, Разработка приложения, Разработка приложений, Fullstack developer, developer"
          />
          {/* <title>"Разработчик сайтов и приложений Алексей Белинский"</title> */}
        </Head>
        <body className="bg-gradient-to-r from-primary to-secondary dark:from-dark-500 dark:to-dark-700 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
