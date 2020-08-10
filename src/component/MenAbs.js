import React from 'react';
import Reactplayer from 'react-player'
const display=(chest, name, j)=>{
    console.log('in display')
    return(
        <div className="col-md-4 col-sm-4">
        <div className="card faded">
            <div className="wrapper">
            <Reactplayer
                    url={chest}
                    className='player'
                    width='100%'
                    height='100%'
                />

                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">perform this excersise atleast {j} times.</p>
                    
                </div>
                </div>
                </div>
    )
    
}
function array(chest, name, j) {

    var i=0;
    var tmp=[]
    for (i=0;i<chest.length;i++){
        if(i===2){
            tmp.push(<br></br>)
        }

        tmp.push(display(chest[i],name[i],j))

    }
    return tmp;
    
}
export default function Mench() {
    const bchest=['https://youtu.be/zJmYRT4v9rw','https://youtu.be/nmwgirgXLYM','https://youtu.be/_M2Etme-tfE','https://youtu.be/wkD8rjkodUI','https://youtu.be/9KIRT-5PMJU','https://youtu.be/l4kQd9eWclE','https://youtu.be/pSHjTRCQxIw','https://youtu.be/Aa6zdmje-c4','https://youtu.be/ezyMaQEaVaI']
    const bname=['Jumping Jack','Mountain climber','Abdominal Crunches','Russian Twist','heel touch','Leg Raise','plank','Cobra Stretch','spiner lumber twist stretch(right and then left)']
    const ichest=['https://youtu.be/zJmYRT4v9rw','https://youtu.be/nmwgirgXLYM','https://youtu.be/_M2Etme-tfE','https://youtu.be/wkD8rjkodUI','https://youtu.be/9KIRT-5PMJU','https://youtu.be/l4kQd9eWclE','https://youtu.be/pSHjTRCQxIw','https://youtu.be/9C9sbJfFjJM','https://youtu.be/8bbE64NuDTU','https://youtu.be/rHhWXanwoEs','https://youtu.be/4a7WpKZSBw4','https://youtu.be/iP2fjvG0g3w','https://youtu.be/HO_E8D-4MR8','https://youtu.be/Aa6zdmje-c4','https://youtu.be/ezyMaQEaVaI']
    const iname=['Jumping Jack','Mountain climber','Abdominal Crunches','Russian Twist','heel touch','Leg Raise','plank','side bridge(left and then right)','butt bridge','bicycle crunches','crossover crunches','v-ups','Push-Up and rotate','Cobra Stretch','spiner lumber twist stretch(right and then left)']
    const achest=['https://youtu.be/zJmYRT4v9rw','https://youtu.be/1fbU_MkV7NE','https://youtu.be/nmwgirgXLYM','https://youtu.be/_M2Etme-tfE','https://youtu.be/wkD8rjkodUI','https://youtu.be/9KIRT-5PMJU','https://youtu.be/l4kQd9eWclE','https://youtu.be/pSHjTRCQxIw','https://youtu.be/9C9sbJfFjJM','https://youtu.be/8bbE64NuDTU','https://youtu.be/rHhWXanwoEs','https://youtu.be/4a7WpKZSBw4','https://youtu.be/iP2fjvG0g3w','https://youtu.be/HO_E8D-4MR8','https://youtu.be/Aa6zdmje-c4','https://youtu.be/ezyMaQEaVaI']
    const aname=['Jumping Jack','Sit-Ups','Mountain climber','Abdominal Crunches','Russian Twist','heel touch','Leg Raise','plank','side bridge(left and then right)','butt bridge','bicycle crunches','crossover crunches','v-ups','Push-Up and rotate','Cobra Stretch','spiner lumber twist stretch(right and then left)']

    return (
        <div className="container-fluid">
                    <div className="beginner text-left">
                        <h3>beginner</h3><br />
                        <div className="row">
                        <div className="card-deck card-beg">
                            {array(bchest, bname,10)}
                        </div>
                    </div>
                </div>
                <div className="intermediate text-left">
                        <h3>intermediate</h3><br />
                        <div className="row">
                        <div className="card-deck card-int">
                            {array(ichest, iname,20)}
                        </div>
                    </div>
                </div>
                <div className="adv text-left"><hr/>
                        <h3>Advance</h3><br />
                        <div className="row">
                        <div className="card-deck card-adv">
                            {array(achest, aname,30)}
                        </div>
                    </div>
                </div>
                </div>
    )
}
