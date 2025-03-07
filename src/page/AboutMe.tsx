import { absolute, breakTablet, flexCenter } from 'assets/style/common';
import SubTitle from 'components/SubTitle';
import Tag from 'components/Tag';
import VioletBox from 'components/VioletBox';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrap = styled.div`
  position: relative;

  .title {
    ${absolute('0', '0')}
  }
  .box_wrap {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8rem;
    padding: 12rem 4rem 0;

    .violet_box {
      max-width: 70rem;
      word-break: keep-all;
      &:nth-child(1) {
        grid-row: 2 / 3;
      }
      &:nth-child(2) {
        grid-column: 2 / 3;
      }
      &:nth-child(3) {
        grid-column: 2 / 3;
      }

      .contents {
        height: 100%;

        li:not(:first-child) {
          margin-top: 1rem;
        }
      }
    }
  }

  @media (max-width: ${breakTablet}) {
    .title {
      position: initial;
      ${flexCenter}
      flex-direction: column;
    }
    .box_wrap {
      gap: 6rem;
      grid-template-columns: 1fr;
      padding: 6rem 0rem 0;

      .violet_box {
        max-width: 100%;
        grid-row: auto !important;
        grid-column: auto !important;
      }
    }
  }
`;

export default function Contents() {
  return (
    <>
      <Link className='next_link' to='/company-project'></Link>
      <Wrap>
        <div className='title'>
          <Tag className='red ml_20' text='LEVEL 1' />
          <SubTitle className='sub' text='ABOUT' />
        </div>
        <div className='box_wrap'>
          <VioletBox text='HELLO'>
            <h3 className='inner_title'>
              <span>실용성과 효율성을 추구하는 퍼블리셔</span>
            </h3>
            <br />
            <p>
              안녕하세요! <br />
              꾸준한 학습과 실행력을 바탕으로 실무적으로 성장하는 퍼블리셔
              홍여정입니다. <br />
              저는 기존 Html, Css, Js로만 진행하던 업무에서 Vue.js 프로젝트를
              SCSS를 활용한 스타일 관리도 경험해보았습니다. <br />
              작업 시 실용적이고 효율적인 방식을 최우선으로 고려하며 꾸준한
              학습과 실행력을 통해 문제를 해결합니다.
              <br /> 또한 다양한 팀과의 원활한 소통으로 프로젝트의 가치를
              극대화하는 것을 목표로 합니다.
            </p>
          </VioletBox>
          <VioletBox text='CAREER'>
            <h3 className='inner_title'>
              <span>(주) 유엑스스토리</span>
            </h3>
            <p>2023.02.16 ~ 재직 중</p>
          </VioletBox>
          <VioletBox text='SKILLS'>
            <ul>
              <li>
                <h3 className='inner_title'>
                  <span>Html, Css, SCSS</span>
                </h3>
                <p>
                  JavaScript를 사용하지 않아도 충분히 구현 가능한 Html,Css를
                  활용하여 UI/UX 개선하는 것에 중점을 둡니다.
                </p>
              </li>
              <li>
                <h3 className='inner_title'>
                  <span>JavaScript, TypeScript</span>
                </h3>
                <p>
                  기본적인 JavaScript를 학습했고 TypeScript를 이용해 안전하고
                  유지보수성을 높이기 위해 노력합니다.
                </p>
              </li>
              <li>
                <h3 className='inner_title'>
                  <span>React, Zustand</span>
                </h3>
                <p>
                  데이터 전달을 위한 props의 개념을 이해하고 활용할 수 있습니다.
                  <br />
                  state를 효과적으로 관리하기 위해 Zustand를 사용하여 전역
                  상태관리를 경험해보았습니다.
                </p>
              </li>
            </ul>
          </VioletBox>
          {/* <div className='box_right d_flex gap60 flex_column'>
            <VioletBox text='CAREER'>
              <h3 className='inner_title'>
                <span>(주) 유엑스스토리</span>
              </h3>
              <p>2023.02.16 ~ 재직 중</p>
            </VioletBox>
            <VioletBox text='SKILLS'>
              <ul>
                <li>
                  <h3 className='inner_title'>
                    <span>Html, Css, SCSS</span>
                  </h3>
                  <p>
                    JavaScript를 사용하지 않아도 충분히 구현 가능한 Html,Css를
                    활용하여 UI/UX 개선하는 것에 중점을 둡니다.
                  </p>
                </li>
                <li>
                  <h3 className='inner_title'>
                    <span>JavaScript, TypeScript</span>
                  </h3>
                  <p>
                    기본적인 JavaScript를 학습했고 TypeScript를 이용해 안전하고
                    유지보수성을 높이기 위해 노력합니다.
                  </p>
                </li>
                <li>
                  <h3 className='inner_title'>
                    <span>React, Zustand</span>
                  </h3>
                  <p>
                    데이터 전달을 위한 props의 개념을 이해하고 활용할 수
                    있습니다.
                    <br />
                    state를 효과적으로 관리하기 위해 Zustand를 사용하여 전역
                    상태관리를 경험해보았습니다.
                  </p>
                </li>
              </ul>
            </VioletBox>
          </div> */}
        </div>
      </Wrap>
    </>
  );
}
