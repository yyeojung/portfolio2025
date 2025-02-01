import SubTitle from 'components/SubTitle';
import Tag from 'components/Tag';
import VioletBox from 'components/VioletBox';
import imgBook from '../assets/image/toy_book.png';
import imgCamping from '../assets/image/toy_camping.png';
import imgTravel from '../assets/image/toy_travel.png';
import { Link } from 'react-router-dom';
import { ProjectWrap } from './CompanyProject';

export default function CompanyProject() {
  return (
    <ProjectWrap>
      <Link className='next_link' to='/contact'></Link>
      <div className='title'>
        <Tag className='red ml_20' text='LEVEL 3' />
        <SubTitle text='TOY PROJECT' />
      </div>
      <div className='box_wrap'>
        <VioletBox text='bookbook' link='https://www.google.com'>
          <img src={imgBook} alt='북적북적' />
          <div className='mt_10 skill'>
            <span>React.js</span>
            <span>typescript</span>
            <span>react-select</span>
            <span>zustand</span>
            <span>react-datepicker</span>
          </div>
          <p className='mt_10'>
            - 알라딘 API를 이용한 도서 검색,정보확인인
            <br />
            - zustand로 상태 관리 및 railway 이용한 서버 배포
            <br />- 독서량 차트로 표출
          </p>
        </VioletBox>
        <VioletBox text='goCamping' link='https://www.google.com'>
          <img src={imgCamping} alt='고캠핑' />
          <div className='mt_10 skill'>
            <span>React.js</span>
            <span>Next.js</span>
            <span>typescript</span>
            <span>firebase</span>
            <span>ContextAPI</span>
          </div>
          <p className='mt_10'>
            - 고캠핑 API를 이용한 캠핑장 검색 기능
            <br />
            - 커스텀 훅으로 모달창 관리
            <br />- firebase 이용한 서버 관리
          </p>
        </VioletBox>
        <VioletBox text='travel pocket' link='https://www.google.com'>
          <img src={imgTravel} alt='트레블 포켓' />
          <div className='mt_10 skill'>
            <span>React.js</span>
            <span>Styled-component</span>
            <span>react-datepicker</span>
          </div>
          <p className='mt_10'>
            - 테마 모드 설정 <br />
            - 환율, 여행 기간 계산
            <br />- 여행지별 가계부 생성
          </p>
        </VioletBox>
      </div>
    </ProjectWrap>
  );
}
