import Button from 'react-bootstrap/Button';

const Home = () => {
    return (  
        <div className="homepage" style={{height:'200vh',background:'black'}}>
            <div className='intro-text'>
                <h4>Welcome to my portfolio</h4>
                <h1>Hi! I'm JM</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
            <div>
                <img src="" alt="" />
                this is image
            </div>
            <Button variant="outline-warning" className='wrn-btn'>Warning</Button>
        </div>
    );
}
 
export default Home;