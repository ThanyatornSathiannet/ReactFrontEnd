import Hello from './assets/Hello';
import Contact from './assets/Contact';
import Counter from './assets/Counter';

function App() {
    const helloData = [
      {name: 'Thanyatorn', message: 'Hi There'},
      {name: 'Nhoon', message: 'Hello...'}
    ];

    return (
      <div>
        <Counter />
        {helloData.map((data, index) => (
          <Hello key={index} name={data.name} message={data.message} />
        ))}
        <Contact email="s6606021610079@gmail.com" phone="0612246941" />
      </div>
    );
}

export default App;
