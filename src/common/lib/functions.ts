export const getDay = (date: Date) => {
  const month = new Date(date).getMonth();
  const day = new Date(date).getDate();
  return `${month + 1}월 ${day}일`;
};

export const getMonth = (date: Date) => {
  const month = new Date(date).getMonth();
  return `${month + 1}월`;
};
