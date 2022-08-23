import styles from '../styles/Home.module.scss'
import { useEffect } from 'react';


export default function Home() {
	useEffect(() => {
		const head = document.querySelector('head');
		const script = document.createElement('script');
		script.setAttribute(
		  'src',
		  'https://assets.calendly.com/assets/external/widget.js'
		);
		head.appendChild(script);
	}, []);

  return (
    <div className={styles.site}>
		<main className={styles.wrapper}>
			<div className={styles.header}>

				<span className={styles.logoDesktop}>
					<a href=".">
						<img src="/logo-desktop.png" alt="Omni Power Logo" width={300} height={52}></img>
					</a>
				</span	>
				<span className={styles.logoMobile}>
					<a href=".">
						<img src="/logo-mobile.png" alt="Omni Power Logo" width={260} height={45}></img>
					</a>
				</span>

			</div>
			<div className={styles.calendly}>
				<div 
					className={`calendly-inline-widget ${styles.calendlyWidget}`} 
					data-url="https://calendly.com/omnipower/schedule-a-call" 
					style={{minWidth: "320px", height: "800px"}}>
				</div>
			</div>

		</main>

		<div className={styles.secure}>
			<img className={styles.seal} src='/security-seal.png' alt='Security Seal' width={100} height={100}></img>
		</div>

		<footer className={styles.footer}>
			{/* <a
				href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
				target="_blank"
				rel="noopener noreferrer"
			> */}
				© 2022{' '}
				<span className={styles.logo}>
					<img src="/logo-footer.svg" alt="Omni Power Logo" width={120} height={20}></img>
				</span>
		{/* </a> */}
		</footer>
    </div>
  )
}
