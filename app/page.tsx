import MemoryGame from "@/components/MemoryGame";

export default function Home() {
  return (
      <div className={styles.twenty48}>
          <Head>
              <title>Play 2048</title>
              <meta
                  name="description"
                  content="Friendly 2048 Superform theme game"
              />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="favicon.ico" />
              <link
                  rel="apple-touch-icon"
                  sizes="180x180"
                  href="apple-touch-icon.png"
              />
              <link rel="icon" type="image/png" sizes="32x32" href="favicon32.png" />
              <link rel="icon" type="image/png" sizes="16x16" href="favicon16.png" />
          </Head>
          <div className={styles.buttonContainer}>
              <button className={styles.leaderboardButton}
                      onClick={() => router.push("/leaderboard")}>
                  🏆 Win Leaderboard
              </button>
              <button className={styles.leaderboardButton}
                      onClick={() => router.push("/leaderboard?type=score")}>
                  🏆 Score Leaderboard
              </button>
          </div>
          <header>
              <h1>2048</h1>
              <Score />
          </header>
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
              <MemoryGame />
          </main>
          <div>
              <Timer />
          </div>
          <div>
              <SaveForm />
          </div>
          <footer>
              <div className={styles.socials}>
                  <a href="https://x.com/diol4ik" target="_blank" rel="noopener">
                      <Image
                          src="social-x.svg"
                          alt="D1ol on X"
                          width={32}
                          height={32}
                      />
                  </a>
                  <a href="https://diol4ik.t.me/" target="_blank" rel="noopener">
                      <Image
                          src="social-telegram.svg"
                          alt="D1ol on Telegram"
                          width={32}
                          height={32}
                      />
                  </a>
              </div>
              <div>Forked and customized with ❤️ by D1ol only for Superform
                  Community
              </div>
          </footer>
      </div>

  );
}
