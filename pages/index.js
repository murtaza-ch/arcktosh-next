import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Boilerplate</title>
        <meta name="description" content="This is a boilerplate for Nextjs" />
      </Head>
      <main>
        <h1>
          Welcome to the better <a href="https://nextjs.org">Next.js!</a> boilerplate!
        </h1>

        <div>
          <a href="https://nextjs.org/docs">
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </div>
      </main>
    </>
  )
}
