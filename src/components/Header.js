import Button from './Button';

const Header = ({title, onAdd, showAdd}) => {
    return (
        <div className='container header-container'>
            <header>
                <div className='row'>
                    <div className='col-xs-12'>
                        <span>
                            <h1 className='text-white'>{title}</h1>
                            <Button className='add-task' text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
                        </span>
                    </div>
                </div>
            </header>
        </div>
    )
}

Header.defaultProps = {
    title : 'Task Tracker'
}

export default Header

