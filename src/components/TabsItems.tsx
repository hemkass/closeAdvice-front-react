'use client'
import React, { useState } from 'react'

import {
	Tabs,
	TabsHeader,
	TabsBody,
	Tab,
	TabPanel,
} from '@material-tailwind/react'

import {
	Square3Stack3DIcon,
	UserCircleIcon,
	Cog6ToothIcon,
} from '@heroicons/react/24/solid'

import MovieTab from '@movies/Movies'
import SerieTab from '@series/Series'
import BooksTab from '@books/Books'

const TabsItems = () => {
	const [activeTab, setActiveTab] = useState('movies')
	console.log('useState', activeTab)
	const data = [
		{
			label: 'movies',
			id: '1',
			value: 'movies',
			icon: Square3Stack3DIcon,
			comp: MovieTab,
		},
		{
			label: 'series',
			id: '2',
			icon: Cog6ToothIcon,
			value: 'series',
			comp: SerieTab,
		},
		{
			label: 'books',
			id: '3',
			value: 'books',
			icon: UserCircleIcon,
			comp: BooksTab,
		},
	]
	return (
		<Tabs className='w-full' value={activeTab}>
			<TabsHeader
				className='flex items-center gap-10 '
				placeholder={''}
				indicatorProps={{
					className:
						'bg-transparent border-b-2 border-gray-900 shadow-none rounded-none',
				}}>
				{data.map(({ id, label, value, icon }) => (
					<Tab
						key={id}
						value={value}
						placeholder={''}
						onClick={() => setActiveTab(value)}
						className={
							activeTab === value
								? 'text-gray-900,rounded-none border-b border-blue-gray-50 bg-transparent p-0'
								: ''
						}>
						<div className='flex items-center gap-2'>
							{React.createElement(icon, { className: 'w-5 h-5' })}
							{label}
						</div>
					</Tab>
				))}
			</TabsHeader>
			<TabsBody className='card' placeholder={''}>
				{data.map(({ value, comp, id }) => (
					<TabPanel key={value} value={value}>
						{activeTab === value &&
							React.createElement(comp, {
								key: id,
							})}
					</TabPanel>
				))}
			</TabsBody>
		</Tabs>
	)
}
export default TabsItems
