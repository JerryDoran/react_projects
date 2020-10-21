const useState = React.useState;
const useEffect = React.useEffect;
const useContext = React.useContext;
const useReducer = React.useReducer;

const UserContext = React.createContext();
const ChannelContext = React.createContext();
const CountContext = React.createContext();

const url = 'https://course-api.netlify.app/api/react-tabs-project';

// App Component
const App = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className='section loading'>
        <h1>loading...</h1>
      </section>
    );
  }

  const { company, dates, duties, title } = jobs[value];

  return (
    <section className='section'>
      <div className='title'>
        <h2>experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        {/* button container */}
        <div className='btn-container'>
          {jobs.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setValue(index)}
              className={`job-btn ${index === value && 'active-btn'}`}
            >
              {item.company}
            </button>
          ))}
        </div>

        {/* job info */}
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, index) => (
            <div key={index} className='job-desc'>
              <i className='fas fa-angle-double-right job-icon'></i>
              <p>{duty}</p>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
};

// Question Component
const Question = () => {
  return <article className='question'></article>;
};

ReactDOM.render(<App />, document.getElementById('app'));
