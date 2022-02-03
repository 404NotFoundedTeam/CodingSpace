import styled from 'styled-components'

const EditorsWrapper  = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .pane {
    height: 50vh;
    display: flex;
  }

  .resultContainer {
    width: 100%;
    height: 100%;
    padding: 5px;
    position: relative;

    &:hover{
      .changeEditorSizeBtn{
        opacity: 1;
        visibility: visible;
      }
    }
    .changeEditorSizeBtn{
        position: absolute;
        top: 15px;
        right: 15px;
        opacity: 0;
        visibility: collapse;
        transition: all 0.3s ease-out;
        z-index: 999999;
        font-size: 24px;
        padding: 3px 20px !important;
    }
    
    &.bigEditor{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      min-height: 100vh;
      z-index: 99999;
    }
  }

  .editor-container {
    flex-grow: 1;
    flex-basis: 0;
    display: flex;
    flex-direction: column;
    padding: 5px;
    background: transparent;
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
    background-color: rgb(0, 33, 35);
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

    iframe {
      flex: 1;
    }

    .pane {
      height: 100vh !important;
      background: rgba(21, 50, 52, 0.4);
      backdrop-filter: blur(2.8px);
      -webkit-backdrop-filter: blur(2.8px);
    }

    .bottom-pane {
      flex: 1;
    }

    .top-pane {
      flex-direction: column;
      width: 400px;

      & > div {
        height: 33.333%;
      }
    }
  }
`

const EditorsHeaderWrapper = styled.div`
	width: 100%;
  	padding: 0.5em 1rem;
  	background: red;
`
export {EditorsHeaderWrapper}
export default EditorsWrapper;