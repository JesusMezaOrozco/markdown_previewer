import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { Tooltip, OverlayTrigger } from 'react-bootstrap'

import './App.css'

const defaultEditorValue =
	'# Hi! \n![Markdown Previewer!](/waving_hand.png "Markdown") \n ## Welcome to this  Markdown  previewer :) \n #### Recommendations \n- [Find the code here](https://github.com/JesusMezaOrozco/markdown_previewer), make a fork to create your own version of it. \n- You only need `npm i && npm run start` script to **run** this project.\n- If you need markdown syntax guidance, please click the  ? button. \n>> All the previewer content is in this div:\n'.concat(
		'```\n<div id="previewer-content">\n</div>\n```'
	)

function App() {
	const [editorContent, setEditorContent] = useState(defaultEditorValue)
	const [showAlert, setShowAlert] = useState(false)

	const handleEditorValue = (event) => {
		setEditorContent(event.target.value)
	}
	const clearEditor = () => {
		setShowAlert(false)
		setEditorContent('')
	}
	const copyEditorContent = () => {
		if (editorContent !== '') {
			setShowAlert(true)
			navigator.clipboard.writeText(editorContent)
		}
	}
	return (
		<>
			<div className='d-flex flex-row global-container'>
				<div className='col-6 p-3 editor-container'>
					<div
						id='editor-header'
						className='d-flex justify-content-between align-items-center mb-3'
					>
						<h3>Editor</h3>
						{showAlert && <div>{`Content in clipboard! :)`}</div>}
						<div id='actions-editor-buttons'>
							<button className='action-button' onClick={clearEditor}>
								Clear
							</button>
							<button className='action-button' onClick={copyEditorContent}>
								Copy
							</button>
						</div>
					</div>
					<div id='editor-pad'>
						<textarea
							id='editor'
							autoComplete='off'
							className='editor-pad'
							value={editorContent}
							onChange={handleEditorValue}
						></textarea>
					</div>
				</div>
				<div className='col-6 p-3 previewer-container'>
					<div id='previewer-header'>
						<h3>Previewer</h3>
						<hr />
					</div>
					<div id='preview' className='previewer-content'>
						<ReactMarkdown>{editorContent}</ReactMarkdown>
					</div>
				</div>
			</div>
			<div id='separator' className='separator'></div>
			<div id='documentation' className='documentation'>
				<OverlayTrigger
					placement={'left'}
					overlay={<Tooltip id={`tooltip-doc`}>Markdown documentation</Tooltip>}
				>
					<a
						className='doc-button'
						href='https://www.markdownguide.org/getting-started/'
						target='_blank'
					>
						<AiOutlineQuestionCircle size={40} />
					</a>
				</OverlayTrigger>
			</div>
			<p
				style={{
					color: 'white',
					fontSize: 10,
					position: 'absolute',
					top: 50,
					right: 16,
				}}
			>
				Developed by Jesus Meza
			</p>
		</>
	)
}

export default App
