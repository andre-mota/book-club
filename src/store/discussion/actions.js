// src/store/discussion/actions

/* discussion data */
// Type
export const DISCUSSION_DATA = "discussion/DATA";

// Update the store
export function discussionData(discussion) {
  return {
    type: DISCUSSION_DATA,
    payload: discussion.id,
  };
}
