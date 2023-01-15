import './App.css'
import { AiOutlineQuestionCircle } from 'react-icons/ai'

function App() {
	return (
		<>
			<div className='d-flex flex-row global-container'>
				<div className='col-6 p-3 editor-container'>
					<div id='editor-header' className='d-flex justify-content-between'>
						<h3>Editor</h3>
						<div id='actions-editor-buttons'>
							<button className='action-button'>Clear</button>
							<button className='action-button'>Copy</button>
						</div>
					</div>
					<div id=''></div>
				</div>
				<div className='col-6 p-3 previewer-container' id='preview'>
					<h3>Previewer</h3>
				</div>
			</div>
			<div id='separator' className='separator'></div>
			<div id='documentation' className='documentation'>
				<a
					className='doc-button'
					href='#'
					data-toggle='tooltip'
					data-bs-custom-class='custom-tooltip'
					title='Markdown Documentation'
				>
					<AiOutlineQuestionCircle size={40} />
				</a>
			</div>
		</>
	)
}

export default App
