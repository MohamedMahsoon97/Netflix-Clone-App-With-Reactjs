import './Search.scss';
import { Close, SearchRounded } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Search = () => {
      return (
            <div className='search'>
                  <span>
                        <Link to="/">
                              <Close />
                        </Link>
                  </span>
                  <form>
                        <input type="text" placeholder='What do you think' />
                        <button><SearchRounded /></button>
                  </form>
            </div>
      );
};

export default Search;
