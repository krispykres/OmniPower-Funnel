import styles from '../styles/Home.module.scss'
import JotFormReact from 'jotform-react';
import { useState } from 'react';


export default function Home() {
	const [formSubmitted, setFormSubmitted] = useState(false);

	const handleSubmit = () => {
		setFormSubmitted(true);
		window.scrollTo(0, 0);
		window.open('/thank-you', '_self');
	};

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

			<div className={styles.funnel} style={formSubmitted ? {display: "none"} : {display: "contents"}}>
				<JotFormReact
					formURL="https://form.jotform.com/222154636740049"
					autoResize={true} // should form auto-resize
					onSubmit={handleSubmit}
				/>
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
