import Image from 'next/image'
import TabsItems from '@components/TabsItems'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Close advice',
	description:
		'evalue tes livres, séries et films préférés et partage avec tes amis',
}

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<TabsItems></TabsItems>
		</main>
	)
}
