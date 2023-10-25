import React from "react"

interface IProps {
	title: string
}

export default function Layout({ children, title }: React.PropsWithChildren<IProps>) {
	return <>
		<h1>This is a great application! {title}</h1>
		<div>
			{children}
		</div>
	</>
}

