export default function getGridRange(start:number,end:number){
    const startGrid= [
        "grid-col-start-1",
        "grid-col-start-2",
        "grid-col-start-3",
        "grid-col-start-4",
        "grid-col-start-5",
        "grid-col-start-6",
        "grid-col-start-7",
    ]
    const endGrid=[
        "grid-col-end-2",
        "grid-col-end-3",
        "grid-col-end-4",
        "grid-col-end-5",
        "grid-col-end-6",
        "grid-col-end-7",
        "grid-col-end-8",
    ] 
   
    
    return startGrid[start]+" "+endGrid[end]  
}
