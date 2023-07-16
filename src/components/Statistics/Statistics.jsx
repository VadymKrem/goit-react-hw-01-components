import PropTypes from 'prop-types';
import getRandomHexColor from "./GetRandomColor";
import {StatisticsBlock, StatisticsTitle, StatisticsList, StatisticsItem, ItemLabel, ItemPercentage } from './Statistics.module.jsx';

export const Statistics = ({ title, stats }) => {
    return (
        <StatisticsBlock>
            {title &&  <StatisticsTitle>{ title }</StatisticsTitle>}
            <StatisticsList>
                {stats.map(({ id, label, percentage }) => {
                       return ( <StatisticsItem key={id} style={{backgroundColor: getRandomHexColor() }} >
                            <ItemLabel>{label}</ItemLabel>
                            <ItemPercentage>{percentage}%</ItemPercentage>
                        </StatisticsItem>)
                })}
            </StatisticsList>
        </StatisticsBlock>
    )
}

Statistics.propTypes = {
        title: PropTypes.string,
        stats: PropTypes.array
    }