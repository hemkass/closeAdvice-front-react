import { ReactNode } from 'react'

//typescript value
type ModalProps = {
	title: string
	children: ReactNode
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export function Modal({ setShowModal, title, children }: ModalProps) {
	return (
		<div className='card'>
			<h2 className='text-3xl font-bold underline'>{title}</h2>

			{children}
			<div onClick={(e) => e.stopPropagation()}>
				{/* Modal Content */}
				<button onClick={() => setShowModal(false)}>Cancel</button>
			</div>
		</div>
	)
}
