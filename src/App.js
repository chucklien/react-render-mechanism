import React, { useRef, useState } from 'react';
import './styles.css';
// test commit message
const WrapperChild = React.memo(({ value }) => {
  const count = useRef(0);
  count.current = count.current + 1;
  return (
    <div>
      {value} <i style={{ color: 'red' }}>{count.current}</i>
    </div>
  );
});
const PersonWrapper = ({ person }) => {
  const count = useRef(0);
  count.current = count.current + 1;
  return (
    <>
      <div>
        {' '}
        render <i style={{ color: 'red' }}>{count.current}</i>{' '}
      </div>
      <WrapperChild value={person.name} />
      <WrapperChild value={person.age} />
    </>
  );
};
// if person obj is memoized than no need to use wrapper
let cachePerson = { name: 'chuck', age: 34 };
const PersonObj = React.memo(({ person }) => {
  const count = useRef(0);
  count.current = count.current + 1;
  return (
    <>
      <div>
        {' '}
        render <i style={{ color: 'red' }}>{count.current}</i>{' '}
      </div>
      <div>{person.name}</div>
      <div>{person.age}</div>
    </>
  );
});

const Person = React.memo(({ name, age }) => {
  const count = useRef(0);
  count.current = count.current + 1;
  return (
    <>
      <div>
        render <i style={{ color: 'red' }}>{count.current}</i>
      </div>
      <div>{name}</div>
      <div>{age}</div>
    </>
  );
});

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <button onClick={() => setCount((prev) => prev + 1)}>
        Click to re-render
      </button>
      <div>---PersonObj</div>
      <PersonObj person={{ name: 'chuck', age: 34 }} />
      <div>---PersonObj with cache obj</div>
      <PersonObj person={cachePerson} />
      <div>---PersonWrapper</div>
      <PersonWrapper person={{ name: 'chuck', age: 34 }} />
      <div>---Person</div>
      <Person name="chuck" age={34} />
    </div>
  );
}
