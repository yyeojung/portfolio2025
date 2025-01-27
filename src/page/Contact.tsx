import styled from 'styled-components';
import imgShadow from '../assets/image/WalkingDemo-Shadow.png';
import imgWalking from '../assets/image/WalkingDemo-EMMY-SHEET.png';
import imgWalking2 from '../assets/image/WalkingDemo-PATTY-SHEET.png';
import imgWalking3 from '../assets/image/WalkingDemo-SARA-SHEET.png';
import boxArrow from '../assets/image/pixel_arrow.svg';
import logoGithub from '../assets/image/logo_github.png';
import logoNotion from '../assets/image/logo_notion.png';
import logoTistory from '../assets/image/logo_tistory.png';
import VioletBox from 'components/VioletBox';
import Tag from 'components/Tag';
import SubTitle from 'components/SubTitle';
import { Link } from 'react-router-dom';

const imgSize = 14.4;

const Wrap = styled.div`
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  display: flex;
  gap: 6rem;
  justify-content: center;
  margin-top: 8rem;
  .violet_box {
    width: 34rem;
    min-height: 44rem;
    .tag {
      left: 50%;
      transform: translateX(-50%);
    }
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 5rem 2rem 2rem;
      height: 100%;
    }
    .character {
      position: relative;
      width: ${imgSize}rem;
      height: ${imgSize}rem;
      overflow: hidden;
      margin: 2rem 0 4rem;

      &::before {
        display: block;
        content: '';
        width: ${imgSize}rem;
        height: ${imgSize}rem;
        image-rendering: pixelated;
        opacity: 0.4;
        background: url(${imgShadow}) center center / 100% no-repeat;
      }

      img {
        image-rendering: pixelated;
        width: ${imgSize * 4}rem;
        height: ${imgSize * 4}rem;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
    .box {
      position: relative;
      background: #fff;
      border-radius: 2rem;
      padding: 1rem;
      width: 100%;

      .inner {
        width: 100%;
        border-radius: 2rem;
        padding: 1rem 4rem 1rem 1rem;
        border: 0.1rem solid #000;
        min-height: 14rem;

        &::before {
          position: absolute;
          bottom: 2rem;
          right: 2rem;
          display: block;
          content: '';
          width: 2.8rem;
          height: 2.8rem;
          background: url(${boxArrow}) center center / 100% no-repeat;
        }
      }
      .sub_font {
        text-shadow: var(--textShadow);
        color: #fff;
        font-size: 3.2rem;
        font-weight: bold;
        display: flex;
        align-items: center;
        gap: 0.8rem;

        img {
          width: 2.4rem;
          height: 2.4rem;
          border-radius: 0;
        }
      }
      .desc {
        color: #000;
      }
    }

    & a:hover {
      .character img {
        animation: walkAnimation 0.6s steps(4) infinite;
      }
      .inner::before {
        animation: arrowAnimation 0.6s infinite;
      }
    }
  }
  @keyframes walkAnimation {
    0% {
      transform: translate3d(0%, 0%, 0);
    }
    100% {
      transform: translate3d(-100%, 0%, 0);
    }
  }
  @keyframes arrowAnimation {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export default function Contact() {
  return (
    <Wrap>
      <Link className='next_link' to='/game'></Link>
      <div className='title'>
        <Tag className='red ml_20' text='LEVEL 4' />
        <SubTitle className='sub' text='CONTACT' />
      </div>
      <Contents>
        <VioletBox text='PLAYER1' link='https://github.com/yyeojung'>
          <div className='character'>
            <img src={imgWalking} alt='walk' />
          </div>
          <div className='box'>
            <div className='inner'>
              <p className='sub_font'>
                GITHUB
                <img src={logoGithub} alt='GITHUB' />
              </p>
              <p className='desc'>모험가의 코드 창고입니다.</p>
            </div>
          </div>
        </VioletBox>
        <VioletBox
          text='PLAYER2'
          link='https://distinct-feels-7f8.notion.site/1b9f7bfe6bfd4e27846b77f275be8ba6'
        >
          <div className='character'>
            <img src={imgWalking2} alt='walk' />
          </div>
          <div className='box'>
            <div className='inner'>
              <p className='sub_font'>
                BLOG
                <img src={logoTistory} alt='GITHUB' />
              </p>
              <p className='desc'>
                이 곳은 비밀 아지트입니다.
                <br /> 탐험해보시겠어요?
              </p>
            </div>
          </div>
        </VioletBox>
        <VioletBox text='PLAYER3' link='https://hhyj0000.tistory.com/'>
          <div className='character'>
            <img src={imgWalking3} alt='walk' />
          </div>
          <div className='box'>
            <div className='inner'>
              <p className='sub_font'>
                PORTFOLIO
                <img src={logoNotion} alt='GITHUB' />
              </p>
              <p className='desc'>모든 작품과 여정을 한눈에 볼 수 있습니다.</p>
            </div>
          </div>
        </VioletBox>
      </Contents>
    </Wrap>
  );
}
