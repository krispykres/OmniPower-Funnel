import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import JotFormReact from 'jotform-react';
import { useState, useEffect } from 'react';


export default function Home() {
	const [formSubmitted, setFormSubmitted] = useState(false);

	useEffect(() => {
		const head = document.querySelector('head');
		const script = document.createElement('script');
		script.setAttribute(
		  'src',
		  'https://assets.calendly.com/assets/external/widget.js'
		);
		head.appendChild(script);
	}, []);
	

	const handleSubmit = () => {
		setFormSubmitted(true);
	};

  return (
    <div className={styles.site}>
		<Head>
			<title>OmniPower Solar Quote</title>
			<meta name="description" content="Get your FREE quote with OmniPower" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<main className={styles.wrapper}>
			<div className={styles.header}>

				<span className={styles.logoDesktop}>
					<img src="/logo-desktop.png" alt="OmniPower Logo" width={381} height={66}></img>
				</span	>
				<span className={styles.logoMobile}>
					<img src="/logo-mobile.png" alt="OmniPower Logo" width={260} height={45}></img>
				</span>

			</div>


			<div className={styles.funnel} style={formSubmitted ? {display: "none"} : {display: "contents"}}>
				<JotFormReact
					formURL="https://form.jotform.com/222154636740049"
					autoResize={true} // should form auto-resize
					onSubmit={handleSubmit}
				/>
			</div>

			<div className={styles.calendly} style={!formSubmitted ? {display: "none"} : {display: "contents"}}>
				<div 
					className="calendly-inline-widget" 
					data-url="https://calendly.com/omnipower/schedule-a-call" 
					style={{minWidth: "320px", height: "630px"}}>
				</div>
			</div>

		</main>

      <footer className={styles.footer}>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        > */}
          © 2022{' '}
          <span className={styles.logo}>
			<img src="/logo-footer.svg" alt="OmniPower Logo" width={120} height={20}></img>
          </span>
        {/* </a> */}
      </footer>
    </div>
  )
}
