import styled from "@emotion/styled";

export const StatisticsBlock = styled.section`
 width: 100%;
    height: auto;
    padding-top: 60px;
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 60px;
    align-items: center;
`
export const StatisticsTitle = styled.h2`
font-size: 34px;
    font-weight: 700;
    color: tomato;
`
export const StatisticsList = styled.ul`
width: 100%;
    display: flex;
    justify-content: space-around;
`
export const StatisticsItem = styled.li`
width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    padding-top: 28px;
    padding-bottom: 28px;
    color: white;
`
export const ItemLabel = styled.span`
font-size: 28px;
`
export const ItemPercentage = styled.span`
font-size: 28px;
`