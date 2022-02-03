
import User from "./comonents/lessons_1/hm_01/users";
import user from "./dataBase/lessons_1/hm_1/user.json";

export default function App() {
    return <div>
        <User 
            username={user[0].username}  
            likes={user[0].stats.likes} 
            // url={user[0].avatar} 
            views={user[0].stats.views} 
            followers={user[0].stats.followers}
        />
            <User 
            username={user[1].username} 
            likes={user[1].stats.likes} 
            url={user[1].avatar} 
            views={user[1].stats.views} 
            followers={user[1].stats.followers}
        />
            <User 
            username={user[2].username} 
            likes={user[2].stats.likes} 
            url={user[2].avatar} 
            views={user[2].stats.views} 
            followers={user[2].stats.followers}
        />
    </div>
}