const getWeekday = (date) => {
    return new Date(Number(date)).toLocaleString("en-EN", {
        weekday: "long",
        timeZone: 'UTC'
    });
};

module.exports = { getWeekday };