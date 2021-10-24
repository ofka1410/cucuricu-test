let drones=[]
let heights=[]
let takeOffs=[]
  let bussy_heights=[]
  let height_free=[]

  function getRandomInt(min, max) {
    min = Math.ceil(1000);
    max = Math.floor(5000);
    return Math.floor(Math.random() * (max - min) + min);
 }


const setDrones_heights=()=>{
    for(let i=1;i<=20;i++){
     drones.push(
         {drone:`drown_${i}`,
           flyAprroved:false,
           height:0,
           distance:getRandomInt(),
           time_left:0,
           time_left_person_reached:Math.floor(Math.random() * 15)
          }
        )
    }
    for(let j=0;j<15;j++){
        let number=Math.floor(Math.random() * 500)
            heights.push(number)  
    }
    height_free=heights
  
    for(let i=1;i<240;i++){
         status_update()  
        }
     
}

const status_update=()=>{
    
    for(let i=0;i<drones.length;i++){
        if(!drones[i].flyAprroved){

        drones[i].time_left_person_reached-=1
        if(drones[i].time_left_person_reached>=0){
            console.log(`A person reached to ${drones[i].drone }`)
            take_off(drones[i])
        }
    }
    else if(drones[i].distance>0 ){
      on_flight(drones[i])
    }
    else{
        landed(drones[i])
    }
    }
    
 

}
const landed=(drone)=>{
drone.distance=0
drone.flyAprroved=false
console.log(`${drone.drone} landed `)
height_free.push(drone.height)
bussy_heights=bussy_heights.filter(el=>el!==drone.height)
drone.time_left_person_reached=Math.floor(Math.random() * 15)
drone.distance=getRandomInt()
drone.time_left=`${drone.distance/1000} minutes left`
}
const on_flight=(drone)=>{
    if(drone.distance-1000<=0){
        
        return landed(drone)
    }
    drone.distance-=1000
    drone.time_left=`${drone.distance/1000} minutes left`
    
}

const take_off=(drone)=>{
   
        if(drone.height==0  && height_free.length>0){
            drone.flyAprroved=true
            console.log(`${drone.drone} ask for premission to take off`)
            let index_height=Math.floor(Math.random() * height_free.length)
            let avialable_height=height_free[index_height]
            bussy_heights.push(height_free[index_height])
            height_free.splice(index_height,1)
                  
                drone.height=avialable_height
                drone.time_left=drone.distance/10
                console.log(`${drone.drone} premission aprroved, at height : ${avialable_height}`)
     
        }
        else{
            console.log(`${drone.drone} Premission denied, please wait for free height`)  
        }
}

setDrones_heights()