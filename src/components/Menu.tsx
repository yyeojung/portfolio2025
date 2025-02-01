import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import imgMenu from '../assets/image/icon_menu.svg';
import imgClose from '../assets/image/icon_close.svg';
import styled from 'styled-components';

const NavMenu = styled.div`
  position: absolute;
  top: 4rem;
  right: 4rem;
  z-index: 20;
  .btn_menu {
    width: 6rem;
    height: 6rem;
    background: url(${imgMenu}) no-repeat;
    background-size: 100% 100%;

    &:hover {
      transform: scale(1.1);
    }
  }
  .btn_close {
    position: absolute;
    top: 2.4rem;
    right: 2.6rem;
    width: 2.4rem;
    height: 2.4rem;
    background: url(${imgClose}) no-repeat center center;
    background-size: 100% 100%;
  }
  .list {
    position: absolute;
    top: 0;
    right: -6rem;
    background: #fff;
    color: #000;
    border: 0.2rem solid #000;
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
    box-shadow: var(--btnShadow);
    width: 36rem;
    z-index: 20;
    animation: aniMenu 0.2s linear forwards;
    &.close {
      animation: aniMenuClose 0.2s linear forwards;
    }

    ul {
      padding: 5.8rem 2.4rem 5.8rem;
      li a {
        display: block;
        width: 100%;
        height: 6rem;
        line-height: 6rem;
        font-size: 2.8rem;
        font-family: Geo, sans-serif;

        i {
          display: none;
        }

        &:hover {
          background: var(--yellow);
          padding-left: 0.8rem;
          i {
            display: inline-block;
          }
        }
      }
    }
  }

  @keyframes aniMenu {
    0% {
      right: -40rem;
    }
    100% {
      right: -6rem;
    }
  }
  @keyframes aniMenuClose {
    0% {
      right: -6rem;
    }
    100% {
      right: -40rem;
    }
  }
`;

interface MenuProps {
  notHome: boolean;
}

export default function Menu({ notHome }: MenuProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const onClickMenu = () => {
    if (menuOpen) {
      setMenuClosing(true);
    } else {
      setMenuOpen(true);
    }
  };

  const onAnimationEnd = () => {
    if (menuClosing) {
      setMenuOpen(false);
      setMenuClosing(false);
    }
  };

  const onClickLink = () => {
    setMenuClosing(true);
  };

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setMenuClosing(true);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      {notHome && (
        <NavMenu ref={menuRef}>
          <button
            className='btn_menu'
            onClick={onClickMenu}
            aria-label='메뉴'
          ></button>
          {(menuOpen || menuClosing) && (
            <div
              className={`list ${menuClosing ? 'close' : ''}`}
              onAnimationEnd={onAnimationEnd}
            >
              <button
                className='btn_close'
                onClick={onClickMenu}
                aria-label='닫기'
              ></button>
              <ul>
                <li>
                  <Link onClick={onClickLink} to='/'>
                    HOME<i> 🏠</i>
                  </Link>
                </li>
                <li>
                  <Link onClick={onClickLink} to='/contents'>
                    CONTENTS <i>📚</i>
                  </Link>
                </li>
                <li>
                  <Link onClick={onClickLink} to='/about'>
                    ABOUT <i>🙋🏻‍♀️</i>
                  </Link>
                </li>
                <li>
                  <Link onClick={onClickLink} to='/company-project'>
                    COMPANY PROJECT <i>🏢</i>
                  </Link>
                </li>
                <li>
                  <Link onClick={onClickLink} to='/toy-project'>
                    TOY PROJECT <i>🛠️</i>
                  </Link>
                </li>
                <li>
                  <Link onClick={onClickLink} to='/contact'>
                    CONTACT <i>📞</i>
                  </Link>
                </li>
                <li>
                  <Link onClick={onClickLink} to='/game'>
                    GAME <i>🎮</i>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </NavMenu>
      )}
    </>
  );
}
