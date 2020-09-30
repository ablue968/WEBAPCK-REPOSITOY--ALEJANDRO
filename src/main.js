require('./style.css');

window.onload = function(){
    let pronoun = ['the','our'];
    let adj = ['great', 'big' ];
    let noun = ['jogger','racoon'];
    let domain =['.com','.net','.gob']
    for (i=0; i < pronoun.length; i++){
        for(i2=0; i2 < adj.length; i2++){
            for(i3=0; i3 < noun.length; i3++){
                for(i4=0; i4 < domain.length; i4++){
                    console.log(pronoun[i]+adj[i2]+noun[i3]+domain[i4]);
                }
            }
        }
    }
};