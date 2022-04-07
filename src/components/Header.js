import '../components/Header.css';
import { SearchOutlined, GithubOutlined} from '@ant-design/icons';
import {Button} from 'antd';


function Header() {
    return (
        <div className="header">

        <div className="header_logo">
        <h1 className="header_logo--img">Browse Movies</h1>

        <div className="header_logo--searchbar">
        <input className="header_searchbar" type="text" placeholder="Search by  movie title"/>
        <SearchOutlined  style={{ fontSize: '24px', padding:'2px'}} className="header_searchicon" />
        
        </div>

        
        
        </div>

        <div className="header_nav">

        <div className="header_nav--item">
        <h3>Movies</h3>
        </div>
        <div className="header_nav--item">
        <GithubOutlined style={{ fontSize: '24px' }} />
        </div>

        <div className="header_nav--item">
        <Button className="header_nav--button" type="primary" danger>
        Sign In
      </Button>
       
        </div>

     



        
        </div>


            
        </div>
    )
}

export default Header

