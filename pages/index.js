import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Jotform from 'react-jotform';


export default function Home() {
  return (
    <div className={styles.site}>
		<Head>
			<title>OmniPower Quote</title>
			<meta name="description" content="OmniPower solar quote estimate" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<main className={styles.wrapper}>
			<div className={styles.header}>

				<span className={styles.logoDesktop}>
					<Image src="/logo-desktop.png" alt="Vercel Logo" width={381} height={66} />
				</span	>
				<span className={styles.logoMobile}>
					<Image src="/logo-mobile.png" alt="Vercel Logo" width={260} height={45} />
				</span>

			</div>

			<div className={styles.funnel}>
				<Jotform 
					src="https://form.jotform.com/222154636740049"
				/>
			</div>

		</main>

      <footer className={styles.footer}>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        > */}
          © 2022 OmniPower{' '}
          {/* <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
        {/* </a> */}
      </footer>
    </div>
  )
}
