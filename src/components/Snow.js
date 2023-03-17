/**
 * It creates an array of 200 divs with the class name "snow" and returns them.
 */
export const Snow = ({ count = 200 }) => {
  const snowflakes = [];
  for (let i = 0; i < count; i++) {
    snowflakes.push(<div key={i} className="snow"></div>);
  }
  return <>{snowflakes}</>;
};
