import styled from 'styled-components'

const EditorsWrapper  = styled.div`
  display: flex;
  flex-direction: column;
  
  .pane {
    height: 50vh;
    display: flex;
  }

  .editor-container {
    flex-grow: 1;
    flex-basis: 0;
    display: flex;
    flex-direction: column;
    padding: .5rem;
    background-color: hsl(225, 6%, 25%);
  }

  .editor-container.collapsed {
    flex-grow: 0;
  }

  .editor-container.collapsed .CodeMirror-scroll {
    position: absolute;
    overflow: hidden !important;
  }

  .expand-collapse-btn {
    margin-left: .5rem;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
  }

  .editor-title {
    display: flex;
    justify-content: space-between;
    background-color: hsl(225, 6%, 13%);
    color: white;
    padding: .5rem .5rem .5rem 1rem;
    border-top-right-radius: .5rem;
    border-top-left-radius: .5rem;
  }

  .CodeMirror {
    height: 100% !important;
  }

  .code-mirror-wrapper {
    flex-grow: 1;
    border-bottom-right-radius: .5rem;
    border-bottom-left-radius: .5rem;
    overflow: hidden;
  }
	&.horizontal-editor {
	  flex-direction: row !important;
	  iframe{
	    flex: 1;
	  }
	  .pane{
        height: 100vh !important;
	  }
	  .bottom-pane{
	    flex: 1;
	  }
	  .top-pane{
        background-color: hsl(225, 6%, 25%);
        flex-direction: column;
	    width: 400px;
		& > div{
		  height: 33.333%;
		}
	  }
	}
`
export default EditorsWrapper;