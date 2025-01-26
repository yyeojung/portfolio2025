import SubTitle from 'components/SubTitle';
import Tag from 'components/Tag';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrap = styled.div`
  ul {
    margin-top: 16rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 6rem 0;

    li {
      width: 33.3333%;
      text-align: center;

      .tag {
        margin: auto;
      }
      &:hover {
        .tag {
          background: var(--red);
        }
        p {
          color: var(--yellow);
        }
      }
      p {
        margin-top: 2rem;
        font-size: 3.6rem;
        font-weight: 700;
        text-shadow: var(--textShadow);
      }
    }
  }
`;

export default function Contents() {
  return (
    <Wrap>
      <SubTitle text='CONTENTS' />
      <ul>
        <li>
          <Link to='/about'>
            <Tag text='LEVEL 1' />
            <p className='sub_font'>
              ABOUT ME
              <br />
              STATS & ABILITIES
            </p>
          </Link>
        </li>
        <li>
          <Link to='/company-project'>
            <Tag text='LEVEL 2' />
            <p className='sub_font'>COMPANY PROJECT</p>
          </Link>
        </li>
        <li>
          <Link to='/toy-project'>
            <Tag text='LEVEL 3' />
            <p className='sub_font'>
              QUEST.
              <br />
              TOY PROJECT
            </p>
          </Link>
        </li>
        <li>
          <Link to='/contact'>
            <Tag text='LEVEL 4' />
            <p className='sub_font'>CONTACT</p>
          </Link>
        </li>
        <li>
          <Link to='/game'>
            <Tag text='LEVEL 5' />
            <p className='sub_font'>GAME</p>
          </Link>
        </li>
      </ul>
    </Wrap>
  );
}
