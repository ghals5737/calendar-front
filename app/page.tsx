'use client';
import BasicLayout from '../components/common/basicLayout'
import Calendar from '../components/calendar/calendar'
import Head from "next/head";
import {Fragment} from 'react';

export default function Page(){    
    return(       
            <BasicLayout>            
                <Calendar></Calendar>
            </BasicLayout>        
    )
}
  