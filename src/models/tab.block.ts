type HeroIcon = (props: React.ComponentProps<'svg'>) => JSX.Element
export interface TabBlock {
	label: string
	id: string
	value: string
	icon: HeroIcon
	comp: JSX.Element
}
