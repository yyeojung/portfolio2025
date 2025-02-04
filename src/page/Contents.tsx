import { breakTablet } from 'assets/style/common';
import Glitter from 'components/Giltter';
import Monster from 'components/Monster';
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

      a {
        display: block;
        height: 100%;
      }
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
  @media (max-width: ${breakTablet}) {
    li {
      width: 50%;
    }
  }
`;

const MonsterWrap = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  gap: 1rem;
  animation: move 20s infinite linear;

  .monster {
    animation: moveReverse 20s infinite linear;
  }

  @keyframes move {
    0% {
      left: 0;
    }
    50% {
      left: calc(100% - 42rem);
    }
    100% {
      left: 0;
    }
  }
  @keyframes moveReverse {
    0%,
    49.9% {
      transform: scaleX(1);
    }
    50%,
    100% {
      transform: scaleX(-1);
    }
  }
`;

export default function Contents() {
  return (
    <Wrap>
      <SubTitle text='CONTENTS' />
      <Link className='next_link' to='/about'></Link>
      <Glitter type='type2' left={6} top={24} />
      <Glitter type='type1' right={10} />
      <Glitter type='type1' right={5} top={25} />
      <Glitter type='type3' left={10} top={20} />
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
      <MonsterWrap>
        <Monster />
        <Monster />
        <Monster />
      </MonsterWrap>
    </Wrap>
  );
}
