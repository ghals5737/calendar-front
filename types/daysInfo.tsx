class days{    
    id:number;
    year: number;
    month: number;
    day: number;        
    date: Date;
    ymd: string;
    
    constructor(id:number,year:number,month:number,day:number,date:Date,ymd:string){
        this.id=id
        this.year=year
        this.month=month
        this.day=day
        this.date=date
        this.ymd=ymd
    }
}

export default days;