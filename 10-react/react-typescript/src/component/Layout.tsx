import { FunctionComponent } from "react";

interface Props {
	children: React.ReactNode
}

export default function Layout({ children }: { children: React.ReactNode }): FunctionComponent<Props> {
	return <>
		<h1>This is a great application!</h1>
		<div>
			{children}
		</div>
	</>
}

