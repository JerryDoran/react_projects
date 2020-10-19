const useState = React.useState;
const useEffect = React.useEffect;
const useContext = React.useContext;
const useReducer = React.useReducer;

const UserContext = React.createContext();
const ChannelContext = React.createContext();
const CountContext = React.createContext();

const data = [
  {
    id: 1,
    name: 'Bertie Yates',
    age: 29,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
  },
  {
    id: 2,
    name: 'Hester Hogan',
    age: 32,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
  },
  {
    id: 3,
    name: 'Larry Little',
    age: 36,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
  },
  {
    id: 4,
    name: 'Sean Walsh',
    age: 34,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
  },
  {
    id: 5,
    name: 'Lola Gardner',
    age: 29,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
  },
];

// App Component
const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
};

// List Component
const List = ({ people }) => {
  return (
    <React.Fragment>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
