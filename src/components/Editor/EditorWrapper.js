import styled from 'styled-components'


const EditorWrapper = styled.div`
  width: 100%;
  background: red;
  
  .copy-btn{
    position:relative;
    &:hover{
      .copy-modal{
        opacity: 1;
        visibility: visible;
      }
    }
    .copy-modal{
      transition: all .3s;
      opacity: 0;
      visibility: collapse;
      position:absolute;
		top: 10px;
      right: 60px;
      padding: 3px 0;
      width: 100px;
      font-size: 12px;
      color: #fff;
      background: rgba(21, 50, 52, 0.4);
      backdrop-filter: blur(2.8px);
      -webkit-backdrop-filter: blur(2.8px);
      z-index: 99999999;
    }
  }

  .code-mirror-wrapper {
    font-size: 12px !important;
    letter-spacing: 1px;
  }
`

export default EditorWrapper;