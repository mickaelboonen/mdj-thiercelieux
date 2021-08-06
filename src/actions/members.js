export const DISPLAY_MEMBER = 'DISPLAY_MEMBER';
export const displayMember = (id) => ({
  type: DISPLAY_MEMBER,
  id,
});

export const FOCUS_MEMBER = 'FOCUS_MEMBER';
export const focusMember = () => ({
  type: FOCUS_MEMBER,
});