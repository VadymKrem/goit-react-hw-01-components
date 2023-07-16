import PropTypes from 'prop-types';
import {ProfileBlock, Description, Avatar, Name, Tag, Location, Stats, StatsLabel, StatsQuantity} from './Profile.module.jsx';


export const Profile = ({username, tag, location, avatar, stats:{followers,views,likes}}) => {
    return (
    <ProfileBlock>
        <Description>
            <Avatar
                src={avatar}
                alt="User avatar"
            />
            <Name>{username}</Name>
            <Tag>@{tag}</Tag>
            <Location>{location}</Location>
        </Description>

        <Stats>
            <li>
                <StatsLabel>Followers</StatsLabel>
                <StatsQuantity>{followers}</StatsQuantity>
            </li>
            <li>
                <StatsLabel >Views</StatsLabel>
                <StatsQuantity>{views}</StatsQuantity>
            </li>
            <li>
                <StatsLabel >Likes</StatsLabel>
                <StatsQuantity>{likes}</StatsQuantity>
            </li>
        </Stats>
    </ProfileBlock>); 
}

Profile.propTypes = {
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.shape(
            {
                followers: PropTypes.number.isRequired,
                views: PropTypes.number.isRequired,
                likes: PropTypes.number.isRequired
            }
        )
    }