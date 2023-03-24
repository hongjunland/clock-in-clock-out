// '2023-03-12' 형태를 넣어서 오늘인지 아닌지 판별
function isToday(dateString: string): boolean {
  const today = new Date();
  const date = new Date(dateString);
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

function isSameYear(dateString: string): boolean{
    const today = new Date();
    const date = new Date(dateString);
    return today.getFullYear() === date.getFullYear();
}

export { isToday, isSameYear};
