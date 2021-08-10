import { DISPLAY_MEMBER, FOCUS_MEMBER } from "src/actions/members";
import { teamMembers } from "src/data/teamMembers";


const initialState = {
    members: teamMembers,
    memberToDisplay: {},
    onFocus: false,
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case DISPLAY_MEMBER: {   
                     
            const memberToDisplay = teamMembers.find((member) => member.id === Number(action.id));
            console.log('Membre a afficher',memberToDisplay)
            return {
                ...state,
                memberToDisplay: memberToDisplay,
            };
        }
        case FOCUS_MEMBER: {
            return {
                ...state,
                onFocus: true,
            };
        };
        default:
            return state;

    }
};

export default reducer;
