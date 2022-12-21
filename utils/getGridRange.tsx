export default function getGridRange(start:number,end:number){
    const startGrid= [
        " col-start-1 ",
        " col-start-2 ",
        " col-start-3 ",
        " col-start-4 ",
        " col-start-5 ",
        " col-start-6 ",
        " col-start-7 "
    ]
    const endGrid=[
        " col-end-2 ",
        " col-end-3 ",
        " col-end-4 ",
        " col-end-5 ",
        " col-end-6 ",
        " col-end-7 ",
        " col-end-8 ",
    ] 
   
    
    return startGrid[start]   
}
