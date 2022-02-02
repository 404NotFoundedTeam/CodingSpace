import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const CardWrapper = styled.div`
  width: 300px;
  padding: 8px;
  background: rgba(21, 50, 52, 0.4);
border-radius: 3px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(2.8px);
-webkit-backdrop-filter: blur(2.8px);
border: 1px solid rgba(21, 50, 52, 0.21);
  img {
    border-radius: 3px;
    width: 100%;
  }

  .card-main {
    margin-top: 10px;
    padding: 4px;
    img{
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
    .author-info {
      gap: 10px;
    }
  }
`

const Card = () => {
  return (
    <CardWrapper>
      <img src="https://www.futurenextsolution.com/storage/userfiles/blog/temp_1633259121_371422708043_z06ltyry8qty_lara1.jpg" alt="" />
      <div className="card-main d-flex align-items-center justify-content-between">
        <div className='author-info d-flex align-items-center'>
          <img src="https://www.futurenextsolution.com/storage/userfiles/blog/temp_1633259121_371422708043_z06ltyry8qty_lara1.jpg" alt="" />
          <div>
            <p className='m-0'>Pen name</p>
            <p className='m-0 small'>Author</p>
          </div>
        </div>
        <FontAwesomeIcon icon={faEllipsisH} />
      </div>
    </CardWrapper>
  );
}

export default Card;