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
    title: 'Do I have to allow the use of cookies?',
    info:
      'Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.',
  },
  {
    id: 2,
    title: 'How do I change my My Page password?',
    info:
      'Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.',
  },
  {
    id: 3,
    title: 'What is BankID?',
    info:
      'Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.',
  },
  {
    id: 4,
    title: 'Whose birth number can I use?',
    info:
      'Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.',
  },
  {
    id: 5,
    title: 'When do I recieve a password ordered by letter?',
    info:
      'Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan ',
  },
];

// App Component
const App = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {questions.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
};

// Question Component
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? (
            <i class='fas fa-minus'></i>
          ) : (
            <i class='fas fa-plus'></i>
          )}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
