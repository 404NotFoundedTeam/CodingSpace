import React, {useEffect, useState} from "react";
import EditorsWrapper, {EditorsHeaderWrapper} from './EditorsWrapper'
import useLocalStorage from "../../hooks/useLocalStorage";
import Editor from "../../components/Editor/Editor";
import Button from "../../components/button/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCompressAlt, faDice, faExpandAlt, faUser} from "@fortawesome/free-solid-svg-icons";


const CodePage = () => {

	const [html, setHtml] = useLocalStorage('html', 
	`<h1>Hello world!</h1>`
	)
	const [css, setCss] = useLocalStorage('css', 
	`body{
		background: white;
	}`)
	const [js, setJs] = useLocalStorage('js', '')
	const [srcDoc, setSrcDoc] = useState('')
	const [isHorizont, setIsHorizont] = useState(true);
	const [isBig, setIsBig] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
		}, 250)

		return () => clearTimeout(timeout)
	}, [html, css, js])

	const changeEditor = () => {
		setIsHorizont(ref => !ref)
	}
	const changeEditorSize = () => {
		setIsBig(ref => !ref)
	}

	return (
		<>
			<EditorsHeaderWrapper>
				<div className="d-flex justify-content-between align-items-center">
					<div className="projectInfo">
						<h2>Project Name</h2>
					</div>
					<div className="buttons">
						<Button onClick={() => {changeEditor()}}><FontAwesomeIcon style={{fontSize: "24px"}} icon={faDice}/></Button>
						<Button className="ms-2"><FontAwesomeIcon style={{fontSize: "24px"}} icon={faUser}/></Button>
					</div>
				</div>
			</EditorsHeaderWrapper>
			<EditorsWrapper className={isHorizont && "horizontal-editor" || ""}>
				<div className="pane top-pane">
					<Editor
						language="xml"
						displayName="HTML"
						value={html}
						onChange={setHtml}
					/>
					<Editor
						language="css"
						displayName="CSS"
						value={css}
						onChange={setCss}
					/>
					<Editor
						language="javascript"
						displayName="JS"
						value={js}
						onChange={setJs}
					/>
				</div>
				<div className="pane bottom-pane">
					<div className={"resultContainer "  + (isBig ? "bigEditor" : "")}>
						<Button className={"changeEditorSizeBtn"} onClick={() => {changeEditorSize()}}><FontAwesomeIcon icon={!isBig ? faExpandAlt : faCompressAlt}/></Button>
						<iframe
							srcDoc={srcDoc}
							title="output"
							sandbox="allow-scripts"
							frameBorder="0"
							width="100%"
							height="100%"
						/>
					</div>
				</div>
			</EditorsWrapper>
		</>
	)
}

export default CodePage;