import PropTypes from 'prop-types';
import { FriendListBlock} from './FriendList.module';
import { FriendsListItem } from "../FriendList/FriendListItem/FriendsListItem";

export const FriendList = ({friends}) => {
    return (
        <FriendListBlock>
            {friends.map(({ id, avatar, name, isOnline }) => {
                return (
                    <FriendsListItem
                        key={id}
                        status={isOnline}
                        avatar={avatar}
                        name={name}
                    />);
            })
            }        
        </FriendListBlock>);
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired
    }