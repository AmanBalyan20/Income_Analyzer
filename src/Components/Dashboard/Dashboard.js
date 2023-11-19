import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import History from '../../History/History';
import { InnerLayout } from '../../styles/Layouts';
import { dollar } from '../../utils/Icons';
import Chart from '../Chart/Chart';

function Dashboard() {
    const {
        totalExpenses,
        incomes,
        expenses,
        totalIncome,
        totalBalance,
        getIncomes,
        getExpenses
    } = useGlobalContext();

    useEffect(() => {
        getIncomes();
        getExpenses();
    }, []);

    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>All Transactions</h1>
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart />
                    </div>
                </div>
                <div className="amount-con">
                    <div className="income">
                        <h2>Total Income</h2>
                        <p>
                        <span>{dollar} :</span>{totalIncome()}
                        </p>
                    </div>
                    <div className="expense">
                        <h2>Total Expense</h2>
                        <p>
                        <span>{dollar} :</span>{totalExpenses()}
                        </p>
                    </div>
                    <div className="balance">
                        <h2>Total Balance</h2>
                        <p>
                            <span>{dollar} :</span>{totalBalance()}
                        </p>
                    </div>
                </div>
                <div className="history-con">
                    <h2 className="history-title"></h2>
                    <History />
                </div>
            </InnerLayout>
        </DashboardStyled>
    );
}

const DashboardStyled = styled.div`
    margin-top:80px;
    .stats-con {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: -3rem;
        margin-bottom: 1rem;

        .chart-con {
            height: 400px;
            width:80%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            /* Additional styling as needed */
        }
    }

    .amount-con {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        margin-top: 2rem;

        .income,
        .expense,
        .balance {
            background: #FCF6F9;
            border: 2px solid #FFFFFF;
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            border-radius: 20px;
            padding: 1rem;
            font-size:16px;

            p {
                color:black;
                font-size: 2rem;
                font-weight: 600;
                span{
                    font-size:1.5rem;
                    font-weight:200;
                }
            }
        }
    }

    .history-con {
        margin-top: 2rem;

        .history-title {
            font-size: 2rem;
            margin-bottom: 1rem;
        }
    }
`;

export default Dashboard;
