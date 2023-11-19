import React, { useState } from 'react';
import styled from 'styled-components';
import avatar from '../../img/avatar.png';
import { menuItems } from '../../utils/menuItems';

function Navigation({ active, setActive }) {
    return (
        <NavStyled>
            <div className="top-bar">
                <div className="user-con">
                    <img src={avatar} alt="" />
                    <div className="text">
                        <h2>Aman</h2>
                    </div>
                </div>
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active' : ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                ))}
            </ul>
        </NavStyled>
    );
}

const NavStyled = styled.nav`
    position: fixed;
    top: 0;
    z-index:1;
    left: 0;
    width: 100%;
    padding: 1.5rem;
    background: rgba(252, 246, 249, 0.78);
    border-bottom: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    .user-con {
        display: flex;
        align-items: center;
        gap: 1rem;

        img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: 0.1rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }

        h2 {
            color: rgba(34, 34, 96, 1);
            font-size: 1.4rem;
        }
    }

    .menu-items {
        display: flex;
        flex-direction: row;
        li {
            display: flex;
            align-items: center;
            margin-left: 1.5rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.4s ease-in-out;
            color: rgba(34, 34, 96, 0.6);
            position: relative;

            i {
                color: rgba(34, 34, 96, 0.6);
                font-size: 1.4rem;
                margin-right: 0.5rem;
                transition: all 0.4s ease-in-out;
            }

            &:hover {
                color: rgba(34, 34, 96, 1);
                i {
                    color: rgba(34, 34, 96, 1);
                }
            }

            &.active {
                color: rgba(34, 34, 96, 1) !important;
                i {
                    color: rgba(34, 34, 96, 1) !important;
                }
            }
        }
    }
`;

export default Navigation;
