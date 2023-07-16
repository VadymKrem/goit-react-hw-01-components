import PropTypes from "prop-types";

import { FriendAva, FriendItem, FriendName, FriendStatus } from "../FriendListItem/FriendsListItem.module";

export const FriendsListItem = ({status, avatar, name}) => {
    return (
        <FriendItem>
            <FriendStatus>{status}</FriendStatus>
            <FriendAva src={avatar} alt="User avatar" width="48" />
            <FriendName>{name}</FriendName>
        </FriendItem>
    );
}

FriendsListItem.propTypes = {
    status: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string
}