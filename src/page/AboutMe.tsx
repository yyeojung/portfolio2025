import SubTitle from 'components/SubTitle';
import Tag from 'components/Tag';
import VioletBox from 'components/VioletBox';
import styled from 'styled-components';

const Wrap = styled.div`
  position: relative;

  .title {
    position: absolute;
    top: 0;
  }
  .box_wrap {
    display: flex;
    justify-content: space-between;
    padding-top: 12rem;
    gap: 8rem;

    .violet_box {
      max-width: 80rem;

      strong {
        background: #fff;
        color: #000;
        padding: 0 1rem;
      }

      &.hello {
        margin-top: 18rem;
      }
    }
  }
`;

export default function Contents() {
  return (
    <Wrap>
      <div className='title'>
        <Tag className='red ml_20' text='LEVEL 1' />
        <SubTitle className='sub' text='ABOUT ME' />
      </div>
      <div className='box_wrap'>
        <VioletBox className='hello' text='HELLO'>
          <p>
            안녕하세요!
            <br />
            저는 원활한 커뮤니케이션 능력과 꾸준한 학습을 바탕으로 문제를
            해결하는 능력을 갖추고 있습니다. <br />
            저의 장점으로는 적극적인 의사소통으로 팀원들과의 문제 없는 협업이
            가능하며 지속적인 학습으로 문제 해결을 할 수 있도록 노력하는
            것입니다.
            <br />
            코딩을 하는 것은 저에게 즐거움과 성취감을 주어 꾸준한 학습의 동기가
            되어줍니다. 배움을 계속하고 응용함으로써 항상 최선의 결과를 위해
            노력하겠습니다!
          </p>
        </VioletBox>
        <div className='d_flex gap60 flex_column'>
          <VioletBox text='CAREER'>
            <strong>(주) 유엑스스토리</strong>
            <p>2023.02.16 ~ 재직 중</p>
          </VioletBox>
          <VioletBox text='SKILLS'>
            <ul>
              <li>
                <strong>Html, Css</strong>
                <p>
                  JavaScript를 사용하지 않아도 충분히 구현 가능한 Html,Css를
                  활용하여 UI/UX 개선하는 것에 중점을 둡니다.
                </p>
              </li>
              <li>
                <strong>JavaScript, TypeScript</strong>
                <p>
                  기본적인 JavaScript를 학습했고 TypeScript를 이용해 안전하고
                  유지보수성을 높이기 위해 노력합니다.
                </p>
              </li>
              <li>
                <strong>React, Zustand</strong>
                <p>
                  데이터 전달을 위한 props의 개념을 이해하고 활용할 수 있습니다.
                </p>
                <p>
                  state를 효과적으로 관리하기 위해 Zustand를 사용하여 전역
                  상태관리를 경험해보았습니다.
                </p>
              </li>
            </ul>
          </VioletBox>
        </div>
      </div>
    </Wrap>
  );
}
