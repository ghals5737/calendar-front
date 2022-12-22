'use client';
import { useEffect, useState } from 'react'
import BasicLayout from '../components/common/basicLayout'
import getDays from '../utils/getDays'
import {useDaysInfo} from '../store/useDaysInfo'
import Calendar from '../components/calendar/calendar'

export default function Page(){
    
    return(       
        <BasicLayout>
            <Calendar></Calendar>
        </BasicLayout>        
    )
}
  