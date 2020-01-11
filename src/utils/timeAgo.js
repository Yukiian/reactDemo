export default function timeago(dateTimeStamp) {
    var result;
    var minute = 1000 * 60; //把分，时，天，周，半个月，一个月用毫秒表示
    var hour = minute * 60;
    var day = hour * 24;
    var week = day * 7;
    var halfamonth = day * 15;
    var month = day * 30;

    var now = new Date().getTime(); //获取当前时间毫秒
    var diffValue = now - dateTimeStamp //时间差

    if (diffValue < 0 || Number.isNaN(diffValue)) {
        return 'no time to convert';
    }

    var minC = diffValue / minute; //计算时间差的分，时，天，周，月
    var hourC = diffValue / hour;
    var dayC = diffValue / day;
    var weekC = diffValue / week;
    var monthC = diffValue / month;

    if (minC >= 1 && minC <= 60) {
        result = " " + parseInt(minC) + "分钟前"
    } else if (hourC >= 1 && hourC <= 24) {
        result = " " + parseInt(hourC) + "小时前"
    } else if (dayC >= 1) {
        result = " " + parseInt(dayC) + "天前"
    } else if (weekC >= 1) {
        result = " " + parseInt(weekC) + "周前"
    } else if (monthC >= 1) {
        result = " " + parseInt(monthC) + "月前"
    } else {
        result = "刚刚";
    }
    return result;
}