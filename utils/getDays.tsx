import moment from 'moment'
import daysInfo from '../types/daysInfo'

export default function getDays(month:number){
    // 이번 달 배열에 담기 
    let result = []; // 이번 달 배열   
    let index=0; 
    const today = moment().month(month-1); // 오늘
    const todayFirstWeek = today.clone().startOf('month').week(); // 이번달의 첫째 주
    const todayLastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week(); // 이번달의 마지막 주    
    let week = todayFirstWeek;
    for (week; week <= todayLastWeek; week++) {
        let weekArray: daysInfo[] = []; // 주 별로 배열에 담음
        for (var i = 0; i < 7; i++) { // 7번 반복(일주일)
            let days = today.clone().startOf('year').week(week).startOf('week').add(i, 'day'); // 그날의 시간 정보
            // console.log(days.format('YYYY-MM-DD'))
            weekArray.push(
                new daysInfo(index++,Number(days.format('YYYY')),Number(days.format('MM')),Number(days.format('DD')))                
            )
        }  
        result.push(weekArray)
    }        
    
    return result    
}

