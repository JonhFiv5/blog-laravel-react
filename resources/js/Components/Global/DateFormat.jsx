export default function DateFormat({ date }) {
    function convertDateFormat(inputDate) {
        const dateObject = new Date(inputDate);
      
        const day = String(dateObject.getDate()).padStart(2, '0');
        const month = String(dateObject.getMonth() + 1).padStart(2, '0');
        const year = dateObject.getFullYear();
        const hours = String(dateObject.getHours()).padStart(2, '0');
        const minutes = String(dateObject.getMinutes()).padStart(2, '0');
        const seconds = String(dateObject.getSeconds()).padStart(2, '0');
      
        const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
      
        return formattedDate;
    }
      
    return convertDateFormat(date);
}