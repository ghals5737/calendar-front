class days{    
    id:number;
    year: number;
    month: number;
    day: number;        
    date: Date;
    
    constructor(id:number,year:number,month:number,day:number,date:Date){
        this.id=id
        this.year=year
        this.month=month
        this.day=day
        this.date=date;
    }
}

export default days;