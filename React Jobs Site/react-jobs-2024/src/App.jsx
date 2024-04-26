const App = () => {
  const name = 'Gerard';
  const age = 20;
  const preferences = ['cats', 'dogs', 'food'];
  const loggedIn = true;

  const styles = {
    color: 'green',
    fontFamily: 'Robloto',
    fontSize: '55px',
  };

  return (
    <>
      <div className="text-5xl">App</div>
      <p style={{ color: 'red', fontFamily: 'arial'}}>Welcome</p>
      <p>Hello {name}, your age is {age}</p>
      <p>Here are your preferences:</p>
      <ul>
        {preferences.map((names, index) => (
          <li key={index} style={styles}>{names}</li>
        ))}
      </ul>
      { loggedIn && <h1>Hello Member</h1>}
    </>
  )
}

export default App