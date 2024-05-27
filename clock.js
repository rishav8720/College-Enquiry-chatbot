function displayTime() {
    const now = new Date();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const dayOfWeek = daysOfWeek[now.getDay()];
    const dayOfMonth = now.getDate();
    let daySuffix = 'th';
    if (dayOfMonth === 1 || dayOfMonth === 21 || dayOfMonth === 31) {
        daySuffix = 'st';
    } else if (dayOfMonth === 2 || dayOfMonth === 22) {
        daySuffix = 'nd';
    } else if (dayOfMonth === 3 || dayOfMonth === 23) {
        daySuffix = 'rd';
    }
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    let hour = now.getHours();
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12; 
    const minutes = ('0' + now.getMinutes()).slice(-2);

    const dateTimeString = `${dayOfWeek}, ${dayOfMonth}${daySuffix} ${month} ${year} ${hour}:${minutes} ${ampm}`;
    document.getElementById('clock').textContent = dateTimeString;
}


setInterval(displayTime, 1000);


displayTime();
