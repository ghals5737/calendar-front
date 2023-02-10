'use client';
import BasicLayout from '../components/common/basicLayout'
import Calendar from '../components/calendar/calendar'
import Head from "next/head";
import {Fragment} from 'react';

export default function Page(){    
    return(       
        <Fragment>
            <Head>
                <title>MINICAL</title>
                <link rel="icon" href="../img/favicon.ico" />
            </Head>
            <BasicLayout>            
                <Calendar></Calendar>
            </BasicLayout>        
        </Fragment>
    )
}
  