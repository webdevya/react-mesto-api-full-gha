function getLikesCount(likes) {
  return likes.length;
}

function getIsUserLiked(likes, userId) {
  return likes.some(id => id === userId);
}


export {
  getLikesCount,
  getIsUserLiked
}
