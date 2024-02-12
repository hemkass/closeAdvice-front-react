import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'

import StoreProvider from './StoreProvider'

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
	title: 'Close Advice',
	description: 'Partage tes avis sur tes films, livres, série avec ta team',
}
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body>
				<StoreProvider>{children}</StoreProvider>
			</body>
		</html>
	)
}
